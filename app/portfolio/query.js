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

export const GET_PORTFOLIO_BY_SLUG = gql`
  query GetPortfolioBySlug($slug: String!) {
    portfolioCollection(where: { slug: $slug }, limit: 1) {
      items {
        title
        slug
        shortDescription
        image {
          url
          title
        }
        longDescription {
          json
        }
      }
    }
  }
`;
