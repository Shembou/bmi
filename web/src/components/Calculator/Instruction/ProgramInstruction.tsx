import { Dispatch } from 'react'
import Button from '@/components/common/Button/Button'
import Link from 'next/link'

export default function ProgramInstruction({
  heading,
  description,
  currentStep,
  files,
  setStep,
  renderOrder
}: {
  heading: string
  description: string
  currentStep: number
  setStep: Dispatch<number>
  files: {
    name: string
    file: {
      asset: {
        url: string
      }
    }
  }[]
  renderOrder: JSX.Element[]
}) {
  return (
    <div className="col-span-full grid grid-flow-row gap-y-20 ">
      <header className="flex gap-10 flex-wrap justify-between">
        <div className="max-w-130 gap-6 grid">
          <h3>{heading}</h3>
          <p>{description}</p>
          {currentStep > 0 && (
            <Button
              className="w-full max-w-130"
              content="Poprzedni krok"
              onClick={() => setStep(--currentStep)}
            />
          )}
        </div>
        <div className="grid gap-6">
          <h3>Pliki do pobrania</h3>
          {files.map(({ file, name }, index) => (
            <div key={index}>
              <Link href={file.asset.url} className="grid gap-2 grid-flow-col justify-start w-fit">
                {name} <DownloadIcon />
              </Link>
            </div>
          ))}
        </div>
      </header>
      {renderOrder[currentStep]}
    </div>
  )
}

const DownloadIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" fill="none">
    <g
      stroke="#164346"
      strokeLinecap="round"
      strokeLinejoin="round"
      clipPath="url(#a)"
      className="dark:stroke-dark-icon-bg-color"
    >
      <path d="M4 17.359v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2m-13-6 5 5 5-5m-5-7v12"></path>
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 .359h24v24H0z"></path>
      </clipPath>
    </defs>
  </svg>
)
