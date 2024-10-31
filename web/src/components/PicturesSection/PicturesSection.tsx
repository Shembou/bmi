import Img from '../common/Img/Img'
import { IPicturesSection } from './IPicturesSection'

export default function ({ description, heading, imagesGrid }: IPicturesSection) {
  return (
    <section className="grid gap-16 py-24">
      <div className="grid grid-cols-2 gap-16">
        <h2>{heading}</h2>
        <h4>{description}</h4>
      </div>
      <div className="grid gap-7 size-full grid-flow-col items-center">
        {imagesGrid.map(({ description, image }, i) => (
          <div key={i} className={`grid items-center gap-x-4 auto-cols-fr`}>
            {i === 0 ? (
              <div className="grid w-80 h-full text-center">
                <Img data={image} height={196} width={329} className="h-full w-full" />
                <p className=" p-8 border-image-border-color border bg-image-background-color rounded-br-2xl rounded-bl-2xl">
                  {description}
                </p>
              </div>
            ) : (
              <div className={`grid text-center ${i == 2 && 'w-80 h-full'}`}>
                <p
                  className={`p-8 ${i == 1 ? 'border-image-2-border-color border bg-image-2-background-color' : 'border-image-3-border-color border bg-image-3-background-color text-purple-font-color'} rounded-tr-2xl rounded-tl-2xl`}
                >
                  {description}
                </p>
                <Img
                  data={image}
                  height={i === 1 ? 174 : 196}
                  width={i === 1 ? 590 : 329}
                  className="h-full w-full"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
