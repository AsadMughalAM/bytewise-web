"use client";
import { useEffect } from "react";

const CustomCursor = () => {
  useEffect(() => {
    // Add class to body
    document.body.classList.add("custom-cursor");

    // Create cursor elements if they don't exist
    let cursor = document.querySelector(".custom-cursor__cursor");
    let cursorTwo = document.querySelector(".custom-cursor__cursor-two");

    if (!cursor) {
      cursor = document.createElement("div");
      cursor.className = "custom-cursor__cursor";
      document.body.appendChild(cursor);
    }

    if (!cursorTwo) {
      cursorTwo = document.createElement("div");
      cursorTwo.className = "custom-cursor__cursor-two";
      document.body.appendChild(cursorTwo);
    }

    const onMouseMove = (e) => {
      const { clientX: x, clientY: y } = e;
      if (cursor) {
        cursor.style.transform = `translate3d(calc(${x}px - 50%), calc(${y}px - 50%), 0)`;
      }
      if (cursorTwo) {
        cursorTwo.style.left = `${x}px`;
        cursorTwo.style.top = `${y}px`;
      }
    };

    const onMouseDown = () => {
      if (cursor) cursor.classList.add("click");
      if (cursorTwo) cursorTwo.classList.add("custom-cursor__innerhover");
    };

    const onMouseUp = () => {
      if (cursor) cursor.classList.remove("click");
      if (cursorTwo) cursorTwo.classList.remove("custom-cursor__innerhover");
    };

    // Use event delegation for hover effects on links
    const onMouseOver = (e) => {
      if (
        e.target.closest("a") ||
        e.target.closest("button") ||
        e.target.classList.contains("thm-btn")
      ) {
        if (cursor) cursor.classList.add("custom-cursor__hover");
      }
    };

    const onMouseOut = (e) => {
      if (
        e.target.closest("a") ||
        e.target.closest("button") ||
        e.target.classList.contains("thm-btn")
      ) {
        if (cursor) cursor.classList.remove("custom-cursor__hover");
      }
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseover", onMouseOver);
    document.addEventListener("mouseout", onMouseOut);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseout", onMouseOut);
    };
  }, []);

  return null;
};

export default CustomCursor;
