module.exports = {
  siteMetadata: {
    title: "Hokusai",
    description:
      "Hokusai is a Docker + Kubernetes CLI for application developers.",
    author: "Artsy",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-docs`,
        path: `${__dirname}/../docs`,
      },
    },
    "gatsby-plugin-offline",
    "gatsby-transformer-remark",
    "gatsby-plugin-typescript",
  ],
}
