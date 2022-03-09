import Link from 'next/link'
import React from 'react'
import { ActiveLink } from './ActiveLink';
import styles from './NavBar.module.css';

const menuItems = [
  {
      text: 'Home',
      href: '/'
  },
  {
      text: 'About',
      href: '/about'
  },
  {
      text: 'Contact',
      href: '/contact'
  },
  {
      text: 'Pricing',
      href: '/pricing'
  },
  
];

export const NavBar = () => {
  return (
    <nav className={styles['menu-container']}>
        {menuItems.map((e)=> <ActiveLink key={e.href} text={e.text} href={e.href}></ActiveLink>)}      
    </nav>
  )
}
