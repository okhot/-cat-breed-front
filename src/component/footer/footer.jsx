import React from 'react'
import style from './footer.module.css'
import { GoMarkGithub } from "react-icons/go";
import { FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <div className={style.footer}>
      <a href="/" className={style.footer__link}><GoMarkGithub /> GitHub</a>
      <a href="/" className={style.footer__link}><FaTwitter /> Twitter</a>
      <a href="/" className={style.footer__link}><FaLinkedin /> LinkedIn</a>
    </div>
  )
}
