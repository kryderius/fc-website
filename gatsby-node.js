/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`);

const makeRequest = (graphql, request) =>
  new Promise((resolve, reject) => {
    // Query for nodes to use in creating pages.
    resolve(
      graphql(request).then((result) => {
        if (result.errors) {
          reject(result.errors);
        }

        return result;
      })
    );
  });

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
  // Query for articles nodes to use in creating pages.

  const getServices = makeRequest(
    graphql,
    `
    {
        allDatoCmsService {
            edges {
                node {
                    slug
                }
            }
        }
    }
    `
  ).then((result) => {
    // Create pages for each article.
    result.data.allDatoCmsService.edges.forEach(({ node }) => {
      createPage({
        path: `/${node.slug}`,
        component: path.resolve(`src/templates/Service.js`),
        context: {
          slug: node.slug,
        },
      });
    });
  });
  /*
  const getSpecialists = makeRequest(
    graphql,
    `
    {
        allDatoCmsSpecialist {
            edges {
                node {
                    name
                }
            }
        }
    }
    `
  ).then((result) => {
    // Create pages for each article.
    result.data.allDatoCmsSpecialist.edges.forEach(({ node }) => {
      createPage({
        path: `/specjalisci/${node.name.toLowerCase()}`,
        component: path.resolve(`src/templates/Specialist.js`),
        context: {
          name: node.name,
        },
      });
    });
  });
  */

  const getSpecialists = makeRequest(
    graphql,
    `
    {
        allDatoCmsSpecialist {
            edges {
                node {
                    slug
                    name
                }
            }
        }
    }
    `
  ).then((result) => {
    // Create pages for each article.
    result.data.allDatoCmsSpecialist.edges.forEach(({ node }) => {
      createPage({
        path: `/specjalisci/${node.slug.toLowerCase()}`,
        component: path.resolve(`src/templates/Specialist.js`),
        context: {
          name: node.slug,
          author: node.name,
        },
      });
    });
  });

  return getServices, getSpecialists;
};
