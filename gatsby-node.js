const path = require("path")

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    // slug used for routing
    const slug = path.basename(node.fileAbsolutePath, ".md")
    createNodeField({
      node,
      name: "slug",
      value: slug,
    })

    // type to distinguish b/w blog, project
    const root = __dirname.replace(/\\/g, "/") + "/"
    const type = path
      .dirname(node.fileAbsolutePath)
      .replace(root, "")
      .split("/")[0]
    createNodeField({
      node,
      name: "type",
      value: type,
    })
  }
}

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  for (let type of ["blog", "project"]) {
    const res = await graphql(`
      {
        allMarkdownRemark(
          filter: { fields: { type: { eq: "${type}" } } }
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `)
    const posts = res.data.allMarkdownRemark.edges

    // create list pages
    const listTemplate = path.resolve(`src/templates/${type}List.js`)
    const postsPerPage = 6
    const numPages = Math.ceil(posts.length / postsPerPage)
    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/${type}` : `/${type}/${i}`,
        component: listTemplate,
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages,
          currentPage: i,
        },
      })
    })

    // create post pages
    const template = path.resolve(`src/templates/${type}.js`)
    posts.forEach(({ node }) => {
      createPage({
        component: template,
        path: `/${type}/${node.fields.slug}`,
        context: {
          slug: node.fields.slug,
        },
      })
    })
  }
}
