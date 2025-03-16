const siteUrl = process.env.EXPO_PUBLIC_SITE_URL;
const customerKey = process.env.EXPO_PUBLIC_CUSTOMER_KEY;
const customerSecret = process.env.EXPO_PUBLIC_CUSTOMER_SECRET;

const config = {
  siteUrl: `${siteUrl}wp-json/wc/v3/`,
  wcCredentials: `consumer_key=${customerKey}&consumer_secret=${customerSecret}`,
};

export default config;
