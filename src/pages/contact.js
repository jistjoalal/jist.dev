import React from "react"

import Head from "../components/head"
import Layout from "../components/layout"
import ContactForm from "../components/ContactForm"

export default class Contact extends React.Component {
  render() {
    return (
      <Layout>
        <Head title="Contact" />
        <h2>To: shane@jist.dev</h2>
        <ContactForm />
      </Layout>
    )
  }
}
