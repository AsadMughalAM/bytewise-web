export const GET_BLOG_POST_SLIDES = `
  query GetBlogPostSlides {
    blogCollection(
      limit: 3
      order: [publishedDate_DESC]
      where: { private: false }
    ) {
      items {
        _id
        title
        slug
        excerpt
        tags
        banner {
          title
          url(
            transform: {
              width: 2580
              height: 1200
              resizeStrategy: FILL
              resizeFocus: BOTTOM
              backgroundColor: "rgb:321032"
              format: JPG
              quality: 90
            }
          )
          height
          width
        }
        publishedDate
      }
    }
  }
`;

export const GET_BLOG_POSTS_LIST = `
  query GetBlogPostsList($limit: Int!, $skip: Int!) {
    blogCollection(
      order: [publishedDate_DESC]
      where: { private: false }
      limit: $limit
      skip: $skip
    ) {
      total
      limit
      skip
      items {
        _id
        title
        slug
        excerpt
        thumbnail {
          title
          url(
            transform: {
              width: 624
              height: 672
              resizeStrategy: FILL
              resizeFocus: FACES
              format: JPG
              quality: 90
            }
          )
          height
          width
        }
        category
        publishedDate
      }
    }
  }
`;

export const GET_CATEGORY_COUNT = `
  query GetCategoryCount {
    blogCollection(where: { private: false }) {
      total
    }
  }
`;
