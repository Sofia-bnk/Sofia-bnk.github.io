module.exports = {
  outputDir: "docs",
  pwa: {
    manifestOptions: {
      background_color: "black",
    },
    name: "fifi",
    themeColor: "steelblue",
    workboxOptions: {
      runtimeCaching: [
        {
          handler: "NetworkFirst",
          options: {
            networkTimeoutSeconds: 5,
          },
          urlPattern: "https://picsum.photos/v2/list",
        },
      ],
    },
  },
};
