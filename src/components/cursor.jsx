import { useRef } from "react";
import "./cursor.css";

export const Cursor = () => {
  const cursor = useRef(null);
  const pointer = useRef(null);
  {
    document.addEventListener("mousemove", (e) => {
      const x = e.clientX - 25;
      const y = e.clientY - 25;
      cursor.current.style.left = x + "px";
      cursor.current.style.top = y + "px";
    });

    document.addEventListener("mousedown", (e) => {
      pointer.current.classList.add("scale");
    });

    document.addEventListener("mouseup", (e) => {
      pointer.current.classList.remove("scale");
    });

    // Show and Disappear Cursor

    document.addEventListener("mouseenter", () => {
      cursor.current.style.opacity = "1";
    });

    document.addEventListener("mouseleave", () => {
      cursor.current.style.opacity = "0";
    });
  }

  return (
    <>
      <div id="cursor" ref={cursor}>
        <div className="pointer" ref={pointer}></div>
      </div>
    </>
  );
};
