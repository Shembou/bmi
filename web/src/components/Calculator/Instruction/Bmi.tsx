import ProgressBar from '@/components/common/ProgressBar/ProgressBar'
import { IBmi } from '../ICalculator'
import Instruction from '../Instruction/Instruction'

export default function Bmi({
  bmiHero,
  bmiForm,
  currentStep,
  setStep,
  formValues,
  setFormValues
}: IBmi) {
  return (
    <section>
      <header className="grid text-center max-w-2xl place-self-center gap-6 pb-24">
        <h1>{bmiHero.heading}</h1>
        <p>{bmiHero.description}</p>
      </header>
      <ProgressBar currentStep={currentStep} />
      <Instruction
        currentStep={currentStep}
        {...bmiForm}
        setStep={setStep}
        formValues={formValues}
        setFormValues={setFormValues}
      />
    </section>
  )
}
