import React from "react";
import {graphql, useStaticQuery} from "gatsby";
import {GatsbyImage} from "gatsby-plugin-image";

export const RecentProjects = () => {
    const query = graphql`
    query{
  allFile(filter: {sourceInstanceName: {eq: "projects"}, extension: {eq: "md"}}) {
    edges {
      node {
        childMarkdownRemark {
          frontmatter {
            title
            slug
            desc
            date
            image {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH)
              }
            }
          }
        }
      }
    }
  }
}

    `
    const data = useStaticQuery(query)
    console.log(data)
    return (
        <div>
            {
                data.allFile.edges.map(({node}) => {
                    const {title, slug, image, desc, date} = node.childMarkdownRemark.frontmatter;
                    const imageData = image.childImageSharp.gatsbyImageData
                    return(
                        <div>
                            <GatsbyImage alt="" image={imageData}/>
                        </div>
                    )
                })
            }
        </div>
    )
}
