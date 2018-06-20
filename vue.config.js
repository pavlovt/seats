// const ProvidePlugin = require('webpack/lib/ProvidePlugin');
module.exports = {
  // configure webpack-dev-server behavior
  devServer: {
    open: false,
    host: '0.0.0.0',
    port: 8080,
    https: false,
    hotOnly: false,
    // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#configuring-proxy
    proxy: null, // string | Object
    before: app => {}
  },

  configureWebpack: config => {
    /*if (process.env.NODE_ENV === 'production') {
      // mutate config for production...
    } else {
      // mutate for development...
    }*/

    const use = [{loader: 'raw-loader'},
            {
              loader: "easy-html-webpack-loader",
              options: {
                // macros: macros,
              }
            }
          ]

    config.module.rules.push({
          test: /\.ehtml$/,
          oneOf: [
				    {
				      resourceQuery: /^\?vue/,
				      use: [
            {
              loader: "easy-html-webpack-loader",
              options: {
                // macros: macros,
              }
            }
          ]
				    },
	          // use: ['raw-loader', 'easy-html'],
	          {use: use}
          ]
        })

    /*config.module.plugins = [
      new ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        _: 'lodash',
      })
    ]*/

  }
}