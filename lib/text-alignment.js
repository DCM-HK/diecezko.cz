export function hasTextAlignmentClass(className = "") {
  return /(?:^|\s)(?:[a-z0-9-]+:)*!?text-(left|right|center|justify|start|end)\b/.test(className);
}
