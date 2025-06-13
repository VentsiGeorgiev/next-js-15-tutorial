'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import './styles.css'
import { useState } from 'react'

const navLinks = [
  { name: 'Register', href: '/register' },
  { name: 'Login', href: '/login' },
  { name: 'Forgot Password', href: '/forgot-password' },
]

export default function AuthLayout({ children }: { children: React.ReactNode }) {

  const pathName = usePathname()
  const [input, setInput] = useState('')

  return (
    <div>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
      <div>
        {navLinks.map((link) => {
          const isActive = pathName === link.name || (pathName.startsWith(link.href) && link.href !== '/')
          return (
          <div key={link.name}>
            <Link className={isActive ? 'link link-active' : 'link'} href={link.href}>{link.name}</Link>
          </div>
          )
        })}
      </div>
      {children}
    </div>
  )
}
