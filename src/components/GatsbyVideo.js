import React from 'react'
import { Video } from 'gatsby-video'
import Poster from '../images/beach-bg.jpg'

function GatsbyVideo(props) {
    
    /* const videos = props.data.file.childVideoFfmpeg */
    
     return (
    <Video
      poster={Poster}
      autoPlay
      muted
      loop
      sources={['','']}
    />
    )
}

export default GatsbyVideo

export const pageQuery = graphql`
  {
    file(relativePath: { eq: "yuval_ricon_vids/yuval_ricon_vid_1.mp4" }) {
      childVideoFfmpeg {
        webm: transcode(
          outputOptions: ["-crf 20", "-b:v 0"]
          maxWidth: 900
          maxHeight: 480
          fileExtension: "webm"
          codec: "libvpx-vp9"
        ) {
          width
          src
          presentationMaxWidth
          presentationMaxHeight
          originalName
          height
          fileExtension
          aspectRatio
        }
        mp4: transcode(
          maxWidth: 900
          maxHeight: 480
          fileExtension: "mp4"
          codec: "libx264"
        ) {
          width
          src
          presentationMaxWidth
          presentationMaxHeight
          originalName
          height
          fileExtension
          aspectRatio
        }
      }
    }
  }
`