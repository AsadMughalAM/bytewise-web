import contentfulFetch from "@/lib/contentful";
import { GET_BLOG_POSTS_LIST } from "@/app/blog/query";
import Link from "next/link";

const Blog = async () => {
  const data = await contentfulFetch(GET_BLOG_POSTS_LIST, {
    limit: 3,
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
    <section className="blog-one blog-two blog-three" id="blog">
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
            Latest News & Articles From <br /> The <span>Blog Posts</span>
          </h2>
        </div>
        <ul className="row list-unstyled">
          {blogs.map((blog, index) => (
            <li
              key={blog._id}
              className={`col-xl-4 col-lg-4 wow fadeInUp`}
              data-wow-delay={`${(index + 1) * 100}ms`}
            >
              <div className="blog-one__single">
                <div className="blog-one__img">
                  <img
                    src={
                      blog.thumbnail?.url || "/assets/images/blog/blog-2-1.jpg"
                    }
                    alt={blog.title}
                  />
                </div>
                <div className="blog-one__content">
                  <ul className="blog-one__meta list-unstyled">
                    <li>
                      <Link href={`/blog/${blog.slug}`}>
                        <span className="far fa-calendar-alt"></span>
                        {formatDate(blog.publishedDate)}
                      </Link>
                    </li>
                  </ul>
                  <h3 className="blog-one__title">
                    <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
                  </h3>
                  <p className="blog-one__text">
                    {blog.excerpt || "Click to read more about this article."}
                  </p>
                  <div className="blog-one__btn-box">
                    <Link href={`/blog/${blog.slug}`} className="thm-btn">
                      Read More
                      <span className="fas fa-arrow-right"></span>
                    </Link>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Blog;
