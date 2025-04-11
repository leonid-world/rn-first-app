module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "react-native-reanimated/plugin", // 이거 항상 마지막
      "@babel/plugin-transform-template-literals", // 👈 이 줄 추가
    ],
  };
};
