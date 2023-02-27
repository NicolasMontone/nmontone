import { ReactNode } from 'react'

export type Props = {
  children: ReactNode
  title: string
  description?: string
  image: string
  url?: string
}
