import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const Brand = () => {
  const brands = [
    '/assets/images/brand/brand-1-1.png',
    '/assets/images/brand/brand-1-2.png',
    '/assets/images/brand/brand-1-3.png',
    '/assets/images/brand/brand-1-4.png',
    '/assets/images/brand/brand-1-5.png',
  ];

  return (
    <section className="brand-two">
      <div className="brand-two__wrapper">
        <div className="container">
          <div className="brand-two__inner">
            <div className="brand-two__left">
              <div className="brand-two__trustpilot-box">
                <ul className="list-unstyled brand-two__trustpilot-img-list">
                  <li>
                    <div className="brand-two__trustpilot-img">
                      <img src="/assets/images/resources/brand-two-trustpilot-img-1.jpg" alt="" />
                    </div>
                  </li>
                  <li>
                    <div className="brand-two__trustpilot-img">
                      <img src="/assets/images/resources/brand-two-trustpilot-img-2.jpg" alt="" />
                    </div>
                  </li>
                </ul>
                <div className="brand-two__trustpilot-content-box">
                  <div className="brand-two__trustpilot-logo">
                    <img src="/assets/images/resources/brand-two-trustpilot-logo.png" alt="" />
                  </div>
                  <div className="brand-two__trustpilot-rating-review">
                    <p className="brand-two__trustpilot-rating">5.0 Excellent</p>
                    <p className="brand-two__trustpilot-review">Reviews <span className="odometer">4170</span></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="brand-two__right">
              <Swiper
                modules={[Autoplay]}
                loop={true}
                autoplay={{ delay: 3000 }}
                spaceBetween={30}
                breakpoints={{
                  0: { slidesPerView: 2 },
                  768: { slidesPerView: 3 },
                  992: { slidesPerView: 4 },
                  1200: { slidesPerView: 5 },
                }}
                className="brand-two__carousel owl-theme owl-carousel"
              >
                {brands.map((brand, index) => (
                  <SwiperSlide key={index}>
                    <div className="item">
                      <div className="brand-two__single">
                        <div className="brand-two__img">
                          <img src={brand} alt="" />
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brand;

