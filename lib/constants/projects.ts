export type Project = {
  title: string
  description: React.ReactNode
  subtitle?: React.ReactNode
  link: string
}

export const projects: Project[] = [
  {
    title: 'Picture in Popup',
    description:
      'A cool chrome extension to see youtube videos, cameras/screens in Meet, and more! Made with TypeScript.',
    link: 'https://github.com/NicolasMontone/picture-in-popup',
  },
  {
    title: 'HTTP Request Generator with GPT-3',
    description:
      'Generate HTTP requests with GPT-3 for any programming language.',
    link: 'https://http-request-generator.com/',
  },
  {
    title: "This cool website you're on right now! 🤩",
    description:
      'A personal website made with love and Next.js. Check out the source code on GitHub!',
    link: 'https://github.com/NicolasMontone/nmontone',
  },
]
