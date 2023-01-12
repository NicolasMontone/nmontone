import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { locations } from '../../lib/constants/locations'
import { GithubIcon, TwitterIcon, VscoIcon } from '../Icon'
import { Section } from '../Section'

import { NavbarItem } from './NavbarItem'

import styles from './Navbar.module.css'

const Navbar = () => (
  <Section className={styles.Navbar} fixedWidth={false}>
    <nav className={styles.container}>
      <div className={styles.navbarIcon}>
        <Link href={locations.home()}>
          <Image
            width={40}
            height={40}
            src={'/icon.svg'}
            alt={'Nicolás Montone Icon'}
          />
        </Link>
      </div>
      <div className={styles.items}>
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
        <NavbarItem
          content={
            <a target={'_blank'} rel="noopener noreferrer">
              <VscoIcon />
            </a>
          }
          title={'Vsco'}
          href={'https://vsco.co/nicomontone/gallery'}
        />
      </div>
    </nav>
  </Section>
)

export default Navbar
