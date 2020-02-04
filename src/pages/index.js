import React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import makeCarousel from "react-reveal/makeCarousel"
import Slide from "react-reveal/Slide"
import styled, { css } from "styled-components"
import Emojify from "react-emojione"

const Container = styled.div`
  position: relative;
  overflow: hidden;
  width: 500px;
  height: 200px;
`
const CarouselUI = ({ children }) => <Container>{children}</Container>
const Carousel = makeCarousel(CarouselUI)

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query MyQuery2 {
      hero: file(relativePath: { eq: "undraw_progressive_app_m9ms 1.png" }) {
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
    <Layout>
      <div className="container mx-auto flex justify-between items-center p-8">
        <div className="w-1/2">
          <Carousel defaultWait={3500} /*wait for 1000 milliseconds*/>
            <Slide right>
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                  Pop Tips! <span>🧙‍♂️</span>
                </h1>
                <p className="text-lg sm:text-xl md:text-xl lg:text-2xl">
                  <Emojify>
                    <span>🧙‍♂️</span> kopa prokop prokop
                    <br />
                    kopa <span>🧙‍♂️</span>
                  </Emojify>
                </p>
              </div>
            </Slide>
            <Slide right>
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                  Pro Tips!! <span>👍</span>
                </h1>
                <p className="text-lg sm:text-xl md:text-xl lg:text-2xl">
                  <span>🧙‍♂️</span> uz pusku <span>🧙‍♂️</span> niz pusku
                </p>
              </div>
            </Slide>
            <Slide right>
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                  TOP TRIPS!!! <span>🥴</span>
                </h1>
                <p className="text-lg sm:text-xl md:text-xl lg:text-2xl">
                  STA RADIS A? <span>😹</span>
                </p>
              </div>
            </Slide>
          </Carousel>
        </div>
        <div className="w-1/2">
          <Img
            fluid={data.hero.childImageSharp.fluid}
            alt="PopTips Hero Image"
          />
        </div>
      </div>
      <div id="our-process" className="relative">
        {/* <img src="/images/circle2.svg" class="hidden sm:block absolute top-0 left-0 -mx-32"> */}
        <div className="container mx-auto px-6 pt-6 pb-12 relative">
          <h3 className="flex flex-col items-center text-4xl text-secondary font-bold mb-12">
            Our process <span className="bg-primary h-1 w-20 block mt-4"></span>
          </h3>
          <div className="flex flex-col md:flex-row xl:px-32">
            <div className="flex flex-col items-center md:px-6 lg:px-12">
              <span className="text-6xl text-primary">1</span>
              <h4 className="font-semibold text-2xl text-secondary mb-2">
                Analysis
              </h4>
              <p className="text-center text-secondary-700 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                imperdiet est
              </p>
            </div>
            <div className="flex flex-col items-center md:px-6 lg:px-12">
              <span className="text-6xl text-primary">2</span>
              <h4 className="font-semibold text-2xl text-secondary mb-2">
                Execution
              </h4>
              <p className="text-center text-secondary-700 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                imperdiet est
              </p>
            </div>
            <div className="flex flex-col items-center md:px-6 lg:px-12">
              <span className="text-6xl text-primary">3</span>
              <h4 className="font-semibold text-2xl text-secondary mb-2">
                Success
              </h4>
              <p className="text-center text-secondary-700 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                imperdiet est
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
