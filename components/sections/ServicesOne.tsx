import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const ServicesOne = () => {
    const services = [
        {
            icon: 'icon-social-media-marketing',
            title: 'Software Development',
            text: 'Innovating and empowering businesses with tailored solutions for success and growth.',
            link: 'software-development.html'
        },
        {
            icon: 'icon-financial-risk',
            title: 'Risk Management',
            text: 'Innovating and empowering businesses with tailored solutions for success and growth.',
            link: 'web-development.html'
        },
        {
            icon: 'icon-ux-design',
            title: 'UI/UX Design',
            text: 'Innovating and empowering businesses with tailored solutions for success and growth.',
            link: 'ui-ux-design.html'
        },
        {
            icon: 'icon-promotion',
            title: 'Digital Marketing',
            text: 'Innovating and empowering businesses with tailored solutions for success and growth.',
            link: 'digital-marketing.html'
        },
        {
            icon: 'icon-implement',
            title: 'Cloud Provider',
            text: 'Innovating and empowering businesses with tailored solutions for success and growth.',
            link: 'software-development.html'
        },
        {
            icon: 'icon-monitor',
            title: 'Data Analytics',
            text: 'Innovating and empowering businesses with tailored solutions for success and growth.',
            link: 'business-analysis.html'
        }
    ];

    return (
        <section className="service-one">
            <div className="services-one__shape-1"></div>
            <div className="services-one__shape-2 float-bob-x">
                <img src="/assets/images/shapes/services-one-shape-2.png" alt="" />
            </div>
            <div className="container">
                <div className="section-title text-center sec-title-animation animation-style1">
                    <div className="section-title__tagline-box">
                        <span className="section-title__tagline">Our Services</span>
                    </div>
                    <h2 className="section-title__title title-animation">Innovative IT Services
                        <br /> Tailored <span>For Your Success.</span>
                    </h2>
                </div>
                <Swiper
                    modules={[Autoplay]}
                    loop={true}
                    autoplay={{ delay: 5000 }}
                    spaceBetween={30}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        992: { slidesPerView: 3 },
                        1200: { slidesPerView: 4 },
                    }}
                   
                >
                    {services.map((service, index) => (
                        <SwiperSlide key={index}>
                            <div className="item">
                                <div className="service-one__single-inner">
                                    <div className="service-one__single-wrap">
                                        <div className="service-one__single">
                                            <div className="service-one__single-shape-1"></div>
                                            <div className="service-one__icon">
                                                <span className={service.icon}></span>
                                            </div>
                                            <h3 className="service-one__title"><a href={service.link}>{service.title}</a></h3>
                                            <p className="service-one__text">{service.text}</p>
                                        </div>
                                    </div>
                                    <div className="service-one__btn-box">
                                        <a href={service.link} className="thm-btn">Read More
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

export default ServicesOne;
