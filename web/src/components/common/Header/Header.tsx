'use client'

import { ExpandedItems, IHeader } from './IHeader'
import Img from '../Img/Img'
import Link from 'next/link'
import { Fragment, useEffect, useRef, useState } from 'react'
import { IMeta } from '../Meta/IMeta'
import { CSSTransition } from 'react-transition-group'

const Header = ({ data }: { data: [IHeader, IMeta] }) => {
  const [expandedItems, setExpandedItems] = useState<ExpandedItems>({})
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

  return (
    <header className="grid gap-4 pb-14 relative w-full">
      {/* <div className="absolute h-130 w-130 -right-40 -top-20 rounded-full opacity-50 bg-lime blur-3xl -z-10"></div> */}
      <div className="flex justify-between items-center">
        {data[0].logos.map((logo, i) => (
          <Img className="flex-none" data={logo.image} width={443} height={46} key={i} />
        ))}
        <div className="flex gap-16 align-item">
          <div>
            Czcionka: <button>A</button> <button>A+</button> <button>A++</button>
          </div>
          <div>
            <div className="flex gap-2">
              Kontrast: <ContrastIcon />
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
                      className="absolute w-full grid border border-header-border bg-white rounded-2xl gap-1 p-2"
                      ref={ref}
                    >
                      {sublinks?.map(({ link, name }, subIndex) => (
                        <Link key={subIndex} href={link} className="no-underline text-black">
                          {name}
                        </Link>
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
    </header>
  )
}

function ContrastIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" fill="none">
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
