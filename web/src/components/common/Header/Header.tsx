'use client'

import { ExpandedItems, IHeader } from './IHeader'
import Img from '../Img/Img'
import Link from 'next/link'
import { createRef, Fragment, RefObject, useEffect, useId, useRef, useState } from 'react'
import { IMeta } from '../Meta/IMeta'
import { CSSTransition } from 'react-transition-group'

const Header = ({ data }: { data: [IHeader, IMeta] }) => {
  const [expandedItems, setExpandedItems] = useState<ExpandedItems>({})
  const [isHighContrast, setIsHighContrast] = useState(false)
  const [subExpandedItems, setSubExpandedItems] = useState<ExpandedItems>({})
  const multipleRefs = useRef<Array<RefObject<HTMLDivElement>>>([])
  const [isTouchDevice, setIsTouchDevice] = useState(false)

  useEffect(() => {
    data[0].links.forEach((link, index) => {
      if (link.sublinks && link.sublinks.length > 0) {
        multipleRefs.current[index] = createRef()
      }
    })

    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    setIsTouchDevice(isTouch)
  }, [data])

  const handleLinkClick = () => {
    setExpandedItems({})
  }

  const handleOnHover = (index: number) => {
    setExpandedItems(() => ({
      [index]: true
    }))
  }
  const handleOnExit = (index: number) => {
    setExpandedItems(() => ({
      [index]: false
    }))
  }
  const handleSubLinkOnHover = (index: number) => {
    setSubExpandedItems(() => ({
      [index]: true
    }))
  }
  const handleSubLinkOnExit = (index: number) => {
    setSubExpandedItems(() => ({
      [index]: false
    }))
  }

  const handleOnClick = (index: number) => {
    setExpandedItems(prev => ({
      [index]: !prev[index]
    }))
  }

  const handleSubLinkOnClick = (index: number) => {
    setSubExpandedItems(prev => ({
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
    medium: 1.04,
    large: 1.08
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

  const renderNestedLink = (
    link: string,
    name: string,
    subIndex: number,
    sublinksLength: number,
    index?: number | string
  ) => {
    if (index == undefined) {
      index = useId()
    }
    if (link.startsWith('https://cdn.sanity.io')) {
      return (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={`no-underline text-black z-10 dark:text-dark-icon-bg-color ${subIndex + 1 != sublinksLength && 'border-b-0.5 border-header-border-color dark:border-dark-icon-bg-color'} w-full px-3 focus-visible:-outline-offset-2  py-3`}
          key={index}
        >
          {name}
        </a>
      )
    }
    return (
      <Link
        href={link}
        className={`no-underline text-black z-10 dark:text-dark-icon-bg-color ${subIndex + 1 != sublinksLength && 'border-b-0.5 border-header-border-color dark:border-dark-icon-bg-color'} w-full px-3 focus-visible:-outline-offset-2  py-3`}
        onClick={handleLinkClick}
        key={index}
      >
        {name}
      </Link>
    )
  }

  return (
    <>
      <a href="#mainContent" className="skip-to-main-content">
        Przejdź do treści głównej
      </a>
      <header className="relative">
        <div className="max-w-default grid gap-4 pb-20 relative w-full mx-auto px-8">
          {/* <div className="absolute h-130 w-130 -right-40 -top-20 rounded-full opacity-50 bg-lime blur-3xl -z-10"></div> */}
          <div className="flex md:justify-between items-center md:content-center justify-center flex-wrap  gap-y-5">
            {data[0].logos.map((logo, i) => (
              <Img className="flex-none" data={logo.image} width={600} height={60} key={i} />
            ))}
            <div className="flex gap-16 align-item items-center">
              <div className="flex flex-nowrap items-center">
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
            <Link href="/" onClick={() => handleLinkClick()}>
              <Img
                data={data[1].logo}
                width={220}
                height={70}
                className="filter-white"
                alt="Przejdź do strony głównej"
              />
            </Link>
          </div>
          <div className="py-3 flex justify-between gap-y-3 flex-col items-center">
            <nav className="flex text-base text-center items-center px-8 border border-header-border rounded-full bg-white xl:w-fit w-full justify-between flex-wrap xl:gap-8 dark:bg-dark-icon-border-color dark:border-dark-icon-border-color py-1">
              {data[0].links.map(({ isExpandable, link, name, sublinks }, index) => (
                <Fragment key={index}>
                  {isExpandable ? (
                    <div className="relative">
                      <button
                        className="flex text-black dark:text-dark-icon-bg-color hover:text-default-link-color transition-colors py-3"
                        onClick={() => handleOnClick(index)}
                        onMouseEnter={!isTouchDevice ? () => handleOnHover(index) : undefined}
                      >
                        {name} <ChevronDown isExpanded={expandedItems[index]} />
                      </button>
                      <CSSTransition
                        in={expandedItems[index]}
                        timeout={300}
                        classNames="menu-slide"
                        unmountOnExit
                        nodeRef={multipleRefs.current[index]}
                      >
                        <div
                          className="absolute -mx-16 grid mt-1 shadow-md bg-white rounded-2xl gap-1 z-20 dark:text-dark-icon-bg-color dark:bg-dark-icon-border-color dark:border-dark-icon-bg-color text-left"
                          ref={multipleRefs.current[index]}
                          onMouseEnter={!isTouchDevice ? () => handleOnHover(index) : undefined}
                          onMouseLeave={!isTouchDevice ? () => handleOnExit(index) : undefined}
                        >
                          {sublinks?.map(
                            ({ link, name, isExpandable, expandableLinks }, subIndex) =>
                              isExpandable ? (
                                <button
                                  key={subIndex}
                                  className={`relative flex gap-2 items-center no-underline text-black z-10 dark:text-dark-icon-bg-color ${subIndex + 1 != sublinks.length && 'border-b-0.5 border-header-border-color dark:border-dark-icon-bg-color'} w-full px-3 text-start focus-visible:-outline-offset-2 hover:text-default-link-color transition-colors py-3`}
                                  onClick={() => handleSubLinkOnClick(subIndex)}
                                  onMouseEnter={
                                    !isTouchDevice
                                      ? () => handleSubLinkOnHover(subIndex)
                                      : undefined
                                  }
                                  onMouseLeave={
                                    !isTouchDevice ? () => handleSubLinkOnExit(subIndex) : undefined
                                  }
                                >
                                  {name} <ChevronDown isExpanded={subExpandedItems[subIndex]} />
                                  {subExpandedItems[subIndex] && (
                                    <div className="absolute grid shadow-md bg-white rounded-2xl gap-1 z-20 dark:text-dark-icon-bg-color dark:bg-dark-icon-border-color dark:border-dark-icon-bg-color right-0 top-0 translate-x-full">
                                      {expandableLinks.map(({ link, name }, index) =>
                                        renderNestedLink(
                                          link,
                                          name,
                                          subIndex,
                                          sublinks.length,
                                          index
                                        )
                                      )}
                                    </div>
                                  )}
                                </button>
                              ) : (
                                renderNestedLink(link, name, subIndex, sublinks.length)
                              )
                          )}
                        </div>
                      </CSSTransition>
                    </div>
                  ) : (
                    <Link
                      href={link}
                      className="no-underline text-black dark:text-dark-icon-bg-color py-3"
                      onClick={() => handleLinkClick()}
                    >
                      {name}
                    </Link>
                  )}
                </Fragment>
              ))}
            </nav>
          </div>
        </div>
      </header>
    </>
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
      <g
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        clipPath="url(#a)"
        className="dark:stroke-dark-icon-bg-color"
      >
        <path d="M3 12.18a9 9 0 1018 0 9 9 0 00-18 0z" transform="translate(0.3, 0)"></path>
        <path fill="#000" strokeWidth="5" d="M12 17.18a5 5 0 100-10v10z"></path>
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

const ChevronDown = ({ isExpanded }: { isExpanded: boolean }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="19"
    fill="none"
    viewBox="0 0 18 19"
    className={` ${isExpanded && 'rotate-180'} transition-transform`}
  >
    <path
      stroke="#0A090B"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m4 7.359 5 4.58 5-4.58"
      className="dark:stroke-dark-icon-bg-color"
    ></path>
  </svg>
)
