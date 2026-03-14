"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const LION_FRAMES = [
  "/assets/lion/lev_g_1.svg",
  "/assets/lion/lev_g_2.svg",
  "/assets/lion/lev_g_3.svg",
];

const FRAME_SEQUENCE = [0, 1, 2, 1];
const FRAME_DURATION_MS = 180;
const FADE_DURATION_MS = 350;
const LION_WIDTH_PX = 100;
const FIRST_APPEARANCE_MIN_MS = 10; //10000;
const FIRST_APPEARANCE_MAX_MS = 30; //30000;
const STAY_MIN_MS = 10000;
const STAY_MAX_MS = 20000;
const NEXT_APPEARANCE_MIN_MS = 10; // 30000;
const NEXT_APPEARANCE_MAX_MS = 30; // 240000;

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomFloat(min, max) {
  return Math.random() * (max - min) + min;
}

function getFirstAppearanceDelay() {
  return randomBetween(FIRST_APPEARANCE_MIN_MS, FIRST_APPEARANCE_MAX_MS);
}

function getNextAppearanceDelay() {
  return randomBetween(NEXT_APPEARANCE_MIN_MS, NEXT_APPEARANCE_MAX_MS);
}

function createLionRun(viewportWidth) {
  const sidePadding = clamp(viewportWidth * 0.02, 8, 16);
  const width = Math.min(
    LION_WIDTH_PX,
    Math.max(96, viewportWidth - sidePadding * 2)
  );
  const maxX = Math.max(sidePadding, viewportWidth - width - sidePadding);
  const startX = randomFloat(sidePadding, maxX);

  let direction = Math.random() < 0.5 ? -1 : 1;
  const travelDistance = randomFloat(400, 800);
  const stayDuration = randomBetween(STAY_MIN_MS, STAY_MAX_MS);

  return {
    direction,
    endX: startX + direction * travelDistance,
    startX,
    stayDuration,
    walkDuration: stayDuration + FADE_DURATION_MS,
    width,
  };
}

export default function LionOverlay() {
  const [frameStep, setFrameStep] = useState(0);
  const [lionRun, setLionRun] = useState(null);
  const frameIntervalRef = useRef(null);
  const timeoutIdsRef = useRef([]);
  const animationFrameIdsRef = useRef([]);

  useEffect(() => {
    function clearFrameAnimation() {
      if (frameIntervalRef.current !== null) {
        window.clearInterval(frameIntervalRef.current);
        frameIntervalRef.current = null;
      }
    }

    function clearScheduledTimeouts() {
      timeoutIdsRef.current.forEach((timeoutId) => {
        window.clearTimeout(timeoutId);
      });
      timeoutIdsRef.current = [];
    }

    function clearScheduledAnimationFrames() {
      animationFrameIdsRef.current.forEach((animationFrameId) => {
        window.cancelAnimationFrame(animationFrameId);
      });
      animationFrameIdsRef.current = [];
    }

    function scheduleTimeout(callback, delay) {
      let timeoutId = null;

      timeoutId = window.setTimeout(() => {
        timeoutIdsRef.current = timeoutIdsRef.current.filter((id) => {
          return id !== timeoutId;
        });
        callback();
      }, delay);

      timeoutIdsRef.current.push(timeoutId);
      return timeoutId;
    }

    function scheduleAnimationFrame(callback) {
      let animationFrameId = null;

      animationFrameId = window.requestAnimationFrame(() => {
        animationFrameIdsRef.current = animationFrameIdsRef.current.filter(
          (id) => {
            return id !== animationFrameId;
          }
        );
        callback();
      });

      animationFrameIdsRef.current.push(animationFrameId);
      return animationFrameId;
    }

    function scheduleSpawn(delay) {
      scheduleTimeout(() => {
        const nextRun = createLionRun(window.innerWidth);

        setFrameStep(0);
        setLionRun({
          ...nextRun,
          phase: "entering",
          walking: false,
        });

        clearFrameAnimation();
        frameIntervalRef.current = window.setInterval(() => {
          setFrameStep((currentStep) => {
            return (currentStep + 1) % FRAME_SEQUENCE.length;
          });
        }, FRAME_DURATION_MS);

        scheduleAnimationFrame(() => {
          scheduleAnimationFrame(() => {
            setLionRun((currentRun) => {
              if (!currentRun) {
                return currentRun;
              }

              return {
                ...currentRun,
                phase: "visible",
                walking: true,
              };
            });
          });
        });

        scheduleTimeout(() => {
          setLionRun((currentRun) => {
            if (!currentRun) {
              return currentRun;
            }

            return {
              ...currentRun,
              phase: "leaving",
            };
          });
        }, FADE_DURATION_MS + nextRun.stayDuration);

        scheduleTimeout(() => {
          clearFrameAnimation();
          setLionRun(null);
          scheduleSpawn(getNextAppearanceDelay());
        }, FADE_DURATION_MS * 2 + nextRun.stayDuration);
      }, delay);
    }

    LION_FRAMES.forEach((frameSource) => {
      (new window.Image()).src = frameSource;
    });

    scheduleSpawn(getFirstAppearanceDelay());

    return () => {
      clearFrameAnimation();
      clearScheduledTimeouts();
      clearScheduledAnimationFrames();
    };
  }, []);

  if (!lionRun) {
    return null;
  }

  const currentFrame = LION_FRAMES[FRAME_SEQUENCE[frameStep]];
  const lionOpacity = lionRun.phase === "visible" ? 1 : 0;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[60] overflow-hidden select-none"
    >
      <div
        className="absolute left-0"
        style={{
          bottom: "max(0.75rem, env(safe-area-inset-bottom))",
          opacity: lionOpacity,
          transition: `opacity ${FADE_DURATION_MS}ms ease`,
        }}
      >
        <div
          style={{
            transform: `translate3d(${
              lionRun.walking ? lionRun.endX : lionRun.startX
            }px, 0, 0)`,
            transition: `transform ${lionRun.walkDuration}ms linear`,
            willChange: "transform",
          }}
        >
          <Image
            src={currentFrame}
            alt=""
            className="h-auto select-none"
            draggable="false"
            height={200}
            unoptimized
            style={{
              transform: `scaleX(${lionRun.direction})`,
              transformOrigin: "center bottom",
              width: `${lionRun.width}px`,
              willChange: "transform",
            }}
            width={477}
          />
        </div>
      </div>
    </div>
  );
}
