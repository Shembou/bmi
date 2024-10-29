import Markdown from '../common/Markdown/Markdown'
import { ITile } from './ITilesSection'

export default function Tiles({ tiles }: { tiles: ITile[] }) {
  const colors = ['image-2-background-color', 'image-3-background-color', 'image-background-color']
  const borderColors = ['image-2-border-color', 'image-3-border-color', 'image-border-color']
  const arrowColors = ['#E9FDFE', '#ECF1FF', '#EEFAEA']
  const arrowStrokeColors = ['#C1DADC', '#AFBEE3', '#C3DABA']

  return (
    <div className="grid gap-6 justify-center grid-cols-23 h-full py-24">
      {tiles.map(({ heading, description }, index) =>
        index % 2 === 0 ? (
          <>
            <div
              key={index}
              className={`bg-${colors[index % 3]} border-${borderColors[index % 3]} grid gap-2 ${index == 4 && 'col-span-11'} ${index == 0 && 'col-span-7'} ${index == 2 && 'col-span-10'} ${index + 1 == tiles.length && 'col-span-full max-w-xl justify-self-center'} p-8 rounded-xl border`}
            >
              <div className="flex gap-2">
                <h4>{`0${index + 1}`}</h4>
                <h4>{heading}</h4>
              </div>
              <Markdown>{description}</Markdown>
            </div>
            {index + 1 != tiles.length && (
              <ArrowRight
                color={arrowColors[index % 3]}
                strokeColor={arrowStrokeColors[index % 3]}
              />
            )}
          </>
        ) : (
          <div
            key={index}
            className={`bg-${colors[(index + 1) % 3]} border-${borderColors[(index + 1) % 3]} grid gap-2  ${index == 1 && 'col-span-15'} ${index == 3 && 'col-span-12'} ${index == 5 && 'col-span-11'} p-8 rounded-xl border`}
          >
            <div className="flex gap-2">
              <h4>{`0${index + 1}`}</h4>
              <h4>{heading}</h4>
            </div>
            <Markdown>{description}</Markdown>
          </div>
        )
      )}
    </div>
  )
}

const ArrowRight = ({ color, strokeColor }: { color: string; strokeColor: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="33"
    fill="none"
    viewBox="0 0 32 33"
    className="col-span-1 self-center place-self-center"
  >
    <g clipPath="url(#clip0_5562_5850)">
      <path fill="#fff" d="M0 .859h32v32H0z"></path>
      <path
        fill={color}
        stroke={strokeColor}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.333 10.192h-8l5.334 6.667-5.334 6.666h8l5.334-6.666z"
      ></path>
    </g>
    <defs>
      <clipPath id="clip0_5562_5850">
        <path fill="#fff" d="M0 .859h32v32H0z"></path>
      </clipPath>
    </defs>
  </svg>
)
