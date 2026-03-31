"use client";

import { useEffect } from "react";

export default function Feedback() {
  // redirect page to the feedback form
  useEffect(() => {
   window.location.replace("https://feedback.diecezko.cz");
  }, []);
  return null;

}
