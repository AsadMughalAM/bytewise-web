"use client";

import React from "react";
import Link from "next/link";
import { useQuery } from "@apollo/client/react";
import { useParams } from "next/navigation";
import { GET_BLOG_BY_SLUG } from "./query";
import { GET_ALL_BLOGS } from "../query";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import PageHeader from "../../../components/layout/PageHeader";
const BlogDetailsPage = () => {
  const { slug } = useParams();

  const {
    data: blogData,
    loading: blogLoading,
    error: blogError,
  } = useQuery(GET_BLOG_BY_SLUG, {
    variables: { slug },
  });

  const { data: allBlogsData } = useQuery(GET_ALL_BLOGS);

  if (blogLoading)
    return <div className="text-center py-5">Loading post...</div>;
  if (blogError)
    return <div className="text-center py-5">Error: {blogError.message}</div>;

  const blog = blogData?.blogCollection?.items[0];
  const recentPosts = allBlogsData?.blogCollection?.items?.slice(0, 3) || [];

  if (!blog) return <div className="text-center py-5">Post not found.</div>;

  const formatDate = (dateString) => {
    if (!dateString) return { day: "", month: "", fullDate: "" };
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "short" });
    const fullDate = date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    return { day, month, fullDate };
  };

  const { day, month } = formatDate(blog.publishDate);

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
      <PageHeader
        title={blog.title}
        breadcrumb={[
          { label: "Home", link: "/" },
          { label: "Blog", link: "/blog" },
          { label: blog.title },
        ]}
      />
      <section className="blog-details">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-7">
              <div className="blog-details__left">
                <div className="blog-details__img">
                  {blog.image?.url && (
                    <img
                      src={blog.image.url}
                      alt={blog.title}
                      className="w-100"
                    />
                  )}
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
                        {blog.author || "Admin"}
                      </p>
                    </div>
                  </div>
                  <h3 className="blog-details__title">{blog.title}</h3>
                  <div className="blog-details__text-1">
                    {blog.body?.json &&
                      documentToReactComponents(
                        blog.body.json,
                        richTextOptions,
                      )}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-5">
              <div className="sidebar">
                <div
                  className="sidebar__single sidebar__post wow fadeInUp"
                  data-wow-delay=".1s"
                >
                  <h3 className="sidebar__title">Recent Post</h3>
                  <ul className="sidebar__post-list list-unstyled">
                    {recentPosts.map((post) => (
                      <li key={post.slug}>
                        <div className="sidebar__post-image">
                          {post.image?.url && (
                            <img src={post.image.url} alt={post.title} />
                          )}
                        </div>
                        <div className="sidebar__post-content">
                          <p className="sidebar__post-date">
                            <span className="icon-calendar"></span>
                            {formatDate(post.publishDate).fullDate}
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetailsPage;
