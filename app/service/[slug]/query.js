import { gql } from "@apollo/client";

export const GET_SERVICE_BY_SLUG = gql`
  query GET_SERVICE_BY_SLUG($slug: String!) {
    serviceCollection(where: { slug: $slug }, limit: 1) {
      items {
        title
        slug
        shortDescription
        longDescription { json }
        image { url }
        icon { url }
      }
    }
  }
`;
