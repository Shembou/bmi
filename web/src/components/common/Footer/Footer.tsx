import { getCmsData } from '@/utils/getCmsData'
import { IFooter } from './IFooter'
import { IMeta } from '../Meta/IMeta'
import { GetFooterData } from './FooterQueries'
import Img from '../Img/Img'

export default async function Footer() {
  const data = await getCmsData<[IFooter, IMeta]>({ query: `${GetFooterData}` })

  return (
    <footer className="flex">
      <div className="grid gap-6">
        <Img data={data[1].logo} width={183} height={51} />
        <h4 className="text-xl leading-4">{data[0].info.name}</h4>
        <div className="grid gap-4">
          <div className="flex gap-1 items-center">
            <div className="p-1 border rounded-full bg-icon-bg-color border-icon-border-color">
              <Img
                data={data[0].info.addressConfiguration.logo}
                height={16}
                width={16}
                className="flex-shrink-0"
              />
            </div>
            <p>{data[0].info.addressConfiguration.address}</p>
          </div>
          <div className="flex gap-1 items-center">
            <div className="p-1 border rounded-full bg-icon-bg-color border-icon-border-color">
              <Img
                data={data[0].info.mailConfiguration.logo}
                height={16}
                width={16}
                className="flex-shrink-0"
              />
            </div>
            <p>{data[0].info.mailConfiguration.mail}</p>
          </div>
          <div className="flex gap-1 items-center">
            <div className="p-1 border rounded-full bg-icon-bg-color border-icon-border-color">
              <Img
                data={data[0].info.phoneConfiguration.logo}
                height={16}
                width={16}
                className="flex-shrink-0"
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
    </footer>
  )
}
