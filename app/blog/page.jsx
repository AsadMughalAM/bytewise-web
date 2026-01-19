import React from "react";
import contentfulFetch from "@/lib/contentful";
import { GET_BLOG_POSTS_LIST } from "./query";
import Link from "next/link";

const BlogPage = async ({ searchParams }) => {
  const resolvedParams = await searchParams;
  const page = parseInt(resolvedParams.page) || 1;
  const search = resolvedParams.search || "";
  const category = resolvedParams.category || "";
  const limit = 9;
  const skip = (page - 1) * limit;

  const where = { private: false };
  if (search) {
    where.title_contains = search;
  }
  if (category) {
    // Ensure the category is a string and not an array/object
    const cleanCategory = Array.isArray(category) ? category[0] : category;
    where.category = cleanCategory;
  }

  const data = await contentfulFetch(GET_BLOG_POSTS_LIST, {
    limit: limit,
    skip: skip,
    where: where,
  });

  const blogs = data?.blogCollection?.items || [];
  const total = data?.blogCollection?.total || 0;
  const totalPages = Math.ceil(total / limit);

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

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
            <h3>Blog Listing</h3>
            <div className="thm-breadcrumb__inner">
              <ul className="thm-breadcrumb list-unstyled">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <span className="icon-arrow-angle-pointing-to-right"></span>
                </li>
                <li>Blog</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-page py-5">
        <div className="container">
          <div className="row mb-5 justify-content-center">
            <div className="col-lg-6">
              <div
                className="sidebar__single sidebar__search wow fadeInUp"
                data-wow-delay=".1s"
              >
                <form
                  action="/blog"
                  method="GET"
                  className="sidebar__search-form"
                >
                  <input
                    type="search"
                    name="search"
                    placeholder="Search articles..."
                    defaultValue={search}
                  />
                  <button type="submit">
                    <i className="fa fa-search"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
          {(search || category) && (
            <div className="d-flex align-items-center justify-content-between mb-4 p-3 bg-light rounded shadow-sm">
              <div className="d-flex align-items-center">
                <span className="me-2 fw-bold text-muted">Active Filters:</span>
                {search && (
                  <span className="badge bg-primary me-2 p-2 px-3 rounded-pill">
                    Search: {search}
                  </span>
                )}
                {category && (
                  <span className="badge bg-secondary me-2 p-2 px-3 rounded-pill">
                    Category: {category}
                  </span>
                )}
              </div>
              <Link
                href="/blog"
                className="btn btn-outline-danger btn-sm rounded-pill px-3"
              >
                <i className="fas fa-times me-1"></i> Clear All
              </Link>
            </div>
          )}
          <div className="row g-4">
            {blogs.map((blog, index) => (
              <div
                key={blog._id || index}
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay={`${((index % 3) + 1) * 100}ms`}
              >
                <div className="blog-one__single shadow-sm h-100 transition-all hover-translate-y">
                  <div className="blog-one__img">
                    <Link href={`/blog/${blog.slug}`}>
                      <img
                        src={
                          blog.thumbnail?.url ||
                          "/assets/images/blog/blog-2-1.jpg"
                        }
                        alt={blog.thumbnail?.title || blog.title}
                        className="img-fluid w-100 h-100"
                        style={{ objectFit: "cover" }}
                      />
                    </Link>
                  </div>
                  <div className="blog-one__content">
                    <ul className="blog-one__meta list-unstyled d-flex align-items-center mb-2">
                      <li className="me-3">
                        <Link
                          href={`/blog/${blog.slug}`}
                          className="text-muted small text-decoration-none"
                        >
                          <span className="far fa-calendar-alt text-primary me-1"></span>
                          {formatDate(blog.publishedDate)}
                        </Link>
                      </li>
                    </ul>
                    <h3 className="blog-one__title h6 mb-2">
                      <Link
                        href={`/blog/${blog.slug}`}
                        className="text-dark hover-primary text-decoration-none line-clamp-2 fw-bold"
                      >
                        {blog.title}
                      </Link>
                    </h3>
                    <p className="blog-one__excerpt text-muted small mb-0 line-clamp-2">
                      {blog.excerpt ||
                        "Explore our latest tech insights and industry news."}
                    </p>
                    <div className="blog-one__btn-box mt-auto pt-3 border-top d-flex justify-content-between align-items-center">
                      <Link
                        href={`/blog/${blog.slug}`}
                        className="btn btn-link p-0 text-primary text-decoration-none small fw-bold d-flex align-items-center"
                      >
                        Read More
                        <span className="fas fa-arrow-right ms-2 transition-transform"></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {blogs.length === 0 && (
            <div className="text-center py-5">
              <div className="mb-4">
                <span className="fas fa-search fa-3x text-muted opacity-25"></span>
              </div>
              <h3>No blog posts found.</h3>
              <p className="text-muted">
                We couldn't find any posts. Check back later!
              </p>
            </div>
          )}

          {totalPages > 1 && (
            <div className="blog-list__pagination mt-5">
              <ul className="pg-pagination list-unstyled d-flex justify-content-center align-items-center">
                {page > 1 && (
                  <li className="prev me-3">
                    <Link
                      href={`/blog?page=${page - 1}${search ? `&search=${encodeURIComponent(search)}` : ""}${category ? `&category=${encodeURIComponent(category)}` : ""}`}
                      className="btn btn-outline-primary rounded-circle d-flex align-items-center justify-content-center"
                      style={{ width: "45px", height: "45px" }}
                    >
                      <span className="fas fa-arrow-left"></span>
                    </Link>
                  </li>
                )}

                {[...Array(totalPages)].map((_, i) => (
                  <li
                    key={i + 1}
                    className={`count mx-1 ${page === i + 1 ? "active" : ""}`}
                  >
                    <Link
                      href={`/blog?page=${i + 1}${search ? `&search=${encodeURIComponent(search)}` : ""}${category ? `&category=${encodeURIComponent(category)}` : ""}`}
                      className={`btn ${page === i + 1 ? "btn-primary" : "btn-outline-primary"} rounded-circle d-flex align-items-center justify-content-center`}
                      style={{ width: "45px", height: "45px" }}
                    >
                      {i + 1}
                    </Link>
                  </li>
                ))}

                {page < totalPages && (
                  <li className="next ms-3">
                    <Link
                      href={`/blog?page=${page + 1}${search ? `&search=${encodeURIComponent(search)}` : ""}${category ? `&category=${encodeURIComponent(category)}` : ""}`}
                      className="btn btn-outline-primary rounded-circle d-flex align-items-center justify-content-center"
                      style={{ width: "45px", height: "45px" }}
                    >
                      <span className="fas fa-arrow-right"></span>
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default BlogPage;
