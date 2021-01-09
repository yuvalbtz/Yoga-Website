import React from 'react'
import Layout from '../components/layout'
import BackgroundImage from 'gatsby-background-image'
import {graphql} from 'gatsby'
import SEO from "../components/seo"
import Fade from 'react-reveal/Fade'
import Videos from '../components/Videos'

function yogaVids(props) {
    
  return (
        <Layout>
        <SEO title="סרטוני יוגה" />
        <BackgroundImage className="bg-img" fluid={props.data.vids.childImageSharp.fluid}  Tag="section"  >
        <Fade bottom>
         <Videos/>
         </Fade>
        </BackgroundImage>
        </Layout>
    )
}

export default yogaVids


export const pageQuery = graphql`
query {
  vids: file(relativePath: { eq: "images/vids-bg.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 1440, quality:100) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  },
  
}
`;