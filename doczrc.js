const isProduction = process.env.NODE_ENV === "production";

module.exports = {
  debug: !isProduction,
  dest: "build/docz/dist",
  themeConfig: {
    styles: {
      container: {
        width: 1440
      }
    }
  },
  typescript: true,
  host: process.env.HOST || "127.0.0.1",
  port: process.env.PORT || 9000
};
