import React from "react";
import Link from "next/link";

const PageHeader = ({ title, breadcrumb = [] }) => {
  return (
    <section className="page-header">
      <div
        className="page-header__bg"
        style={{
          backgroundImage: "url(/assets/images/backgrounds/page-header-bg.jpg)",
        }}
      ></div>
      <div className="container">
        <div className="page-header__inner">
          <h3 className="text-capitalize">{title}</h3>
          <div className="thm-breadcrumb__inner">
            <ul className="thm-breadcrumb list-unstyled">
              {breadcrumb.map((item, index) => (
                <React.Fragment key={index}>
                  <li>
                    {item.link ? (
                      <Link href={item.link}>{item.label}</Link>
                    ) : (
                      item.label
                    )}
                  </li>
                  {index < breadcrumb.length - 1 && (
                    <li>
                      <span className="icon-arrow-angle-pointing-to-right"></span>
                    </li>
                  )}
                </React.Fragment>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
