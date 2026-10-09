import Img from "./Img.jsx";
import { images } from "../../data/images.js";

/** Framed image with a consistent aspect ratio. ratio: "square" | "43" | "32" | "natural" */
export default function Media({ name, ratio = "43", sizes, eager, zoom = true, position, alt, className = "" }) {
  const cls = { square: "ar-square", 43: "ar-43", 32: "ar-32" }[ratio] ?? "";
  const e = images[name];
  const style = ratio === "natural" && e ? { aspectRatio: `${e.w} / ${e.h}` } : undefined;
  return (
    <div className={`media ${cls} ${zoom ? "media--zoom" : ""} ${className}`} style={style}>
      <Img name={name} sizes={sizes} eager={eager} position={position} alt={alt} />
    </div>
  );
}
