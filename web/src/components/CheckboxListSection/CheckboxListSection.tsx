import Markdown from '../common/Markdown/Markdown'
import { ICheckboxListSection } from './ICheckboxListSection'

export default function CheckboxListSection({ list }: ICheckboxListSection) {
  return (
    <div className="pt-8">
      {list.map((test, index) => (
        <div className="flex gap-2">
          <CheckIcon />
          <Markdown key={index}>{test}</Markdown>
        </div>
      ))}
    </div>
  )
}

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="21"
    fill="none"
    viewBox="0 0 20 21"
    className="shrink-0"
  >
    <g
      stroke="#164346"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      clipPath="url(#clip0_5735_13058)"
    >
      <path d="M2.5 10.359a7.5 7.5 0 1 0 15 0 7.5 7.5 0 0 0-15 0"></path>
      <path d="m7.5 10.359 1.667 1.667L12.5 8.692"></path>
    </g>
    <defs>
      <clipPath id="clip0_5735_13058">
        <path fill="#fff" d="M0 .359h20v20H0z"></path>
      </clipPath>
    </defs>
  </svg>
)
