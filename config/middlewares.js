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
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        directives: {
          'connect-src': ["'self'", 'http:', 'https:'],
        },
      },
      cors: {
        origin: ['http://localhost:5173', 'https://ecommerce-frontend-ou6c.onrender.com'],
        methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
        headers: ['Content-Type', 'Authorization', 'Origin', 'Accept'],
        keepHeaderOnError: true,
      },
    },
  },
];
