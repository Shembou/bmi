import Link from 'next/link'
import { IButton } from './IButton'

export default function Button({ color = 'primary', content, link, className, onClick }: IButton) {
  return (
    <>
      {link ? (
        <Link
          className={
            color == 'primary'
              ? `py-4 px-1 sm:px-8 border rounded-full place-self-start flex bg-lime-gray border-button-border-color box-content ${className} justify-center no-underline text-center`
              : `py-4 px-1 sm:px-8 border rounded-full place-self-start flex border-image-3-border-color bg-image-3-background-color text-purple-font-color box-content ${className} text-center justify-center no-underline`
          }
          href={link}
        >
          {content}
        </Link>
      ) : (
        <button
          className={
            color == 'primary'
              ? `py-4 px-1 sm:px-8 border rounded-full place-self-start flex bg-lime-gray border-button-border-color box-content justify-center ${className} no-underline text-center`
              : `py-4 px-1 sm:px-8 border rounded-full place-self-start flex border-image-3-border-color bg-image-3-background-color text-purple-font-color box-content ${className} justify-center no-underline text-center`
          }
          type="submit"
          onClick={onClick}
        >
          {content}
        </button>
      )}
    </>
  )
}
