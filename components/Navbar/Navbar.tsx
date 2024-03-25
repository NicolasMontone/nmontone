import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { locations } from '../../lib/constants/locations'
import { GithubIcon, TwitterIcon, VscoIcon } from '../Icon'
import { Section } from '../Section'

import styles from './Navbar.module.css'

const Navbar = () => (
  <Section className={styles.Navbar} fixedWidth={false}>
    <nav className={styles.container}>
      <Link href={locations.home()}>
        <div className={styles.navbarIcon}>
          <Image
            width={40}
            height={40}
            src={'/icon.svg'}
            alt={'Nicolás Montone Icon'}
          />
        </div>
      </Link>
      <div className={styles.items}>
        <Link href={locations.blog()}>Blog</Link>

        <Link href={locations.projects()}>Projects</Link>
        <a
          aria-label="Github Profile"
          target={'_blank'}
          rel="noopener noreferrer"
          href={'https://github.com/NicolasMontone'}
        >
          <GithubIcon />
        </a>

        <a
          aria-label="Twitter Profile"
          target={'_blank'}
          rel="noopener noreferrer"
          href={'https://twitter.com/montonenico'}
        >
          <TwitterIcon />
        </a>

        <a
          aria-label="Vsco Profile"
          target={'_blank'}
          rel="noopener noreferrer"
          href={'https://vsco.co/nicomontone/gallery'}
        >
          <VscoIcon />
        </a>
      </div>
    </nav>
  </Section>
)

export default Navbar
