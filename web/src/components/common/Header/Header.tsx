'use client'

import { ExpandedItems, IHeader } from './IHeader'
import Img from '../Img/Img'
import Link from 'next/link'
import { Fragment, useEffect, useRef, useState } from 'react'
import { IMeta } from '../Meta/IMeta'
import { CSSTransition } from 'react-transition-group'

const Header = ({ data }: { data: [IHeader, IMeta] }) => {
  const [expandedItems, setExpandedItems] = useState<ExpandedItems>({})
  const [isHighContrast, setIsHighContrast] = useState(false)
  const ref = useRef(null)

  const handleOnClick = (index: number) => {
    setExpandedItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setExpandedItems({})
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  const fontSizeScales = {
    small: 1,
    medium: 1.05,
    large: 1.1
  }

  const updateFontSizes = (scale: number) => {
    document.documentElement.style.setProperty(
      '--h1-font-size',
      `clamp(${1.5 * scale}rem, 4.5vw, ${3 * scale}rem)`
    )
    document.documentElement.style.setProperty(
      '--h3-font-size',
      `clamp(${1.2 * scale}rem, 4.5vw, ${2 * scale}rem)`
    )
    document.documentElement.style.setProperty(
      '--h4-font-size',
      `clamp(${1 * scale}rem, 4.5vw, ${1.5 * scale}rem)`
    )
    document.documentElement.style.setProperty(
      '--p-font-size',
      `clamp(${0.8 * scale}rem, 3.5vw, ${16 * scale}px)`
    )
    document.documentElement.style.setProperty(
      '--default-font-size',
      `clamp(${0.8 * scale}rem, 3.5vw, ${16 * scale}px)`
    )
  }
  const toggleContrast = () => {
    setIsHighContrast(!isHighContrast)
    if (!isHighContrast) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  return (
    <header className="relative">
      <div className="max-w-default grid gap-4 pb-20 relative w-full mx-auto px-8">
        {/* <div className="absolute h-130 w-130 -right-40 -top-20 rounded-full opacity-50 bg-lime blur-3xl -z-10"></div> */}
        <div className="flex lg:justify-between items-center lg:content-center justify-center flex-wrap lg:flex-nowrap gap-y-5">
          {data[0].logos.map((logo, i) => (
            <Img className="flex-none" data={logo.image} width={600} height={60} key={i} />
          ))}
          <div className="flex gap-16 align-item items-center">
            <div>
              Czcionka:{' '}
              <button
                className="text-sm w-6 h-6"
                onClick={() => updateFontSizes(fontSizeScales.small)}
              >
                A
              </button>{' '}
              |{' '}
              <button
                className="text-base w-7 h-7"
                onClick={() => updateFontSizes(fontSizeScales.medium)}
              >
                A+
              </button>{' '}
              |{' '}
              <button
                className="text-lg w-10 h-8"
                onClick={() => updateFontSizes(fontSizeScales.large)}
              >
                A++
              </button>
            </div>
            <div>
              <div className="flex gap-2 items-center">
                Kontrast:{' '}
                <button className="p-2" onClick={() => toggleContrast()}>
                  <ContrastIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="py-3 flex justify-between gap-y-3 flex-col xl:flex-row items-center">
          <Link href="/" className="xl:-order-1 order-2">
            <Img data={data[1].logo} width={183} height={51} />
          </Link>
          <nav className="flex text-base text-center items-center px-8 border border-header-border py-4 rounded-full bg-white xl:w-fit w-full justify-between flex-wrap xl:gap-8">
            {data[0].links.map(({ isExpandable, link, name, sublinks }, index) => (
              <Fragment key={index}>
                {isExpandable ? (
                  <div className="relative">
                    <button className="flex text-black" onClick={() => handleOnClick(index)}>
                      {name} <ChevronDown />
                    </button>
                    <CSSTransition
                      in={expandedItems[index]}
                      timeout={300}
                      classNames="menu-slide"
                      unmountOnExit
                      nodeRef={ref}
                    >
                      <div
                        className="absolute w-full grid border border-header-border bg-white rounded-2xl gap-1 p-2 z-20"
                        ref={ref}
                      >
                        {sublinks?.map(({ link, name }, subIndex) => (
                          <>
                            <Link
                              key={subIndex}
                              href={link}
                              className="no-underline text-black w-fit z-10"
                            >
                              {name}
                            </Link>
                          </>
                        ))}
                      </div>
                    </CSSTransition>
                  </div>
                ) : (
                  <Link href={link} className="no-underline text-black">
                    {name}
                  </Link>
                )}
              </Fragment>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}

function ContrastIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="25"
      fill="none"
      aria-label="Przycisk do zmiany kontrastu"
    >
      <g stroke="#000" strokeLinecap="round" strokeLinejoin="round" clipPath="url(#a)">
        <path d="M3 12.18a9 9 0 1018 0 9 9 0 00-18 0z"></path>
        <path fill="#000" strokeWidth="4" d="M12 17.18a5 5 0 100-10v10z"></path>
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h24v24H0z" transform="translate(0 .18)"></path>
        </clipPath>
      </defs>
    </svg>
  )
}

export default Header

const ChevronDown = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" fill="none" viewBox="0 0 18 19">
    <path
      stroke="#0A090B"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m4 7.359 5 4.58 5-4.58"
    ></path>
  </svg>
)
