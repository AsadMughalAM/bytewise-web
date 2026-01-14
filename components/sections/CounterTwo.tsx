"use client";

import CountUp from "react-countup";

const CounterTwo = () => {
  const counters = [
    { icon: "icon-trophy", count: 120, suffix: "+", text: "award Winning" },
    { icon: "icon-costumer", count: 99, suffix: "%", text: "Satisfied client" },
    { icon: "icon-rating", count: 10, suffix: "M", text: "worldwide reviews" },
    { icon: "icon-customer", count: 200, suffix: "+", text: "Happy Clients" },
  ];

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
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft"
              data-wow-delay={`${(index + 1) * 100}ms`}
            >
              <div className="counter-two__single">
                <div className="counter-two__icon">
                  <span className={counter.icon}></span>
                </div>

                <div className="counter-two__content">
                  <div className="counter-two__count-box">
                    <h3 className="odometer">
                      <CountUp
                        end={counter.count}
                        duration={2.5}
                      />
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

export default CounterTwo;
