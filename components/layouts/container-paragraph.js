import { hasTextAlignmentClass } from "../../lib/text-alignment";

export default function ContainerParagraph({ className = "", children }) {
  const hasTextAlignment = hasTextAlignmentClass(className);
  const paragraphClassName = `my-2 w-full text-lg tracking-normal ${hasTextAlignment ? "" : "text-justify"} ${className}`.trim();

  return <p className={paragraphClassName}>{children}</p>;
}
