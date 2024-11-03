import Button from '../common/Button/Button'
import Img from '../common/Img/Img'
import { IHero } from './IHero'

export default function Hero({ button, framedImage, heading, text }: IHero) {
  return (
    <section className="grid lg:gap-28 xl:gap-40 items-center sm:grid-flow-col md:grid-cols-8 sm:gap-3 grid-flow-row gap-16 relative">
      {/* <div className="absolute h-130 w-130 -left-64 -bottom-40 rounded-full opacity-50 bg-icon-bg-color blur-3xl -z-10"></div> */}
      <div className="grid gap-6 sm:col-span-5">
        <h2>{heading}</h2>
        <p className="pb-6">{text}</p>
        {button && <Button {...button}></Button>}
      </div>
      <div className="flex w-full relative sm:col-span-3 -order-1 sm:order-1">
        <div className="absolute -top-6 -left-6 bg-lime h-16 w-16 items-center flex justify-center rounded-2xl">
          <Img data={framedImage.firstIcon} height={39} width={39} />
        </div>
        <Img data={framedImage.image} height={385} width={361} className="w-full h-min" />
        <div className="absolute -bottom-6 -right-6 bg-lime-gray h-16 w-16 items-center flex justify-center rounded-2xl">
          <Img data={framedImage.secondIcon} height={39} width={39} />
        </div>
      </div>
    </section>
  )
}
