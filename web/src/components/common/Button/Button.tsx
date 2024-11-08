import Link from 'next/link'
import { IButton } from './IButton'

export default function Button({ color = 'primary', content, link, className, onClick }: IButton) {
  return (
    <>
      {link ? (
        <Link
          className={
            color == 'primary'
              ? `button py-3  border rounded-full place-self-start flex bg-lime-gray border-button-border-color box-content ${className} justify-center no-underline text-center dark:text-dark-icon-border-color hover transition-colors hover:bg-button-hover focus-visible:bg-button-hover dark:bg-dark-icon-bg-color dark:border-dark-icon-bg-color dark:outline-offset-4 `
              : `button py-3  border rounded-full place-self-start flex border-image-3-border-color bg-image-3-background-color text-purple-font-color box-content ${className} text-center justify-center no-underline dark:text-dark-icon-border-color transition-colors hover:bg-button-purple-hover focus-visible:bg-button-purple-hover dark:bg-dark-icon-bg-color dark:border-dark-icon-bg-color dark:outline-offset-4`
          }
          href={link}
        >
          {content}
        </Link>
      ) : (
        <button
          className={
            color == 'primary'
              ? `button py-3  border rounded-full place-self-start flex bg-lime-gray border-button-border-color box-content justify-center ${className} no-underline text-center dark:text-dark-icon-border-color transition-colors hover:bg-button-hover focus-visible:bg-button-hover dark:bg-dark-icon-bg-color dark:border-dark-icon-bg-color dark:outline-offset-4`
              : `button py-3  border rounded-full place-self-start flex border-image-3-border-color bg-image-3-background-color text-purple-font-color box-content ${className} justify-center no-underline text-center dark:text-dark-icon-border-color transition-colors hover:bg-button-purple-hover focus-visible:bg-button-purple-hover dark:bg-dark-icon-bg-color dark:border-dark-icon-bg-color dark:outline-offset-4 `
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
