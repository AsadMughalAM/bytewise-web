"use client";
import { useEffect, useRef } from "react";
import { services } from "@/data/servicesData";

const SlidingText = () => {
  const items = services.map((s) => s.title);
  const marqueeRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined" && window.jQuery) {
      const $ = window.jQuery;

      // Initialize marquee
      if ($(marqueeRef.current).length) {
        $(marqueeRef.current).marquee({
          speed: 40,
          gap: 20,
          delayBeforeStart: 0,
          direction: "left",
          duplicated: true,
          pauseOnHover: true,
          startVisible: true,
        });
      }
    }
  }, []);

  return (
    <section className="sliding-text-one">
      <div className="sliding-text-one__wrap">
        <ul ref={marqueeRef} className="sliding-text-one__list list-unstyled">
          {items.map((item, index) => (
            <li key={index}>
              <h2 data-hover={item} className="sliding-text-one__title">
                {item}
              </h2>
              <span className="icon-star"></span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SlidingText;
