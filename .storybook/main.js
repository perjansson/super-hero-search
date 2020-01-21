module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: [
    '@storybook/preset-typescript',
    '@storybook/addon-actions',
    '@storybook/addon-links'
  ],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.tsx?$/,
      exclude: /node_modules/,
      use: [
        {
          loader: require.resolve('babel-loader'),
          options: {
            presets: [
              require('@babel/preset-typescript').default,
              require('@babel/preset-react').default,
            ],
          },
        },
        require.resolve('react-docgen-typescript-loader'),
      ],
    })

    config.resolve.extensions.push('.ts', '.tsx')

    return config
  },
}
