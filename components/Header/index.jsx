import React from 'react'
import Navlink from '../Navlink'
import style from './style.module.css'
import Icon from '../Icon'

import CartBadge from '../CartBadge'
const linksList = [
   { href: '/', text: 'Home' },
   { href: '/about', text: 'About' },
   { href: '/admin/dashboard', text: 'Dashboard' },
   { href: '/recommendations', text: 'Recommendations' },
]

export default function Header() {

   return (<div>
      <header className={style.header}>
         {linksList.map((link) => (
            <Navlink key={link.href} href={link.href}>
               {link.text}
            </Navlink>
         ))}
         <Icon className={style.icon} />

         <Navlink href={'/mycart'}>
            <CartBadge className={style.cart}/>
         </Navlink>
         <div className={style.lightning}></div>
      </header>
   </div>
   )
}
