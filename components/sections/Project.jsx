import { useEffect } from "react";

const Project = () => {
  useEffect(() => {
    // Initialize Magnific Popup for image popup
    if (window.jQuery && window.jQuery().magnificPopup) {
      window.jQuery(".img-popup").magnificPopup({
        type: "image",
        gallery: {
          enabled: true,
        },
      });
    }
  }, []);

  const projects = [
    {
      img: "/assets/images/project/project-3-1.jpg",
      subtitle: "Itzone",
      title: "Hosting Solution",
      delay: "100ms",
      animation: "fadeInLeft",
    },
    {
      img: "/assets/images/project/project-3-2.jpg",
      subtitle: "Itzone",
      title: "Technology Growth",
      delay: "300ms",
      animation: "fadeInLeft",
    },
    {
      img: "/assets/images/project/project-3-3.jpg",
      subtitle: "Itzone",
      title: "Safety Gurranted",
      delay: "600ms",
      animation: "fadeInRight",
    },
    {
      img: "/assets/images/project/project-3-4.jpg",
      subtitle: "Itzone",
      title: "It Consultency",
      delay: "900ms",
      animation: "fadeInRight",
    },
  ];

  return (
    <section className="project-three" id="project">
      <div
        className="project-three__bg-shape"
        style={{
          backgroundImage:
            "url(/assets/images/shapes/project-three-bg-shape.png)",
        }}
      ></div>
      <div className="container">
        <div className="project-three__top">
          <div className="section-title text-leftcenter sec-title-animation animation-style2">
            <div className="section-title__tagline-box">
              <span className="section-title__tagline">See Our Project</span>
            </div>
            <h2 className="section-title__title title-animation">
              Explore Our Recent <span>Work</span>
            </h2>
          </div>
          <div className="project-three__btn-box">
            <a href="#project" className="thm-btn">
              view all projects
              <span className="fas fa-arrow-right"></span>
            </a>
          </div>
        </div>
      </div>
      <div className="project-three__bottom">
        <div className="container">
          <div className="row">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`col-xl-3 col-lg-6 col-md-6 wow ${project.animation}`}
                data-wow-delay={project.delay}
              >
                <div className="project-three__single">
                  <div className="project-three__img-box">
                    <div className="project-three__img">
                      <img src={project.img} alt="" />
                    </div>
                    <div className="project-three__content">
                      <div className="project-three__title-box">
                        <p className="project-three__sub-title">
                          {project.subtitle}
                        </p>
                        <h3 className="project-three__title">
                          <a href="#project">{project.title}</a>
                        </h3>
                      </div>
                      <div className="project-three__arrow">
                        <a href={project.img} className="img-popup">
                          <span className="icon-right-arrow"></span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
