module.exports = [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  'strapi::query',
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      origin: ['*'], // أو حدد رابط الواجهة الأمامية بالتحديد لأمان أكثر
    },
  },
  'strapi::poweredBy',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
