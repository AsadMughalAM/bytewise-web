"use client";
import { useEffect, useRef } from "react";

const Counter = () => {
  const counters = [
    {
      icon: "icon-trophy",
      count: 120,
      suffix: "+",
      text: "award Winning",
      delay: "100ms",
    },
    {
      icon: "icon-costumer",
      count: 99,
      suffix: "%",
      text: "Satisfied client",
      delay: "200ms",
    },
    {
      icon: "icon-rating",
      count: 10,
      suffix: "M",
      text: "worldwide reviews",
      delay: "300ms",
    },
    {
      icon: "icon-customer",
      count: 200,
      suffix: "+",
      text: "Happy Clients",
      delay: "400ms",
    },
  ];

  const counterRefs = counters.map(() => useRef(null));

  useEffect(() => {
    if (window.Odometer) {
      counterRefs.forEach((ref, index) => {
        if (ref.current) {
          const odometer = new window.Odometer({
            el: ref.current,
            value: 0,
          });
          odometer.update(counters[index].count);
        }
      });
    }
  }, []);

  return (
    <section className="counter-two">
      <div
        className="counter-two__bg-shape float-bob-y"
        style={{
          backgroundImage:
            "url(/assets/images/shapes/counter-two-bg-shape.png)",
        }}
      ></div>
      <div className="container">
        <div className="row">
          {counters.map((counter, index) => (
            <div
              key={index}
              className={`col-xl-3 col-lg-6 col-md-6 wow ${
                index < 2 ? "fadeInLeft" : "fadeInRight"
              }`}
              data-wow-delay={counter.delay}
            >
              <div className="counter-two__single">
                <div className="counter-two__icon">
                  <span className={counter.icon}></span>
                </div>
                <div className="counter-two__content">
                  <div className="counter-two__count-box">
                    <h3 className="odometer" ref={counterRefs[index]}>
                      00
                    </h3>
                    <span>{counter.suffix}</span>
                  </div>
                  <p className="counter-two__text">{counter.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Counter;
