import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {graphql} from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import Image from '../components/image'
import Fade from 'react-reveal/Fade'




const yogaGallery = (props) => {
  
  return ( <Layout>
    <SEO title="גלריה" />
    <BackgroundImage  className="bg-img" fluid={props.data.gallery.childImageSharp.fluid} >
    <Fade right>
    <Image/>
    </Fade>
    </BackgroundImage>
   
  </Layout>)
}

export default yogaGallery


export const data = graphql`
  query {
    gallery: file(relativePath: { eq: "images/gallery-bg.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1800, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }`