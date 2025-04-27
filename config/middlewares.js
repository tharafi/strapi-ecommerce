module.exports = [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  'strapi::query',
  {
    name: 'strapi::cors',
    config: {
      origin: ['https://ecommerce-frontend-ou6c.onrender.com'], // هنا تحدد واجهتك
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
      headers: '*',
    },
  },
  'strapi::poweredBy',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
