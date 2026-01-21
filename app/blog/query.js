import { gql } from "@apollo/client";

export const GET_ALL_BLOGS = gql`
  query GetAllBlogs {
    blogCollection {
      items {
        title
        slug
        excerpt
     
        publishDate
        image {
          url
          title
        }
        body {
          json
        }
        author
        category
      }
    }
  }
`;
