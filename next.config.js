const withReactSvg = require("next-react-svg");
const path = require("path");

module.exports = withReactSvg({
  include: path.resolve(__dirname, "src/assets/svg"),
  webpack(config, options) {
    return config;
  },
  env: {
    LOCATION_IQ_KEY: process.env.LOCATION_IQ_KEY,
    GOOGLE_ANALYTICS: process.env.GOOGLE_ANALYTICS,
  },
});
