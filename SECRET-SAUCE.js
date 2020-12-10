
CORRECTED SYNTAX: (see postcssOptions: { plugins: postCSSPlugins })
          {
            loader: 'postcss-loader',
            options: { postcssOptions: { plugins: postCSSPlugins } },
          },



from lesson 15....................




...   mode: 'development',
module: {
  rules: [
    {
      test: /\.css$/i,
      use: [
        'style-loader',
        'css-loader?url=false',
        {
          loader: 'postcss-loader',
          options: { postcssOptions: { plugins: postCSSPlugins } },
        },
      ],
    },
  ],
},
};
