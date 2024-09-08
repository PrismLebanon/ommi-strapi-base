module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "strapi-provider-upload-supabase",
      providerOptions: {
        apiUrl: env("SUPABASE_API_URL"),
        apiKey: env("SUPABASE_API_KEY"),
        bucket: env("SUPABASE_BUCKET"),
        directory: env("SUPABASE_DIRECTORY"),
        options: {},
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
      "soft-delete": {
        enabled: true,
      },
      notes: {
        enabled: true,
      },
      "import-export-entries": {
        enabled: true,
        config: {
          // See `Config` section.
        },
      },
      graphql: {
        enabled: true,
        config: {
          endpoint: '/graphql',
          shadowCRUD: true,
          playgroundAlways: true,
          depthLimit: 100000,
          amountLimit: 10000,
          maxLimit:10000,
          apolloServer: {
            tracing: false,
          },
        },
      },
      "apollo-sandbox": {
        // enables the plugin only in development mode
        // if you also want to use it in production, set this to true
        // keep in mind that graphql playground has to be enabled
        enabled: process.env.NODE_ENV === "production" ? false : true,
        config: {
          // endpoint: "https://tunneled-strapi.com/graphql", // OPTIONAL - endpoint has to be accessible from the browser
        },
      },
    },
  },
});
