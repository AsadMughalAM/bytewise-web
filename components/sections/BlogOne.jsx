import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const BlogOne = () => {
  return (
    <section className="blog-one">
      <div className="blog-one__shape-1"></div>
      <div className="blog-one__shape-2"></div>
      <div className="blog-one__shape-3 float-bob">
        <img src="/assets/images/shapes/blog-one-shape-3.png" alt="" />
      </div>
      <div className="container">
        <div className="section-title text-center sec-title-animation animation-style1">
          <div className="section-title__tagline-box">
            <span className="section-title__tagline">Our Blogs</span>
          </div>
          <h2 className="section-title__title title-animation">
            Latest News & Articles From
            <br /> The <span>Blog Posts</span>
          </h2>
        </div>
        <div className="row">
          <div className="col-xl-6 wow fadeInLeft" data-wow-delay="100ms">
            <div className="blog-one__single">
              <div className="blog-one__img">
                <img src="/assets/images/blog/blog-1-1.jpg" alt="" />
                <div className="blog-one__tags">
                  <span>Digital</span>
                  <span>Technology</span>
                </div>
              </div>
              <div className="blog-one__content">
                <div className="blog-one__user">
                  <div className="blog-one__user-img">
                    <img src="/assets/images/blog/blog-one-user-1.jpg" alt="" />
                  </div>
                  <p className="blog-one__user-title">Malaika alise</p>
                </div>
                <ul className="blog-one__meta list-unstyled">
                  <li>
                    <a href="blog-details.html">
                      <span className="far fa-calendar-alt"></span>April 5, 2025
                    </a>
                  </li>
                  <li>
                    <a href="blog-details.html">
                      <span className="fal fa-comments"></span>80 Comments
                    </a>
                  </li>
                </ul>
                <h3 className="blog-one__title">
                  <a href="blog-details.html">
                    Improving Business Growth with New
                    <br /> Technology
                  </a>
                </h3>
                <p className="blog-one__text">
                  Winning the Digital business The 2025 Transformation Roadmap.
                  Holisticly leverage existing magnetic. Next-Gen Digital
                  Transformation
                </p>
                <div className="blog-one__btn-box">
                  <a href="blog-details.html" className="thm-btn">
                    Read More
                    <span className="fas fa-arrow-right"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div
              className="blog-one__single-two wow fadeInUp"
              data-wow-delay="200ms"
            >
              <div className="blog-one__img-two">
                <img src="/assets/images/blog/blog-1-2.jpg" alt="" />
                <div className="blog-one__tags-two">
                  <span>Digital</span>
                  <span>Technology</span>
                </div>
              </div>
              <div className="blog-one__content-two">
                <div className="blog-one__user-two">
                  <div className="blog-one__user-two-img">
                    <img src="/assets/images/blog/blog-one-user-2.jpg" alt="" />
                  </div>
                  <p className="blog-one__user-two-title">John Smith</p>
                </div>
                <ul className="blog-one__meta-two list-unstyled">
                  <li>
                    <a href="blog-details.html">
                      <span className="far fa-calendar-alt"></span>Feb 25, 2025
                    </a>
                  </li>
                  <li>
                    <a href="blog-details.html">
                      <span className="fal fa-comments"></span>22 Comments
                    </a>
                  </li>
                </ul>
                <h3 className="blog-one__title-two">
                  <a href="blog-details.html">
                    Regional Manager & limited management.
                  </a>
                </h3>
                <p className="blog-one__text-two">
                  Winning the Digital business The 2025 Transformation Roadmap.
                </p>
                <div className="blog-one__btn-box-two">
                  <a href="blog-details.html" className="thm-btn">
                    Reed More
                    <span className="fas fa-arrow-right"></span>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="blog-one__single-two wow fadeInUp"
              data-wow-delay="300ms"
            >
              <div className="blog-one__img-two">
                <img src="/assets/images/blog/blog-1-3.jpg" alt="" />
                <div className="blog-one__tags-two">
                  <span>Digital</span>
                  <span>Technology</span>
                </div>
              </div>
              <div className="blog-one__content-two">
                <div className="blog-one__user-two">
                  <div className="blog-one__user-two-img">
                    <img src="/assets/images/blog/blog-one-user-3.jpg" alt="" />
                  </div>
                  <p className="blog-one__user-two-title">Jerin jara</p>
                </div>
                <ul className="blog-one__meta-two list-unstyled">
                  <li>
                    <a href="blog-details.html">
                      <span className="far fa-calendar-alt"></span>May 19, 2025
                    </a>
                  </li>
                  <li>
                    <a href="blog-details.html">
                      <span className="fal fa-comments"></span>15 Comments
                    </a>
                  </li>
                </ul>
                <h3 className="blog-one__title-two">
                  <a href="blog-details.html">
                    Easy and Most Powerful Server and Platform.
                  </a>
                </h3>
                <p className="blog-one__text-two">
                  Winning the Digital business The 2025 Transformation Roadmap.
                </p>
                <div className="blog-one__btn-box-two">
                  <a href="blog-details.html" className="thm-btn">
                    Reed More
                    <span className="fas fa-arrow-right"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogOne;
