import React from "react"
import BackgroundImage from 'gatsby-background-image'
import Layout from "../components/layout"
import {graphql} from'gatsby'
import SEO from "../components/seo"
import '../components/style.css'
import CardYoga from '../components/CardYoga'

const IndexPage = (props) => (
  <Layout>
    <SEO title="דף הבית" />
   <BackgroundImage className="bg-img" fluid={props.data.desktop.childImageSharp.fluid}  >
     <CardYoga 
       yoga1={props.data.yoga1.childImageSharp.fluid}
       yoga2={props.data.yoga2.childImageSharp.fluid}
       yoga3={props.data.yoga3.childImageSharp.fluid}
     /> 
     </BackgroundImage>
     </Layout>
)

export default IndexPage

export const pageQuery = graphql`
query {
  desktop: file(relativePath: { eq: "images/beach-bg.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 1400, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  },
  yoga1: file(relativePath: { eq: "images/background_image_3.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 3080, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  },
  yoga2: file(relativePath: { eq: "images/background_image_19.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 3080, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  },
  yoga3: file(relativePath: { eq: "images/background_image.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 3080, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`;