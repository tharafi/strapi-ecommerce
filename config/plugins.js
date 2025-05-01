module.exports = ({ env }) => {
  return {
    upload: {
      config: {
        provider: 'cloudinary',
        providerOptions: {
          cloud_name: env('CLOUDINARY_NAME'),
          api_key: env('CLOUDINARY_KEY'),
          api_secret: env('CLOUDINARY_SECRET'),
        },
        actionOptions: {
          upload: {
            beforeUpload: (file) => {
              console.log('Uploading:', file);
            },
            afterUpload: (response) => {
              console.log('Cloudinary response:', response);
            },
          },
          uploadStream: {},
          delete: {},
        },
      },
    },
  };
};
