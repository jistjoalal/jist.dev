import React from "react"
import { IoIosMail, IoIosArrowRoundForward } from "react-icons/io"

import styles from "./ContactForm.module.css"

export default () => {
  return (
    <form
      className={styles.form}
      action="https://formspree.io/shane@jist.dev"
      method="POST"
    >
      <input
        className={styles.text}
        type="text"
        name="name"
        placeholder="Name"
        required
      />
      <input
        className={styles.text}
        type="email"
        name="_replyto"
        placeholder="Email"
        required
      />
      <textarea
        className={styles.text}
        name="message"
        placeholder="Message"
        required
      />
      <input type="text" name="_gotcha" style={{ display: "none" }} />
      <button className={styles.btn} type="submit">
        <IoIosMail /> <IoIosArrowRoundForward />
      </button>
    </form>
  )
}
