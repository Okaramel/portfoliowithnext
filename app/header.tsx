"use client"
import Link from "next/link";

export default function Header() {
    return (
        <nav>
            <ul className='flex justify-evenly mt-5 '>
          <li className='hover:bg-[#434754] transition delay-150 duration-300 ease-in-out p-3 rounded-lg'><Link href="/">Homepage</Link></li>
          <li className='hover:bg-[#434754] transition delay-150 duration-300 ease-in-out p-3 rounded-lg'><Link href="/about-me">About Me</Link></li>
          <li className='hover:bg-[#434754] transition delay-150 duration-300 ease-in-out p-3 rounded-lg'><Link href="/projects">Projects</Link></li>
          <li className='hover:bg-[#434754] transition delay-150 duration-300 ease-in-out p-3 rounded-lg'><Link href="/contact-me">Contact Me</Link></li>
            </ul>
        </nav>
    )
}