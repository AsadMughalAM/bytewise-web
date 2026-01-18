const contentfulFetch = async (query, variables = {}) => {
  const endpoint = process.env.NEXT_PUBLIC_CONTENTFUL_GRAPHQL_ENDPOINT;
  const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ query, variables }),
      next: {
        revalidate: process.env.NODE_ENV === "production" ? 3600 : 0,
      },
    });

    if (!response.ok) {
      throw new Error(`Contentful fetch failed: ${response.statusText}`);
    }

    const { data, errors } = await response.json();

    if (errors) {
      console.error("Contentful GraphQL errors:", errors);
      throw new Error("Failed to fetch data from Contentful");
    }

    return data;
  } catch (error) {
    console.error("Error fetching from Contentful:", error);
    throw error;
  }
};

export default contentfulFetch;
