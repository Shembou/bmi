import BmiExplanation from './BmiExplanation'
import BmiForm from './BmiForm'
import ScoreExplanation from './ScoreExplanation'
import ScoreForm from './ScoreForm'
import ProgramForm from './ProgramForm'
import { Dispatch, SetStateAction, useState } from 'react'
import BmiSummary from './BmiSummary'
import ScoreSummary from './ScoreSummary'
import { IFormValues } from './IFormValues'
import Button from '@/components/common/Button/Button'
import ProgramInstruction from './ProgramInstruction'
import { IReferenceSection } from '@/components/ReferenceSection/IReferenceSection'
import ReferenceSection from '@/components/ReferenceSection/ReferenceSection'

export default function Instruction({
  heading,
  description,
  currentStep,
  files,
  setStep,
  formValues,
  setFormValues,
  link,
  referenceSection
}: {
  heading: string
  description: string
  currentStep: number
  setStep: Dispatch<number>
  files?: {
    name: string
    file: {
      asset: {
        url: string
      }
    }
  }[]
  link?: string
  referenceSection?: IReferenceSection
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
      <ProgramForm
        formValues={formValues}
        setFormValues={setFormValues}
        statuteLink={link as string}
      />
      <ReferenceSection {...(referenceSection as IReferenceSection)} />
    </>
  ]

  return (
    <>
      <div
        className="py-24 grid justify-between grid-cols-23 xl:grid-rows-1 grid-flow-row-dense items-start gap-y-5"
        id="instruction"
      >
        {files ? (
          <>
            <ProgramInstruction
              currentStep={currentStep}
              heading={heading}
              description={description}
              files={files}
              renderOrder={renderOrder}
              setStep={setStep}
            />
          </>
        ) : (
          <>
            <header className="xl:col-span-4 grid gap-6 self-start col-span-full">
              <h2>{heading}</h2>
              <p>{description}</p>
              {currentStep > 0 && (
                <Button
                  className="w-full max-w-130"
                  content="Poprzedni krok"
                  onClick={() => setStep(--currentStep)}
                />
              )}
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
