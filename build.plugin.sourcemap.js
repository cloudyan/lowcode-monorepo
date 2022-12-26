module.exports = ({ onGetWebpackConfig }) => {
  onGetWebpackConfig((config) => {
    // 这里是 webpackd 的 config
    // config.devtool('cheap-module-source-map');
    // config.devtool('source-map');
    config.devtool('inline-source-map');
  });
};
