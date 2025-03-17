const siteUrl = process.env.EXPO_PUBLIC_SITE_URL;
//const siteUrl = "https://d2d3-201-133-247-108.ngrok-free.app/";
const customerKey = process.env.EXPO_PUBLIC_CUSTOMER_KEY;
const customerSecret = process.env.EXPO_PUBLIC_CUSTOMER_SECRET;



const config = {
  siteUrl: `${siteUrl}graphql`, // Ahora apunta a GraphQL
};

export default config;

