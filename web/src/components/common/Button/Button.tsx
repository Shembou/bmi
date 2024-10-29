import Link from 'next/link'
import { IButton } from './IButton'

export default function Button({ color, content, link, className }: IButton) {
  return (
    <Link
      className={
        color == 'primary'
          ? `py-4 px-8 border rounded-full place-self-start flex bg-lime-gray border-button-border-color box-content ${className}`
          : `py-4 px-8 border rounded-full place-self-start flex border-image-3-border-color bg-image-3-background-color text-purple-font-color box-content ${className}`
      }
      href={link}
    >
      {content}
    </Link>
  )
}
