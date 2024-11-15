import { getCmsData } from '@/utils/getCmsData'
import { IFooter } from './IFooter'
import { IMeta } from '../Meta/IMeta'
import { GetFooterData } from './FooterQueries'
import Img from '../Img/Img'
import Link from 'next/link'
import { Fragment } from 'react'

export default async function Footer() {
  const data = await getCmsData<[IFooter, IMeta]>({ query: `${GetFooterData}` })

  const singlePages = data[0].links.filter(link => link.isExpandable == false)

  return (
    <footer className="rounded-t-32 relative overflow-hidden mt-24">
      <div className="max-w-default flex flex-wrap justify-between gap-8 px-8 py-12 mx-auto">
        <div className="absolute h-130 w-130 -left-48 -top-24 rounded-full opacity-60 bg-input-border blur-3xl -z-10 dark:bg-white"></div>
        <div className="absolute h-130 w-130 -right-96 -top-24 rounded-full opacity-60 bg-input-border blur-3xl -z-10 dark:bg-white"></div>
        <div className="grid gap-6 ">
          <Img data={data[1].logo} width={183} height={51} className="filter-white" />
          <h4 className="text-xl leading-4">{data[0].info.name}</h4>
          <div className="grid gap-4">
            <div className="flex gap-1 items-center">
              <div className="p-1 border rounded-full bg-icon-bg-color border-icon-border-color dark:bg-dark-icon-border-color dark:border-dark-icon-bg-color">
                <Img
                  data={data[0].info.addressConfiguration.logo}
                  height={16}
                  width={16}
                  className="flex-shrink-0 filter-yellow"
                />
              </div>
              <p>{data[0].info.addressConfiguration.address}</p>
            </div>
            <div className="flex gap-1 items-center">
              <div className="p-1 border rounded-full bg-icon-bg-color border-icon-border-color dark:bg-dark-icon-border-color dark:border-dark-icon-bg-color">
                <Img
                  data={data[0].info.mailConfiguration.logo}
                  height={16}
                  width={16}
                  className="flex-shrink-0 filter-yellow"
                />
              </div>
              <p>{data[0].info.mailConfiguration.mail}</p>
            </div>
            <div className="flex gap-1 items-center">
              <div className="p-1 border rounded-full bg-icon-bg-color border-icon-border-color dark:bg-dark-icon-border-color dark:border-dark-icon-bg-color">
                <Img
                  data={data[0].info.phoneConfiguration.logo}
                  height={16}
                  width={16}
                  className="flex-shrink-0 filter-yellow"
                />
              </div>
              <p>
                {data[0].info.phoneConfiguration.phoneNumbers.map((number, index) => {
                  return index == 0 ? `${number}` : `, ${number}`
                })}
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-between max-w-2xl w-full gap-2">
          <div className="flex flex-col">
            {singlePages.map(({ name, link }, index) =>
              link ? (
                <Link key={index} href={link} className="no-underline py-2 footerLink w-fit">
                  {name}
                </Link>
              ) : (
                <p className="no-underline py-2 footerLink w-fit">{name}</p>
              )
            )}
          </div>
          {data[0].links.map(({ isExpandable, name, sublinks }, index) => (
            <Fragment key={index}>
              {isExpandable && (
                <div className="flex flex-col">
                  <p className="no-underline py-2 footerLink">{name}</p>
                  <div className="grid gap-2">
                    {sublinks.map(({ link, name }, subIndex) => (
                      <Link key={subIndex} href={link} className="no-underline w-fit">
                        {name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </footer>
  )
}
