import formatDateToPolishLocaleString from '@/utils/formatDateToPolishLocaleString'
import Button from '../common/Button/Button'
import Img from '../common/Img/Img'
import { IHero } from './IHero'

export default function Hero({ button, framedImage, heading, text, _createdAt, tag }: IHero) {
  return (
    <section className="grid lg:gap-28 xl:gap-40 items-center sm:grid-flow-col md:grid-cols-8 sm:gap-3 grid-flow-row gap-16 relative">
      {/* <div className="absolute h-130 w-130 -left-64 -bottom-40 rounded-full opacity-50 bg-icon-bg-color blur-3xl -z-10"></div> */}
      <div className="grid gap-6 sm:col-span-5">
        {_createdAt && (
          <div className="flex gap-6">
            <span>{formatDateToPolishLocaleString(_createdAt)}</span>
            <span>•</span>
            <span>{tag}</span>
          </div>
        )}
        <h2>{heading}</h2>
        <p className="pb-6">{text}</p>
        {button && <Button {...button} className="px-8"></Button>}
      </div>
      {framedImage && (
        <div className="flex w-full relative sm:col-span-3 -order-1 sm:order-1">
          <div className="absolute -top-6 -left-6 bg-lime h-16 w-16 items-center flex justify-center rounded-2xl dark:bg-dark-icon-bg-color">
            <Img data={framedImage.firstIcon} height={39} width={39} className="filter-black" />
          </div>
          <Img
            data={framedImage.image}
            height={385}
            width={361}
            className="w-full h-min border dark:border-dark-icon-bg-color rounded-3xl border-white dark:bg-dark-icon-bg-color"
          />
          <div className="absolute -bottom-6 -right-6 bg-lime-gray h-16 w-16 items-center flex justify-center rounded-2xl dark:bg-dark-icon-bg-color">
            <Img data={framedImage.secondIcon} height={39} width={39} className="filter-black" />
          </div>
        </div>
      )}
    </section>
  )
}
