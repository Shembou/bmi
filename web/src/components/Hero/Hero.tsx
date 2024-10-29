import Button from '../common/Button/Button'
import Img from '../common/Img/Img'
import { IHero } from './IHero'

export default function Hero({ button, framedImage, heading, text }: IHero) {
  console.log(button)
  return (
    <section className="flex gap-40 items-center">
      <div className="grid gap-6">
        <h2>{heading}</h2>
        <p className="pb-6">{text}</p>
        <Button {...button}></Button>
      </div>
      <div className="flex w-full relative">
        <div className="absolute -top-6 -left-6 bg-lime h-16 w-16 items-center flex justify-center rounded-2xl">
          <Img data={framedImage.firstIcon} height={39} width={39} />
        </div>
        <Img data={framedImage.image} height={385} width={361} className="w-full" />
        <div className="absolute -bottom-6 -right-6 bg-lime-gray h-16 w-16 items-center flex justify-center rounded-2xl">
          <Img data={framedImage.secondIcon} height={39} width={39} />
        </div>
      </div>
    </section>
  )
}
