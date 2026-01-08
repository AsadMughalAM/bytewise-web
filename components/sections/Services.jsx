import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Services = () => {
  const services = [
    {
      icon: 'icon-financial',
      title: 'Cloud Solutions provider',
      text: 'Comprehensive IT management, including network monitoring, data backup',
      link: '#services',
    },
    {
      icon: 'icon-software-development',
      title: 'Software Development',
      text: 'Comprehensive IT management, including network monitoring, data backup',
      link: '#services',
    },
    {
      icon: 'icon-cyber-security',
      title: 'Cybersecurity Solutions',
      text: 'Comprehensive IT management, including network monitoring, data backup',
      link: '#services',
    },
    {
      icon: 'icon-digital-service',
      title: 'All Kind Of IT Services',
      text: 'Comprehensive IT management, including network monitoring, data backup',
      link: '#services',
    },
    {
      icon: 'icon-promotion-1',
      title: 'Data Analytics Consulting',
      text: 'Comprehensive IT management, including network monitoring, data backup',
      link: '#services',
    },
  ];

  return (
    <section className="services-three" id="services">
      <div className="services-three__shape-1"></div>
      <div className="services-three__shape-2 float-bob-x">
        <img src="/assets/images/shapes/services-three-shape-2.png" alt="" />
      </div>
      <div className="container">
        <div className="section-title text-center sec-title-animation animation-style1">
          <div className="section-title__tagline-box">
            <span className="section-title__tagline">Our Services</span>
          </div>
          <h2 className="section-title__title title-animation">
            Reliable Services Crafted To <br />Your <span>Expectations</span>
          </h2>
        </div>
        <Swiper
          modules={[Autoplay, Pagination]}
          loop={true}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
          spaceBetween={30}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
            1200: { slidesPerView: 4 },
          }}
          className="services-three__carousel owl-theme owl-carousel"
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div className="item">
                <div className="services-three__single">
                  <div className="services-three__icon">
                    <span className={service.icon}></span>
                  </div>
                  <h3 className="services-three__title">
                    <a href={service.link}>{service.title}</a>
                  </h3>
                  <p className="services-three__text">{service.text}</p>
                  <div className="services-three__read-more">
                    <a href={service.link}>
                      Read More
                      <span className="fas fa-arrow-right"></span>
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Services;

