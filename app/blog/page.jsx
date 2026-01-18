import React from "react";
import contentfulFetch from "@/lib/contentful";
import { GET_BLOG_POSTS_LIST } from "./query";
import Link from "next/link";

const BlogPage = async () => {
  const data = await contentfulFetch(GET_BLOG_POSTS_LIST, {
    limit: 12,
    skip: 0,
  });
  const blogs = data.blogCollection.items;

  const formatDate = (dateString) => {
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
            <h3>Blog</h3>
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
      <section className="blog-page">
        <div className="container">
          <div className="row">
            {blogs.map((blog, index) => (
              <div
                key={blog._id}
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay={`${((index % 3) + 1) * 100}ms`}
              >
                <div className="blog-one__single">
                  <div className="blog-one__img">
                    <img
                      src={
                        blog.thumbnail?.url ||
                        "/assets/images/blog/blog-2-1.jpg"
                      }
                      alt={blog.thumbnail?.title || blog.title}
                    />
                    <div className="blog-one__tags">
                      {blog.tags?.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                  <div className="blog-one__content">
                    <div className="blog-one__user">
                      <div className="blog-one__user-img">
                        <img
                          src="/assets/images/blog/blog-one-user-1.jpg"
                          alt=""
                        />
                      </div>
                      <p className="blog-one__user-title">Admin</p>
                    </div>
                    <ul className="blog-one__meta list-unstyled">
                      <li>
                        <Link href={`/blog/${blog.slug}`}>
                          <span className="far fa-calendar-alt"></span>
                          {formatDate(blog.publishedDate)}
                        </Link>
                      </li>
                      <li>
                        <Link href={`/blog/${blog.slug}`}>
                          <span className="fal fa-comments"></span>
                          {blog.comments || "0"} Comments
                        </Link>
                      </li>
                    </ul>
                    <h3 className="blog-one__title">
                      <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
                    </h3>
                    <div className="blog-one__btn-box">
                      <Link href={`/blog/${blog.slug}`} className="thm-btn">
                        Read More
                        <span className="fas fa-arrow-right"></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {blogs.length === 0 && (
            <div className="text-center py-5">
              <h3>No blog posts found.</h3>
            </div>
          )}
          {data.blogCollection.total > blogs.length && (
            <div className="blog-list__pagination">
              <ul className="pg-pagination list-unstyled">
                <li className="count active">
                  <a href="#">1</a>
                </li>
                {/* Pagination logic can be added later if needed */}
              </ul>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default BlogPage;
