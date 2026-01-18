export const GET_BLOG_POST_ID = `
  query GetBlogPostId($slug: String!) {
    blogCollection(where: { slug: $slug }, limit: 1) {
      items {
        sys {
          id
        }
      }
    }
  }
`;

export const GET_BLOG_POST = `
  query GetBlogPostQuery($slug: String!) {
    blogCollection(where: { slug: $slug }, limit: 1) {
      items {
        _id
        title
        slug
        excerpt
        category
        tags
        publishedDate
        private
        thumbnail {
          title
          url(
            transform: {
              width: 624
              height: 672
              resizeStrategy: FILL
              resizeFocus: BOTTOM
              format: JPG
              quality: 90
            }
          )
          height
          width
        }
        banner {
          title
          url(
            transform: {
              width: 2580
              height: 1190
              resizeStrategy: FILL
              resizeFocus: BOTTOM
              backgroundColor: "rgb:321032"
              format: JPG
              quality: 90
            }
          )
          width
          height
        }
        author {
          fullName
        }
        body {
          json
        }
        sys {
          publishedAt
        }
      }
    }
  }
`;

export const GET_BLOG_POST_CATEGORIES = `
  query GetBlogPostCategories {
    blogCollection(where: { private: false }) {
      items {
        category
        tags
        slug
      }
    }
  }
`;
