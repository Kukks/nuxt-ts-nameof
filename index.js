export default function TsNameOfLoaderModule (moduleOptions) {
    this.extendBuild(config => {
        const nameofLoader = {
          loader: "ts-nameof-loader",
          exclude: [
            /vendor/,
            /\.nuxt/
          ]
        }
        // Add TypeScript loader
        config.module.rules.push(
          Object.assign(
            {
              test: /((client|server)\.js)|(\.tsx?)$/
            },
            nameofLoader
          )
        )
        if (
          config.resolve.extensions.indexOf(".ts") ===
          -1
        ) {
          config.resolve.extensions.push(".ts")
        }
      })
}