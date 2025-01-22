import ProgressBar from '@/components/common/ProgressBar/ProgressBar'
import { IScore } from '../ICalculator'
import Instruction from '../Instruction/Instruction'

export default function Score({
  scoreForm,
  currentStep,
  scoreHero,
  setStep,
  formValues,
  setFormValues
}: IScore) {
  return (
    <section>
      <header className="grid text-center max-w-2xl place-self-center gap-6 pb-24 m-auto">
        <h1>{scoreHero.heading}</h1>
        <p>{scoreHero.description}</p>
      </header>
      <ProgressBar currentStep={currentStep} />
      <Instruction
        currentStep={currentStep}
        {...scoreForm}
        setStep={setStep}
        formValues={formValues}
        setFormValues={setFormValues}
      />
    </section>
  )
}
