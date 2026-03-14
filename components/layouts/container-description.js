import { hasTextAlignmentClass } from "../../lib/text-alignment";

export default function ContainerDescription({ children, className = "" }) {
  const hasTextAlignment = hasTextAlignmentClass(className);
  const descriptionClassName = `my-2 tracking-wide font-semibold text-lg ${hasTextAlignment ? "" : "text-justify"} ${className}`.trim();

  return (
    <p className={descriptionClassName}>{children}</p>
  );
}
