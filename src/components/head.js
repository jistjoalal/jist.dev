import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"

import ThemeContext from "./theme"

import { ANIMATION_BG } from "./ParticleAnimation/constants"

function icon(theme) {
  return "/favicon" + (theme === "dark" ? "-dark" : "") + ".ico"
}

const Head = ({ title }) => {
  const siteTitle = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `).site.siteMetadata.title

  const metaTitle = `${siteTitle} | ${title}`
  const metaDescription =
    "I solve puzzles, build things, and write about trips down rabbit holes"
  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <Helmet>
          <title>{metaTitle}</title>
          {/* <!-- Primary Meta Tags --> */}
          <meta name="title" content={metaTitle} />
          <meta name="description" content={metaDescription} />

          {/* <!-- Open Graph / Facebook --> */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://jist.dev" />
          <meta property="og:title" content={metaTitle} />
          <meta property="og:description" content={metaDescription} />
          <meta property="og:image" content="preview.png" />

          {/* <!-- Twitter --> */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://jist.dev" />
          <meta property="twitter:title" content={metaTitle} />
          <meta property="twitter:description" content={metaDescription} />
          <meta property="twitter:image" content="preview.png" />

          {/* Theme */}
          <meta name="theme-color" content={ANIMATION_BG[theme]}></meta>

          {/* Icon */}
          <link rel="shortcut icon" type="image/x-icon" href={icon(theme)} />
        </Helmet>
      )}
    </ThemeContext.Consumer>
  )
}

export default Head
