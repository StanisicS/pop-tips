import React from "react"
import makeCarousel from "react-reveal/makeCarousel"
// we'll need the Slide component for sliding animations
// but you can use any other effect
import Slide from "react-reveal/Slide"
// we'll use styled components for this tutorial
// but you can use any other styling options ( like plain old css )
import styled, { css } from "styled-components"

const Container = styled.div`
  border: 1px solid red;
  position: relative;
  overflow: hidden;
  width: 300px;
  height: 150px;
`
const CarouselUI = () => {
  const Carousel = makeCarousel()

  render(
    <Carousel defaultWait={1000} /*wait for 1000 milliseconds*/>
      <Slide right>
        <div>
          <h1 className="text-4xl lg:text-5xl xl:text-6xl">Pop Tips!</h1>
          <p>Pop kopa prokop prokop kopa pop</p>
        </div>
      </Slide>
      <Slide right>
        <div>
          <p>Pop uz pusku pop niz pusku</p>
        </div>
      </Slide>
      <Slide right>
        <div>
          <p>Sta radis a?</p>
        </div>
      </Slide>
    </Carousel>
  )
}

export default CarouselUI
