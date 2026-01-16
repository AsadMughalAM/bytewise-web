import React from "react";

const BlogDetailsPage =async ({ params }) => {
  const { slug } =await params;
  
  return (
    <>
      <section className="page-header">
        <div
          className="page-header__bg"
          style={{
            backgroundImage:
              "url(/assets/images/backgrounds/page-header-bg.jpg)",
          }}
        ></div>
        <div className="container">
          <div className="page-header__inner">
            <h3>Blog Details</h3>
            <div className="thm-breadcrumb__inner">
              <ul className="thm-breadcrumb list-unstyled">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <span className="icon-arrow-angle-pointing-to-right"></span>
                </li>
                <li>Blog Details</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="blog-details">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-7">
              <div className="blog-details__left">
                <div className="blog-details__img">
                  <img src="/assets/images/blog/blog-details-img-1.jpg" alt="" />
                  <div className="blog-details__date">
                    <p>
                      12
                      <br />
                      Nov
                    </p>
                  </div>
                </div>
                <div className="blog-details__content">
                  <div className="blog-details__user-and-meta">
                    <div className="blog-details__user">
                      <p>
                        <span className="fas fa-user"></span>By Admin
                      </p>
                    </div>
                    <ul className="blog-details__meta list-unstyled">
                      <li>
                        <a href="#">
                          <span className="fas fa-comments"></span>Comments (05)
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="fas fa-clock"></span>4 Min Read
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h3 className="blog-details__title">
                    Top IT Trends in 2025. What Businesses Need to Know
                  </h3>
                  <p className="blog-details__text-1">
                    Out enigma ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute inure dolor in the reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat null pariatur. Excepteur
                    snit occaecat cupidatat non proident, sunt in culpa qui
                    officia deserunt mollit anim id est laborum.
                  </p>
                  <p className="blog-details__text-2">
                    The wise man therefore always holds in these matters to this
                    principle of selection. He rejects pleasures to secure other
                    greater pleasures, or else he endures pains to avoid worse
                    pains to the selection point.
                  </p>
                  <div className="blog-details__author-box">
                    <h4 className="blog-details__author-text">
                      “Globally cultivate ubiquitous growth strategies before
                      team building users. Dramatically transform effective
                      internal or "organic" sources for sound e-services.
                      Authoritatively harness performance based customer service
                      via intermandated”
                    </h4>
                    <p className="blog-details__author-name">
                      Kane Williamson<span> / CEO</span>
                    </p>
                  </div>
                  <h3 className="blog-details__title-2">
                    How to become a successful businessman
                  </h3>
                  <p className="blog-details__text-3">
                    Out enigma ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute inure dolor in the reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat null pariatur. Excepteur
                    snit occaecat cupidatat non proident, sunt in culpa qui
                    officia deserunt mollit anim id est laborum.
                  </p>
                  <div className="blog-details__img-box">
                    <div className="row">
                      <div className="col-xl-6">
                        <div className="blog-details__img-box-img">
                          <img
                            src="/assets/images/blog/blog-details-img-box-img-1.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="blog-details__img-box-img">
                          <img
                            src="/assets/images/blog/blog-details-img-box-img-2.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="blog-details__tag-and-share">
                    <div className="blog-details__tag">
                      <h3 className="blog-details__tag-title">Tags :</h3>
                      <ul className="blog-details__tag-list list-unstyled">
                        <li>
                          <a href="#">Analysis</a>
                        </li>
                        <li>
                          <a href="#">Planning</a>
                        </li>
                        <li>
                          <a href="#">Management</a>
                        </li>
                      </ul>
                    </div>
                    <div className="blog-details__share-box">
                      <h3 className="blog-details__share-title">Share :</h3>
                      <div className="blog-details__share">
                        <a href="#">
                          <span className="icon-facebook-app-symbol"></span>
                        </a>
                        <a href="#">
                          <span className="icon-twitter-1"></span>
                        </a>
                        <a href="#">
                          <span className="icon-linkedin"></span>
                        </a>
                        <a href="#">
                          <span className="icon-pinterest"></span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="comment-one">
                    <div className="comment-one__single">
                      <div className="comment-one__image">
                        <img src="/assets/images/blog/comment-1-1.jpg" alt="" />
                      </div>
                      <div className="comment-one__content">
                        <h3>Theresa Webb</h3>
                        <span>02 June 2025 at 03:30 pm</span>
                        <p>
                          The wise man therefore always holds in these matters
                          to this principle of selection. He rejects pleasures
                          to secure other greater pleasures, or else he endures
                          pains to avoid worse pains to the selection point. But
                          in certain to all this circumstances
                        </p>
                        <div className="comment-one__btn-box">
                          <a href="blog-details.html" className="thm-btn">
                            Reply<span className="fas fa-arrow-right"></span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="comment-one__single">
                      <div className="comment-one__image">
                        <img src="/assets/images/blog/comment-1-2.jpg" alt="" />
                      </div>
                      <div className="comment-one__content">
                        <h3>Cameron Williamson</h3>
                        <span>02 June 2025 at 03:30 pm</span>
                        <p>
                          The wise man therefore always holds in these matters
                          to this principle of selection. He rejects pleasures
                          to secure other greater pleasures, or else he endures
                          pains to avoid worse pains to the selection point. But
                          in certain to all this circumstances
                        </p>
                        <div className="comment-one__btn-box">
                          <a href="blog-details.html" className="thm-btn">
                            Reply<span className="fas fa-arrow-right"></span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-5">
              <div className="sidebar">
                <div
                  className="sidebar__single sidebar__search wow fadeInUp"
                  data-wow-delay=".1s"
                >
                  <form action="#" className="sidebar__search-form">
                    <input type="search" placeholder="Search..." />
                    <button type="submit">
                      <i className="fa fa-search"></i>
                    </button>
                  </form>
                </div>

                <div
                  className="sidebar__single sidebar__category wow fadeInUp"
                  data-wow-delay=".1s"
                >
                  <h3 className="sidebar__title">Categories</h3>
                  <ul className="sidebar__category-list list-unstyled">
                    <li>
                      <a href="#">
                        IT Solution <span>(12)</span>
                      </a>
                    </li>
                    <li className="active">
                      <a href="#">
                        SEO Marketing
                        <span>(15)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Web Development <span>(08)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        UI/UX Design <span>(20)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Cloud Solution <span>(14)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Products Design <span>(05)</span>
                      </a>
                    </li>
                  </ul>
                </div>

                <div
                  className="sidebar__single sidebar__post wow fadeInUp"
                  data-wow-delay=".1s"
                >
                  <h3 className="sidebar__title">Recent Post</h3>
                  <ul className="sidebar__post-list list-unstyled">
                    <li>
                      <div className="sidebar__post-image">
                        <img src="/assets/images/blog/blog-lp-1.jpg" alt="" />
                      </div>
                      <div className="sidebar__post-content">
                        <p className="sidebar__post-date">
                          <span className="icon-calendar"></span>March 18, 2025
                        </p>
                        <h3 className="sidebar__post-title">
                          <a href="blog-details.html">
                            Adapting to Digital Marketing Trends: Staying Ahead
                          </a>
                        </h3>
                      </div>
                    </li>
                    <li>
                      <div className="sidebar__post-image">
                        <img src="/assets/images/blog/blog-lp-2.jpg" alt="" />
                      </div>
                      <div className="sidebar__post-content">
                        <p className="sidebar__post-date">
                          <span className="icon-calendar"></span>April 18, 2025
                        </p>
                        <h3 className="sidebar__post-title">
                          <a href="blog-details.html">
                            Standing Out in a Competitive Market:{" "}
                          </a>
                        </h3>
                      </div>
                    </li>
                    <li>
                      <div className="sidebar__post-image">
                        <img src="/assets/images/blog/blog-lp-3.jpg" alt="" />
                      </div>
                      <div className="sidebar__post-content">
                        <p className="sidebar__post-date">
                          <span className="icon-calendar"></span>Jun 18, 2025
                        </p>
                        <h3 className="sidebar__post-title">
                          <a href="blog-details.html">
                            The Importance of Accurate Performance Reporting{" "}
                          </a>
                        </h3>
                      </div>
                    </li>
                  </ul>
                </div>

                <div
                  className="sidebar__single sidebar__tags wow fadeInUp"
                  data-wow-delay=".1s"
                >
                  <h3 className="sidebar__title">Tags Cloud</h3>
                  <ul className="sidebar__tags-list clearfix list-unstyled">
                    <li>
                      <a href="#">Development</a>
                    </li>
                    <li>
                      <a href="#">Start Up</a>
                    </li>
                    <li>
                      <a href="#">Agency</a>
                    </li>
                    <li>
                      <a href="#">Innovation</a>
                    </li>
                    <li>
                      <a href="#">Analytics</a>
                    </li>
                    <li>
                      <a href="#">Business</a>
                    </li>
                    <li>
                      <a href="#">Services</a>
                    </li>
                    <li>
                      <a href="#">Technology</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetailsPage;
