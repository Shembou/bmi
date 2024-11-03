'use client'

import { IContactInfo } from './IContactInfo'

export default function ContactInfo({ employeeCards }: IContactInfo) {
  const handleOnClick = ({ mail }: { mail: string }) => {
    navigator.clipboard.writeText(mail)
  }

  return (
    <section className="grid gap-x-20 gap-y-12 894:grid-cols-2 relative py-24 grid-cols-1 justify-items-center">
      {/* <div className="absolute bg-blur-green-color opacity-70 rounded-full w-96 h-96 blur-250 -z-10 -left-44" /> */}
      {/* <div className="absolute bg-blur-blue-color opacity-70 rounded-full w-96 h-96 blur-250 -z-10 -right-44" /> */}
      {employeeCards.map(({ mail, name, title }, index) => (
        <div key={index} className="gap-4 grid p-8 rounded-3xl bg-white">
          <h4>{name}</h4>
          <p>{title}</p>
          <div className="flex gap-2 items-center">
            <div className="p-1 border rounded-full bg-icon-bg-color border-icon-border-color dark:bg-dark-icon-bg-color">
              <Envelope />
            </div>
            <p>{mail}</p>
            <button
              onClick={() => handleOnClick({ mail })}
              className="border border-default-font-color rounded-full px-2 text-sm py-1 text-default-font-color bg-icon-bg-color dark:bg-dark-icon-bg-color dark:text-dark-default-font-color"
            >
              SKOPIUJ
            </button>
          </div>
        </div>
      ))}
    </section>
  )
}

const Envelope = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="none">
    <g stroke="#164346" strokeLinecap="round" strokeLinejoin="round" clipPath="url(#a)">
      <path d="M2.5 5.026a1.333 1.333 0 0 1 1.333-1.334h9.334A1.333 1.333 0 0 1 14.5 5.026v6.666a1.334 1.334 0 0 1-1.333 1.334H3.833A1.334 1.334 0 0 1 2.5 11.692z"></path>
      <path d="m2.5 5.026 6 4 6-4"></path>
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M.5.359h16v16H.5z"></path>
      </clipPath>
    </defs>
  </svg>
)
