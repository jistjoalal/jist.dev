import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { connect } from "react-redux"
import { Helmet } from "react-helmet"

import { ANIMATION_BG } from "./ParticleAnimation/constants"

const Head = ({ title, theme }) => {
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
  const metaTheme = ANIMATION_BG[theme]
  const favIcon = "/favicon" + (theme === "dark" ? "-dark" : "") + ".ico"
  return (
    <Helmet>
      <title>{metaTitle}</title>
      {/* <!-- Primary Meta Tags --> */}
      <meta name="title" content={metaTitle} />
      <meta name="description" content={metaDescription} />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://metatags.io/" />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta
        property="og:image"
        content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
      />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://metatags.io/" />
      <meta property="twitter:title" content={metaTitle} />
      <meta property="twitter:description" content={metaDescription} />
      <meta
        property="twitter:image"
        content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
      />

      {/* Theme */}
      <meta name="theme-color" content={metaTheme}></meta>

      {/* Icon */}
      <link rel="shortcut icon" type="image/x-icon" href={favIcon} />
    </Helmet>
  )
}

const ConnectedHead = connect(({ theme }) => ({ theme }))(Head)

export default ConnectedHead
