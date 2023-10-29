export default function ({ env }) {
  return [
    "strapi::errors",
    "strapi::cors",
    "strapi::poweredBy",
    "strapi::logger",
    "strapi::query",
    "strapi::body",
    "strapi::session",
    "strapi::favicon",
    "strapi::public",
    {
      name: "strapi::security",
      config: {
        contentSecurityPolicy: {
          useDefaults: true,
          directives: {
            "connect-src": ["'self'", "https:"],
            "img-src": [
              "'self'",
              "data:",
              "blob:",
              "market-assets.strapi.io",
              env("S3_URL"),
            ],
            "media-src": [
              "'self'",
              "data:",
              "blob:",
              "market-assets.strapi.io",
              env("S3_URL"),
            ],
            upgradeInsecureRequests: null,
          },
        },
      },
    },
  ];
}

// export default [
//   "strapi::errors",
//   "strapi::cors",
//   "strapi::poweredBy",
//   "strapi::logger",
//   "strapi::query",
//   "strapi::body",
//   "strapi::session",
//   "strapi::favicon",
//   "strapi::public",
//   {
//     name: "strapi::security",
//     config: {
//       contentSecurityPolicy: {
//         useDefaults: true,
//         directives: {
//           "connect-src": ["'self'", "https:"],
//           "img-src": [
//             "'self'",
//             "data:",
//             "blob:",
//             "market-assets.strapi.io",
//             "ranggarifqicom.is3.cloudhost.id",
//           ],
//           "media-src": [
//             "'self'",
//             "data:",
//             "blob:",
//             "market-assets.strapi.io",
//             "ranggarifqicom.is3.cloudhost.id",
//           ],
//           upgradeInsecureRequests: null,
//         },
//       },
//     },
//   },
// ];
