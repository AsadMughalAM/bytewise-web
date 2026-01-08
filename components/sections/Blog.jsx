const Blog = () => {
  const blogs = [
    {
      img: '/assets/images/blog/blog-2-1.jpg',
      tags: ['Digital', 'Technology'],
      userImg: '/assets/images/blog/blog-one-user-1.jpg',
      userName: 'Malaika alise',
      date: 'April 5, 2025',
      comments: '80 Comments',
      title: 'Improving Business Growth with New Technology',
      text: 'Winning the Digital business The 2025 Transformation Roadmap.',
      delay: '100ms',
      animation: 'fadeInLeft',
    },
    {
      img: '/assets/images/blog/blog-2-2.jpg',
      tags: ['Digital', 'Technology'],
      userImg: '/assets/images/blog/blog-one-user-2.jpg',
      userName: 'Readik males',
      date: 'April 5, 2025',
      comments: '80 Comments',
      title: 'Regional Manager & limited management.',
      text: 'Winning the Digital business The 2025 Transformation Roadmap.',
      delay: '200ms',
      animation: 'fadeInUp',
    },
    {
      img: '/assets/images/blog/blog-2-3.jpg',
      tags: ['Digital', 'Technology'],
      userImg: '/assets/images/blog/blog-one-user-3.jpg',
      userName: 'Tamu Tanu',
      date: 'April 5, 2025',
      comments: '80 Comments',
      title: 'Easy and Most Powerful Server and Platform.',
      text: 'Winning the Digital business The 2025 Transformation Roadmap.',
      delay: '300ms',
      animation: 'fadeInRight',
    },
  ];

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
              key={index}
              className={`col-xl-4 col-lg-4 wow ${blog.animation}`}
              data-wow-delay={blog.delay}
            >
              <div className="blog-one__single">
                <div className="blog-one__img">
                  <img src={blog.img} alt="" />
                  <div className="blog-one__tags">
                    {blog.tags.map((tag, idx) => (
                      <span key={idx}>{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="blog-one__content">
                  <div className="blog-one__user">
                    <div className="blog-one__user-img">
                      <img src={blog.userImg} alt="" />
                    </div>
                    <p className="blog-one__user-title">{blog.userName}</p>
                  </div>
                  <ul className="blog-one__meta list-unstyled">
                    <li>
                      <a href="#blog">
                        <span className="far fa-calendar-alt"></span>{blog.date}
                      </a>
                    </li>
                    <li>
                      <a href="#blog">
                        <span className="fal fa-comments"></span>{blog.comments}
                      </a>
                    </li>
                  </ul>
                  <h3 className="blog-one__title">
                    <a href="#blog">{blog.title}</a>
                  </h3>
                  <p className="blog-one__text">{blog.text}</p>
                  <div className="blog-one__btn-box">
                    <a href="#blog" className="thm-btn">
                      Reed More
                      <span className="fas fa-arrow-right"></span>
                    </a>
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


