import { gql } from "@apollo/client";

export const GET_ALL_SERVICES = gql`
  query GetAllServices {
    serviceCollection {
      items {
        title
        slug
        shortDescription
        image {
          url
          title
        }
        icon {
          url
          title
        }
      }
    }
  }
`;
