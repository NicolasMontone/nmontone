import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { locations } from '../../lib/constants/locations'
import { GithubIcon, TwitterIcon } from '../Icon'
import { Section } from '../Section'

import styles from './Navbar.module.css'
import { NavbarItem } from './NavbarItem'

const Navbar = () => {
  return (
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
        </div>
      </nav>
    </Section>
  )
}

export default Navbar
