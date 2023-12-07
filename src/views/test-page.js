import React from 'react'

import { Helmet } from 'react-helmet'

import './test-page.css'

const TestPage = (props) => {
  return (
    <div className="test-page-container">
      <Helmet>
        <title>Test-Page - Long Term Decent Cockroach</title>
        <meta
          property="og:title"
          content="Test-Page - Long Term Decent Cockroach"
        />
      </Helmet>
      <h1>Heading</h1>
      <h1>Heading</h1>
      <a href="https://example.com" target="_blank" rel="noreferrer noopener">
        Link
      </a>
      <h1>Heading</h1>
      <h1>Heading</h1>
      <img
        alt="image"
        src="https://play.teleporthq.io/static/svg/default-img.svg"
        className="test-page-image"
      />
      <img
        alt="image"
        src="https://play.teleporthq.io/static/svg/default-img.svg"
        className="test-page-image1"
      />
      <img
        alt="image"
        src="https://images.unsplash.com/photo-1695653422902-1bea566871c6?ixid=M3w5MTMyMXwxfDF8YWxsfDF8fHx8fHwyfHwxNzAwMDQ2NDc2fA&amp;ixlib=rb-4.0.3&amp;w=200"
        className="test-page-image2"
      />
      <img
        alt="image"
        src="https://images.unsplash.com/photo-1699535769866-7f195457a90a?ixid=M3w5MTMyMXwwfDF8YWxsfDEzfHx8fHx8Mnx8MTcwMDA0NjQ3Nnw&amp;ixlib=rb-4.0.3&amp;w=200"
        className="test-page-image3"
      />
    </div>
  )
}

export default TestPage
