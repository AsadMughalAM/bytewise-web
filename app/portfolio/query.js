import { gql } from "@apollo/client";

export const GET_ALL_PORTFOLIO = gql`
  query GetAllPortfolio {
    portfolioCollection {
      items {
        title
        slug
        shortDescription
        image {
          url
          title
        }
      }
    }
  }
`;

