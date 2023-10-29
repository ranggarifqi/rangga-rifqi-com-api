export default function ({ env }) {
  return {
    seo: {
      enabled: true,
    },
    upload: {
      config: {
        provider: "aws-s3",
        providerOptions: {
          accessKeyId: env("S3_ACCESS_KEY_ID"),
          secretAccessKey: env("S3_ACCESS_SECRET"),
          endpoint: env("S3_ENDPOINT"), // e.g. "s3.fr-par.scw.cloud"
          params: {
            Bucket: env("S3_BUCKET"),
          },
        },
        actionOptions: {
          upload: {
            Bucket: env("S3_BUCKET"),
          },
          uploadStream: {
            Bucket: env("S3_BUCKET"),
          },
          delete: {
            Bucket: env("S3_BUCKET"),
          },
        },
      },
    },
  };
}
