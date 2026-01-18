"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Team = () => {
  const teamMembers = [
    {
      img: "/assets/images/team/team-2-1.jpg",
      name: "Alisha Martin",
      position: "Cheif Expert",
    },
    {
      img: "/assets/images/team/team-2-2.jpg",
      name: "Devid Coper",
      position: "Product Designer",
    },
    {
      img: "/assets/images/team/team-2-3.jpg",
      name: "Naila Dev",
      position: "UI/UX Designer",
    },
    {
      img: "/assets/images/team/team-2-4.jpg",
      name: "Robert Martin",
      position: "CEO & Founder",
    },
    {
      img: "/assets/images/team/team-2-5.jpg",
      name: "Kevin Martis",
      position: "Chief Officer",
    },
    {
      img: "/assets/images/team/team-2-6.jpg",
      name: "Anila Koper",
      position: "Software Engineer",
    },
  ];

  return (
    <section className="team-two" id="team">
      <div className="team-two__shape-1">
        <img
          src="/assets/images/shapes/team-two-shape-1.png"
          alt=""
          className="rotate-me"
        />
      </div>
      <div className="container">
        <div className="section-title text-center sec-title-animation animation-style1">
          <div className="section-title__tagline-box">
            <span className="section-title__tagline">Our Expert Team</span>
          </div>
          <h2 className="section-title__title title-animation">
            See Our Skilled Expert <span>Team</span>
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
          // className="team-two__carousel owl-theme owl-carousel"
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide key={index}>
              <div className="item">
                <div className="team-two__single">
                  <div className="team-two__img-box">
                    <div className="team-two__img">
                      <img src={member.img} alt="" />
                    </div>
                  </div>
                  <div className="team-two__content-inner">
                    <div className="team-two__content">
                      <h3 className="team-two__title">
                        <a href="#team">{member.name}</a>
                      </h3>
                      <p className="team-two__sub-title">{member.position}</p>
                    </div>
                    <div className="team-two__arrow-and-social">
                      <div className="team-two__arrow">
                        <span className="icon-share"></span>
                      </div>
                      <ul className="team-two__social list-unstyled">
                        <li>
                          <a href="#">
                            <span className="icon-facebook-app-symbol"></span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="icon-twitter-1"></span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="icon-pinterest"></span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="icon-linkedin"></span>
                          </a>
                        </li>
                      </ul>
                    </div>
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

export default Team;
