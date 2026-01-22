"use client";

import React from "react";
import Link from "next/link";
import { useQuery } from "@apollo/client/react";
import { useParams } from "next/navigation";
import { GET_BLOG_BY_SLUG } from "./query";
import { GET_ALL_BLOGS } from "../query";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS,MARKS } from "@contentful/rich-text-types";
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
  const recentPosts = allBlogsData?.blogCollection?.items?.slice(0, 4) || [];

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
  renderMark: {
    [MARKS.BOLD]: (text) => <strong className="font-semibold">{text}</strong>,
    [MARKS.ITALIC]: (text) => <em className="italic">{text}</em>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <p className="mb-2 text-justify leading-relaxed text-gray-800">{children}</p>
    ),
    [BLOCKS.HEADING_1]: (node, children) => (
      <h1 className="text-3xl font-bold mb-4 mt-6">{children}</h1>
    ),
    [BLOCKS.HEADING_2]: (node, children) => (
      <h2 className="text-2xl font-semibold mb-3 mt-5">{children}</h2>
    ),
    [BLOCKS.HEADING_3]: (node, children) => (
      <h3 className="text-xl font-semibold mb-2 mt-4">{children}</h3>
    ),

    // UL LIST
    [BLOCKS.UL_LIST]: (node, children) => (
      <ul className="list-disc list-inside mb-4">{children}</ul> // removed space-y
    ),
    // OL LIST
    [BLOCKS.OL_LIST]: (node, children) => (
      <ol className="list-decimal list-inside mb-4">{children}</ol>
    ),
    // LIST ITEM
    [BLOCKS.LIST_ITEM]: (node, children) => (
      <li className=" text-gray-700 leading-relaxed  flex gap-2 items-start">
        <span className="mt-1">•</span> {/* or use fa-check-circle for checkmarks */}
        <span className="flex-1">{children}</span>
      </li>
    ),

    [BLOCKS.QUOTE]: (node, children) => (
      <blockquote className="border-l-4 border-primary pl-4 italic text-gray-600 mb-4">{children}</blockquote>
    ),
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const { url, description } = node.data.target.fields.file;
      return <img src={url} alt={description || "blog image"} className="w-full my-4 rounded-lg" />;
    },
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
                <div className="blog-details__img relative mb-6">
                {blog.image?.url && (
                  <img
                    src={blog.image.url}
                    alt={blog.title}
                    className="w-full h-[400px] object-cover rounded-lg shadow-md"
                  />
                )}
                <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded text-center font-semibold">
                  {day} <br /> {month}
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
              <div className="sticky top-15">
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
        </div>
      </section>
    </>
  );
};

export default BlogDetailsPage;
