const url = process.env.EXPO_PUBLIC_SITE_URL;
const consumerKey = process.env.EXPO_PUBLIC_CUSTOMER_KEY;
const consumerSecret = process.env.EXPO_PUBLIC_CUSTOMER_SECRET;
const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;


console.log('url', url)
console.log('consumerKey', consumerKey)
console.log('consumerSecret', consumerSecret)


const api = new WooCommerceRestApi({
  url,
  consumerKey,
  consumerSecret,
  version: 'wc/v3',
  queryStringAuth: true // Añadir esta línea para conexiones HTTP
});

console.log('api', api)


export default api;
