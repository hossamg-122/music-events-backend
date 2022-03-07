module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '6ba82808d890ea5bb52c4b0dd00bb910'),
  },
});
