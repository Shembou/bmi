import { IImage } from '@/components/common/Img/IImg'
import BmiExplanation from './BmiExplanation'
import BmiForm from './BmiForm'
import ScoreExplanation from './ScoreExplanation'
import ScoreForm from './ScoreForm'
import Link from 'next/link'
import ProgramForm from './ProgramForm'
import Img from '@/components/common/Img/Img'
import { Dispatch, SetStateAction, useState } from 'react'
import BmiSummary from './BmiSummary'
import ScoreSummary from './ScoreSummary'
import { IFormValues } from './IFormValues'

export default function Instruction({
  heading,
  description,
  currentStep,
  image,
  files,
  setStep,
  formValues,
  setFormValues
}: {
  heading: string
  description: string
  currentStep: number
  setStep: Dispatch<number>
  image?: IImage
  files?: {
    name: string
    file: {
      asset: {
        url: string
      }
    }
  }[]
  formValues: IFormValues
  setFormValues: Dispatch<SetStateAction<IFormValues>>
}) {
  const [bmiResult, setBmiResult] = useState(0)

  const [scoreResult, setScoreResult] = useState<number | undefined>(undefined)

  const renderOrder = [
    <>
      <BmiForm formValues={formValues} setFormValues={setFormValues} setBmiResult={setBmiResult} />
      <BmiExplanation />
    </>,
    <>
      <ScoreForm
        formValues={formValues}
        setFormValues={setFormValues}
        setScoreResult={setScoreResult}
      />
      <ScoreExplanation />
    </>,
    <>
      <ProgramForm formValues={formValues} setFormValues={setFormValues} />
      <Img
        data={image!}
        width={361}
        height={385}
        className="lg:w-full lg:col-span-6 self-end col-span-full justify-self-center"
      />
    </>
  ]

  return (
    <>
      <div className="py-24 grid justify-between grid-cols-23 xl:grid-rows-1 grid-flow-row-dense items-start gap-y-5">
        {files ? (
          <>
            <header className="lg:col-span-8 grid gap-6 self-start 894:col-span-12 col-span-full">
              <h2>{heading}</h2>
              <p>{description}</p>
              <div className="pt-16 grid gap-6">
                <h2>Pliki do pobrania</h2>
                {files.map(({ file, name }, index) => (
                  <div key={index}>
                    <Link href={file.asset.url} className="grid gap-2 grid-flow-col justify-start">
                      {name} <DownloadIcon />
                    </Link>
                  </div>
                ))}
              </div>
            </header>
            {renderOrder[currentStep]}
          </>
        ) : (
          <>
            <header className="xl:col-span-4 grid gap-6 self-start col-span-full">
              <h2>{heading}</h2>
              <p>{description}</p>
            </header>
            {renderOrder[currentStep]}
          </>
        )}
      </div>
      <>
        {bmiResult !== 0 && currentStep === 0 && (
          <BmiSummary bmiResult={bmiResult} setStep={setStep} />
        )}
        {scoreResult != undefined && currentStep === 1 && (
          <ScoreSummary scoreResult={scoreResult} setStep={setStep} />
        )}
      </>
    </>
  )
}

const DownloadIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" fill="none">
    <g stroke="#164346" strokeLinecap="round" strokeLinejoin="round" clipPath="url(#a)">
      <path d="M4 17.359v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2m-13-6 5 5 5-5m-5-7v12"></path>
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 .359h24v24H0z"></path>
      </clipPath>
    </defs>
  </svg>
)
