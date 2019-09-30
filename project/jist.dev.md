---
title: "jist.dev"
date: "2019-09-29T05:00:24.536Z"
description: "You're looking at it! A Gatsby site for my blog and projects."
repo: "https://github.com/jistjoalal/jist.dev"
techs: "Gatsby, React, Redux, GraphQL, KaTeX, Prism"
---

## Impact

Somehow my passion for solving problems started to bleed over into writing. After solving some coding challenges that felt more like adventures than engineering problems, I had to share the story - if only with myself. The misunderstandings of my older posts started to reveal themselves as I continued to improve, and I realized it's actually a pretty effective learning strategy. My favorite teacher used to say,

> "You don't understand something until you can explain it to a five year old."

I'm still a long way off from the understanding and eloquence required for such a task. But every time I try, I get a little better. Not only at explaining, but comprehending as well. My blog will continue to serve as a premium [rubber duck](https://rubberduckdebugging.com/) for my learning challenges.

But writing is nothing compared to [practice](/blog/codewars). Which is why my blog has been augmented by a portfolio for my projects. There's no better practice than a real software job or contract. Wish me luck.

## Challenges

- **Design**: I'm more confident making things work than making them look good. The compromise I settled on was using a nice CSS reset, icon libraries, and a minimalist attitude.

- **Functionality**: I like markdown. After configuring Gatsby to generate pages from markdown, adding syntax highlighting and LaTeX support, writing blog posts (and project write ups) became a breeze! Blog posts and project posts come from different source directories and have their own routes, but they take advantage of the same pagination code.

- **Particles**: I really like solving graph traversal problems so I decided to use a tiny canvas animation library I made to spice up my bland design with some floating graphs. I'm not the first to make this animation, but I did write my own code. Gatsby remounts components on route changes, so maintaining the animation state across routes took some finessing. Don't tell anyone but I used globals.

- **My Eyes!!!**: The theme switcher is self-evident. Gatsby remounting also posed challenges for implementing this and the animation toggle button. I decided to use Redux to persist the state this time. Connecting all the components that needed to be theme-aware and writing separate stylesheets was a bit of work. I'm sure there's a better way that I'll eventually learn. For now, CSS variables helped!

## Tech Used

- [Gatsby](https://www.gatsbyjs.org/)
- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [GraphQL](https://graphql.org/)
- [KaTeX](https://katex.org/)
- [Prism](https://prismjs.com/)
