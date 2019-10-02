import "./src/styles/prism.css"
import "katex/dist/katex.min.css"
import React from "react"
import { ThemeProvider } from "./src/components/theme"
export const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
)
