import React from 'react'
import { locations } from '../../lib/constants/locations'
import { GithubIcon, TwitterIcon } from '../Icon'
import { Section } from '../Section'

import styles from './Navbar.module.css'
import { NavbarItem } from './NavbarItem'

const Navbar = () => {
  return (
    <Section className={styles.Navbar}>
      <nav className={styles.container}>
        <NavbarItem content={'Blog'} title={'Blog'} href={locations.blog()} />
        <NavbarItem
          content={'Projects'}
          title={'Projects'}
          href={locations.projects()}
        />
        <NavbarItem
          content={
            <a target={'_blank'} rel="noopener noreferrer">
              <GithubIcon />
            </a>
          }
          title={'Github'}
          href={'https://github.com/NicolasMontone'}
        />
        <NavbarItem
          content={
            <a target={'_blank'} rel="noopener noreferrer">
              <TwitterIcon />
            </a>
          }
          title={'Twitter'}
          href={'https://twitter.com/montonenico'}
        />
      </nav>
    </Section>
  )
}

export default Navbar
