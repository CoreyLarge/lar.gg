module.exports = {
    siteMetadata: {
        title: "lar.gg",
    },
    plugins: [
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: "./content/images/",
            },
            __key: "images",
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "projects",
                path: "./content/projects/",
            },
            __key: "projects",
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "pages",
                path: "./src/pages/",
            },
            __key: "pages",
        },
        {
            resolve: "gatsby-plugin-typescript",
            options: {
                isTSX: true,
                jsxPragma: "jsx",
                allExtensions: true
            }
        },
        "gatsby-plugin-tsconfig-paths",
        "gatsby-plugin-sass",
        "gatsby-plugin-image",
        "gatsby-plugin-react-helmet",
        {
            resolve: "gatsby-transformer-remark",
            options: {
                commonmark: true,
                footnotes: true,
                pedantic: true,
                gfm: true
            }
        },
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",

    ],
};
