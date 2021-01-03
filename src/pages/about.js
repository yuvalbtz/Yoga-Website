import React from 'react'
import Layout from '../components/layout'
import SEO from "../components/seo"
import {graphql} from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
function about(props) {
    return (
        <Layout>
         <SEO title="קצת עלי" />
         <BackgroundImage className="about-bg-img" fluid={props.data.about.childImageSharp.fluid}  Tag="section">

         </BackgroundImage>
        </Layout>
    )
}

export default about

export const pageQuery = graphql`
query {
  about: file(relativePath: { eq: "images/yuval_ricon_background_image_2.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 2000,quality: 100) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  },
 
}
`;