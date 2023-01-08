import Link from 'next/link'
import React from 'react'
import { Props } from './NavbarItem.types'

const NavbarItem = ({ content, href, title, className }: Props) => {
  const isExternalUrl = href.startsWith('https://')
  console.log('isExternalUrl', isExternalUrl)

  return (
    <div className={className || ''} title={title}>
      <Link href={href} passHref>
        {content}
      </Link>
    </div>
  )
}

export default NavbarItem
