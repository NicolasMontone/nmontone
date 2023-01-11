import Link from 'next/link'
import React from 'react'
import { Props } from './NavbarItem.types'

const NavbarItem = ({ content, href, title, className }: Props) => (
  <div className={className || ''} title={title}>
    <Link href={href} passHref>
      {content}
    </Link>
  </div>
)

export default NavbarItem
