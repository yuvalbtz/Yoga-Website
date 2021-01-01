import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import './GalleryVideos.css'
import GatsbyVideo from './GatsbyVideo'

const Videos = () => {

    const pageQuery = useStaticQuery(graphql`
    {
        allFile(filter: {publicURL: {regex: "/(mp4)/"}}) {
            edges {
              node {
                id
                publicURL
              }
            }
          }
    }
    
    `)


return ( 

<div className="video-container" >
<div className="video-grid">
  {pageQuery.allFile.edges.map((video, key) => 
      <video preload="true" controls className="video-item" width={'300px'} key={key}>
      <source  
      src={video.node.publicURL}
      type="video/mp4"/>
      </video>
    )}
</div>

</div>)


}


export default Videos;