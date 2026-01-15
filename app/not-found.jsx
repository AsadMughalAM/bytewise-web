import React from "react";

const NotFound = () => {
  return (
    <>
      <section
        className="error-page d-flex align-items-center justify-content-center p-5"
        style={{ minHeight: "80vh" }}
      >
        <div className="container">
          <div className="error-page__inner text-center">
            <div className="error-page__img float-bob-y mx-auto d-inline-block">
              <img
                src="/assets/images/resources/error-page-img1.png"
                alt="error image"
              />
            </div>

            <div className="error-page__content">
              <h2>Oops! Page Not Found!</h2>
              <p>
                The page you are looking for does not exist. It might have been
                moved or deleted.
              </p>
              <div className="btn-box">
                <a href="/" className="thm-btn">
                  Back To Home <span className="fas fa-arrow-right"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
