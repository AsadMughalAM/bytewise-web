import React from "react";
import contentfulFetch from "@/lib/contentful";
import { GET_BLOG_POST, GET_BLOG_POST_CATEGORIES } from "./query";
import { GET_BLOG_POSTS_LIST } from "../query";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import Link from "next/link";
import { notFound } from "next/navigation";

const BlogDetailsPage = async ({ params }) => {
  const { slug } = await params;

  const [postData, categoriesData, recentPostsData] = await Promise.all([
    contentfulFetch(GET_BLOG_POST, { slug }),
    contentfulFetch(GET_BLOG_POST_CATEGORIES),
    contentfulFetch(GET_BLOG_POSTS_LIST, { limit: 3, skip: 0 }),
  ]);

  const blog = postData.blogCollection.items[0];
  if (!blog) {
    notFound();
  }

  const categories = categoriesData.blogCollection.items;
  const recentPosts = recentPostsData.blogCollection.items;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "short" });
    const year = date.getFullYear();
    const fullDate = date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    return { day, month, year, fullDate };
  };

  const { day, month, fullDate } = formatDate(blog.publishedDate);

  // Helper to count category occurrences
  const categoryCounts = categories.reduce((acc, curr) => {
    if (curr.category && typeof curr.category === "string") {
      const catName = curr.category.trim();
      if (catName) {
        acc[catName] = (acc[catName] || 0) + 1;
      }
    }
    return acc;
  }, {});

  const uniqueCategories = Object.keys(categoryCounts);

  const richTextOptions = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
      [BLOCKS.UL_LIST]: (node, children) => (
        <ul className="list-unstyled blog-details__bullet-list">{children}</ul>
      ),
      [BLOCKS.LIST_ITEM]: (node, children) => (
        <li className="d-flex align-items-start">
          <span className="fas fa-check-circle text-primary mt-1 me-2"></span>
          <span>{children}</span>
        </li>
      ),
    },
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
            <h3>{blog.title}</h3>
            <div className="thm-breadcrumb__inner">
              <ul className="thm-breadcrumb list-unstyled">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <span className="icon-arrow-angle-pointing-to-right"></span>
                </li>
                <li>
                  <Link href="/blog">Blog</Link>
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
                  <img
                    src={blog.banner?.url || blog.thumbnail?.url}
                    alt={blog.title}
                  />
                  <div className="blog-details__date">
                    <p>
                      {day}
                      <br />
                      {month}
                    </p>
                  </div>
                </div>
                <div className="blog-details__content">
                  <div className="blog-details__user-and-meta">
                    <div className="blog-details__user">
                      <p>
                        <span className="fas fa-user"></span>By{" "}
                        {blog.author?.fullName || "Admin"}
                      </p>
                    </div>
                    <ul className="blog-details__meta list-unstyled">
                      <li>
                        <Link href="/">
                          <span className="fas fa-comments"></span>Comments (0)
                        </Link>
                      </li>
                      <li>
                        <Link href="/">
                          <span className="fas fa-clock"></span>4 Min Read
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <h3 className="blog-details__title">{blog.title}</h3>
                  <div className="blog-details__text-1">
                    {documentToReactComponents(blog.body.json, richTextOptions)}
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
                  <form
                    action="/blog"
                    method="GET"
                    className="sidebar__search-form"
                  >
                    <input
                      type="search"
                      name="search"
                      placeholder="Search..."
                    />
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
                    {uniqueCategories.map((cat) => (
                      <li
                        key={cat}
                        className={
                          blog.category?.toLowerCase() === cat?.toLowerCase()
                            ? "active"
                            : ""
                        }
                      >
                        <Link
                          href={`/blog?category=${encodeURIComponent(cat)}`}
                        >
                          {cat} <span>({categoryCounts[cat]})</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div
                  className="sidebar__single sidebar__post wow fadeInUp"
                  data-wow-delay=".1s"
                >
                  <h3 className="sidebar__title">Recent Post</h3>
                  <ul className="sidebar__post-list list-unstyled">
                    {recentPosts.map((post) => (
                      <li key={post._id}>
                        <div className="sidebar__post-image">
                          <img src={post.thumbnail?.url} alt={post.title} />
                        </div>
                        <div className="sidebar__post-content">
                          <p className="sidebar__post-date">
                            <span className="icon-calendar"></span>
                            {formatDate(post.publishedDate).fullDate}
                          </p>
                          <h3 className="sidebar__post-title">
                            <Link href={`/blog/${post.slug}`}>
                              {post.title}
                            </Link>
                          </h3>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div
                  className="sidebar__single sidebar__tags wow fadeInUp"
                  data-wow-delay=".1s"
                >
                  <h3 className="sidebar__title">Tags Cloud</h3>
                  <ul className="sidebar__tags-list clearfix list-unstyled">
                    {Array.from(new Set(categories.flatMap((c) => c.tags))).map(
                      (tag) => (
                        <li key={tag}>
                          <span>{tag}</span>
                        </li>
                      ),
                    )}
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
