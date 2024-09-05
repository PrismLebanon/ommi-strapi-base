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
        config: {
          endpoint: '/graphql',
          shadowCRUD: true,
          playgroundAlways: false,
          depthLimit: 7,
          amountLimit: 100,
          apolloServer: {
            tracing: false,
          },
        },
      },
    },
  },
});
