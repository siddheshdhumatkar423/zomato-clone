module.exports = {
  apps: [
    {
      name: "backend",
      script: "index.js",
      watch: true,
      env: {
        NODE_ENV: "production",
        PORT: 4000,
        MONGO_URI: "mongodb://localhost:27017/zomato",
      },
    },
  ],
};
