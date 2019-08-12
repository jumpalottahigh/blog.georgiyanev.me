import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import svgReact from '../../static/react.svg'
import svgJS from '../../static/javascript.svg'

const AuthorMessage = ({ type = 'fpv' }) => {
  const authorImage = useStaticQuery(graphql`
    {
      georgiFpv: file(relativePath: { regex: "/^home/georgi-face.png/" }) {
        name
        childImageSharp {
          fluid(maxWidth: 100, quality: 75) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }

      georgi: file(relativePath: { regex: "/^home/georgi-face-2.png/" }) {
        name
        childImageSharp {
          fluid(maxWidth: 100, quality: 75) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <div
      css={``}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '1rem',
      }}
    >
      <div style={{ width: '20%' }}>
        <div style={{ maxWidth: '100px' }}>
          <Img
            fluid={
              type === 'fpv'
                ? authorImage.georgiFpv.childImageSharp.fluid
                : authorImage.georgi.childImageSharp.fluid
            }
            alt="Georgi Yanev portrait"
          />
        </div>
      </div>
      {type === 'fpv' ? (
        <h2
          style={{
            fontSize: '1.4rem',
            width: '80%',
            margin: 0,
            paddingLeft: '1rem',
          }}
        >
          Hi, I'm Georgi and I love all things FPV racing drones.
        </h2>
      ) : (
        <h2
          style={{
            fontSize: '1.4rem',
            width: '80%',
            margin: 0,
            paddingLeft: '1rem',
          }}
        >
          Hi, I'm Georgi and I build things on the web with{` `}
          <img className="framework-logo" src={svgJS} alt="JavaScript logo" />
          {` `}
          JavaScript and{` `}
          <img className="framework-logo" src={svgReact} alt="React.js logo" />
          {` `}
          React
        </h2>
      )}
    </div>
  )
}

export default AuthorMessage
