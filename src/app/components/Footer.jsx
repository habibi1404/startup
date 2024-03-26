import React from 'react'
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import foot from './styles.module.css'
import Link from 'next/link';


export default function Footer() {
  return (
    <footer className={foot.foot}>

        <Link href='https://github.com/dashboard'>
        <FaGithub />

        </Link>
        <Link href='https://linkedin.com'>
        <FaLinkedin />

        </Link>
        <Link href='https://twitter.com'>
        <RiTwitterXFill />

        </Link>
        <Link href='https://instagram.com'>
        <FaInstagram />

        </Link>
        
    </footer> 
        

  )
}
