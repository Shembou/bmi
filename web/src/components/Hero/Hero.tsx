import Button from '../common/Button/Button'
import Img from '../common/Img/Img'
import { IHero } from './IHero'

export default function Hero({ button, framedImage, heading, text }: IHero) {
  return (
    <section className="grid gap-40 items-center grid-flow-col grid-cols-8">
      <div className="grid gap-6 col-span-5">
        <h2>{heading}</h2>
        <p className="pb-6">{text}</p>
        {button && <Button {...button}></Button>}
      </div>
      <div className="flex w-full relative col-span-3">
        <div className="absolute -top-6 -left-6 bg-lime h-16 w-16 items-center flex justify-center rounded-2xl">
          <Img data={framedImage.firstIcon} height={39} width={39} />
        </div>
        <Img data={framedImage.image} height={385} width={361} />
        <div className="absolute -bottom-6 -right-6 bg-lime-gray h-16 w-16 items-center flex justify-center rounded-2xl">
          <Img data={framedImage.secondIcon} height={39} width={39} />
        </div>
      </div>
    </section>
  )
}
