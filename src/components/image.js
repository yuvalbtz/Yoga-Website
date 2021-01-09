import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import './GalleryImages.css'
const Image = () => {
const data = useStaticQuery(graphql`
{
  allFile(filter: {name: {regex: "/(yuval_ricon_background_image)/"}}) {
    edges {
      node {
        childImageSharp {
          fluid(maxWidth: 1800, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
      }
    }
    }
  }
}

`)

return (
  <div className="image-container" >
  <div className="image-grid">
    {data.allFile.edges.map((image, key) => 
        <Img key={key} 
        className="image-item"
        fluid={image.node.childImageSharp.fluid}
        alt={"image"}
        />
     )}
  </div>
 
</div>

)
}
export default Image;