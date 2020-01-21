import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import "../../styles/tailwind.css"
import Img from "gatsby-image"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid {
            aspectRatio
            base64
            sizes
            src
            srcSet
          }
        }
      }
    }
  `)
  return (
    <>
      {/* <div
        className="bg-cover bg-center absolute z-0 h-screen bg-no-repeat"
        style={{
          backgroundImage:
            "url:http://preview.uxtheme.website/xpider-preview/xpider/img/hero-8.png",
        }}
      ></div>
      <div
        className="z-0 opacity-90 w-full h-full absolute"
        style={{
          background:
            "linear-gradient(to left, #2f1ce0 0%, #53a0fd 50%, #51eca5 100%)",
        }}
      ></div>
      <div className="absolute w-full flex flex-col">
        <div
          className="bg-bottom bg-no-repeat bg-cover"
          style={{
            backgroundImage:
              "url:https://galaxy.up.video/media/backgrounds/bg-curve.svg",
          }}
        ></div> */}
      <header className="container mx-auto p-8 flex justify-between">
        <div className="w-48">
          <Img fluid={data.logo.childImageSharp.fluid} alt="PopTips Logo" />
        </div>
        <div>
          <button class="bg-teal-600 hover:bg-teal-800 text-white font-bold py-2 px-4 rounded">
            Button
          </button>
        </div>
      </header>
      <div>
        <main>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
