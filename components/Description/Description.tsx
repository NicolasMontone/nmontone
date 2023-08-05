import React from 'react'

import { Section } from '../Section'

import styles from './Description.module.css'

const Description = () => (
  <Section className={styles.Description}>
    <article title={'Nicolás Montone description'}>
      <p>{"Hello! I'm Nico! Nice to meet you 👋"}</p>
      <p>
        {
          "I'm a full stack developer, I love solving problems with technology. I'm currently working at"
        }{' '}
        <a href="https://pluggy.ai" target="_blank" rel="noopener noreferrer">
          Pluggy
        </a>
        , a fintech startup based in Brazil.
      </p>
      <p>
        {
          "Outside of programming, I'm a passionate magician, I love to talk with people about magic 🪄. Also, I love to play video games 🎮, and travelling 🌎."
        }
      </p>
      <p>
        {
          "I'm from Argentina, and I'm currently living in Buenos Aires, so if you want to have a coffee and talk about anything, feel free to reach me out!"
        }
      </p>
      <p>
        You can find me in{' '}
        <a
          href="https://twitter.com/montonenico"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
        ,{' '}
        <a
          href="https://www.instagram.com/nicolasmontone/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
        , or{' '}
        <a
          href="https://github.com/nicolasmontone"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        .
      </p>
      <p>
        Also, if you are interested in my work experience and more you can{' '}
        <a
          href="https://nicolasmontone.com/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          find it here!
        </a>
      </p>
    </article>
  </Section>
)

export default Description
