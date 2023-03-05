import React from 'react'
import style from './footer.module.css'
import { GoMarkGithub } from "react-icons/go";
import { FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <div className={style.footer}>
      <a href="https://github.com/okhot" className={style.footer__link}><GoMarkGithub /> GitHub ❤️</a>
      <a href="https://twitter.com/Arrey_E_Mandela" className={style.footer__link}><FaTwitter /> Twitter ❤️ </a>
      <a href="https://www.linkedin.com/in/arrey-etta-24530b1a2" className={style.footer__link}><FaLinkedin /> LinkedIn ❤️ </a>
    </div>
  )
}
