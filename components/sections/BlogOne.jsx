// import contentfulFetch from "@/lib/contentful";
// // import { GET_BLOG_POSTS_LIST } from "@/app/blog/query";
// import Link from "next/link";
// import Image from "next/image";

// const BlogOne = async () => {
//   const data = await contentfulFetch(GET_BLOG_POSTS_LIST, {
//     limit: 3,
//     skip: 0,
//   });
//   const blogs = data.blogCollection.items;

//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     return date.toLocaleDateString("en-US", {
//       year: "numeric",
//       month: "short",
//       day: "numeric",
//     });
//   };

//   if (blogs.length === 0) return null;

//   const mainBlog = blogs[0];
//   const sideBlogs = blogs.slice(1);

//   return (
//     <section className="blog-one">
//       <div className="blog-one__shape-1"></div>
//       <div className="blog-one__shape-2"></div>
//       <div className="blog-one__shape-3 float-bob">
//         <img src="/assets/images/shapes/blog-one-shape-3.png" alt="" />
//       </div>
//       <div className="container">
//         <div className="section-title text-center sec-title-animation animation-style1">
//           <div className="section-title__tagline-box">
//             <span className="section-title__tagline">Our Blogs</span>
//           </div>
//           <h2 className="section-title__title title-animation">
//             Latest News & Articles From
//             <br /> The <span>Blog Posts</span>
//           </h2>
//         </div>
//         <div className="row">
//           <div className="col-xl-6 wow fadeInLeft" data-wow-delay="100ms">
//             <div className="blog-one__single">
//               <div className="blog-one__img">
//                 <Image
//                   src={
//                     mainBlog.thumbnail?.url ||
//                     "/assets/images/blog/blog-1-1.jpg"
//                   }
//                   alt={mainBlog.title}
//                   fill
//                 />
//               </div>
//               <div className="blog-one__content">
//                 <ul className="blog-one__meta list-unstyled">
//                   <li>
//                     <Link href={`/blog/${mainBlog.slug}`}>
//                       <span className="far fa-calendar-alt"></span>
//                       {formatDate(mainBlog.publishedDate)}
//                     </Link>
//                   </li>
//                 </ul>
//                 <h3 className="blog-one__title">
//                   <Link href={`/blog/${mainBlog.slug}`}>{mainBlog.title}</Link>
//                 </h3>
//                 <p className="blog-one__text">
//                   {mainBlog.excerpt || "Click to read more about this article."}
//                 </p>
//                 <div className="blog-one__btn-box">
//                   <Link href={`/blog/${mainBlog.slug}`} className="thm-btn">
//                     Read More
//                     <span className="fas fa-arrow-right"></span>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="col-xl-6">
//             {sideBlogs.map((blog, index) => (
//               <div
//                 key={blog._id}
//                 className="blog-one__single-two wow fadeInUp"
//                 data-wow-delay={`${(index + 2) * 100}ms`}
//               >
//                 <div className="blog-one__img-two">
//                   <Image
//                     src={
//                       blog.thumbnail?.url ||
//                       `/assets/images/blog/blog-1-${index + 2}.jpg`
//                     }
//                     alt={blog.title}
//                     fill
//                   />
//                 </div>
//                 <div className="blog-one__content-two">
//                   <ul className="blog-one__meta-two list-unstyled">
//                     <li>
//                       <Link href={`/blog/${blog.slug}`}>
//                         <span className="far fa-calendar-alt"></span>
//                         {formatDate(blog.publishedDate)}
//                       </Link>
//                     </li>
//                   </ul>
//                   <h3 className="blog-one__title-two">
//                     <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
//                   </h3>
//                   <div className="blog-one__btn-box-two">
//                     <Link href={`/blog/${blog.slug}`} className="thm-btn">
//                       Read More
//                       <span className="fas fa-arrow-right"></span>
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BlogOne;
