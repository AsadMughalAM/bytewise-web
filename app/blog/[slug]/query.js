import { gql } from "@apollo/client";

export const GET_BLOG_BY_SLUG = gql`
  query GetBlogBySlug($slug: String!) {
    blogCollection(where: { slug: $slug }, limit: 1) {
      items {
        title
        slug
        publishDate
        author
        category
        image {
          url
          title
        }
        body {
          json
        }
      }
    }
  }
`;
