const graphqlEndpoint = process.env.EXPO_PUBLIC_SITE_URL + "graphql";

const graphqlFetch = async (query, variables = {}) => {
  try {
    const res = await fetch(graphqlEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    });

    const resJSON = await res.json();
    return resJSON;
  } catch (error) {
    console.error("GraphQL Fetch Error:", error);
  }
};

export default {
  graphqlFetch,
};
