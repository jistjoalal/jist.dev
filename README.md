# Gatsby Blog

A simple [Gatsby](https://gatsbyjs.org) blog.

[![Screenshot](https://jist-screenshotter.herokuapp.com/v1/desktop/https://jist-blog.netlify.com/)](https://jist-blog.netlify.com/)

## Getting Started

This project can be easily cloned and used as a blog. Simply fill the `blog` folder with markdown blog posts, each with a title and ISO-8601 date in the frontmatter.

### develop locally

```sh
git clone https://github.com/jistjoalal/blog.git
cd blog
npm install
npm run develop  # runs @ localhost:8000
```

### deploy to the web

Using [Netlify](https://www.netlify.com/) as a host automatically triggers deploys to their modern CDN whenever a git branch is pushed to. Just connect your repo, and push like normal. JAM.

```sh
git push
```

## dev notes / todos

- post tags (possible in markdown?)
- generate table of contents for each post
- dark theme button
