const SlidingText = () => {
  const items = [
    'UI/UX Design',
    'Product Design',
    'Web Development',
    'BRANDING',
    'Cyber Security',
    'Website design',
    'Digital Marketing',
    'Website design',
  ];

  return (
    <section className="sliding-text-one">
      <div className="sliding-text-one__wrap">
        <ul className="sliding-text-one__list list-unstyled marquee_mode-1">
          {items.map((item, index) => (
            <li key={index}>
              <h2 data-hover={item} className="sliding-text-one__title">{item}</h2>
              <span className="icon-star"></span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SlidingText;


