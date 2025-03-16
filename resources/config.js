const siteUrl = process.env.SITE_URL;
const customerKey = process.env.CUSTOMER_KEY;
const customerSecret = process.env.CUSTOMER_SECRET;

const config = {
  siteUrl: `${siteUrl}wp-json/wc/v3/`,
  wcCredentials: `consumer_key=${customerKey}&consumer_secret=${customerSecret}`,
};

export default config;
