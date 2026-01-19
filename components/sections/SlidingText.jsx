import { services } from "@/data/servicesData";

const SlidingText = () => {
  const items = services.map((s) => s.title);

  return (
    <section className="sliding-text-one">
      <div className="sliding-text-one__wrap">
        <ul className="sliding-text-one__list list-unstyled marquee_mode-1">
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
