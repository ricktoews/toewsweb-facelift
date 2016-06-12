module.exports = {
    entry: [
      "./app/app.js",
      "./app/bookshelf_factory.js",
      "./app/code_samples_factory.js",
      "./app/portfolio_factory.js",
      "./app/posts_factory.js"
    ],
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};
