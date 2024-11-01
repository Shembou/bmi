import ProgressBar from '@/components/common/ProgressBar/ProgressBar'
import { IProgram } from '../ICalculator'
import Instruction from '../Instruction/Instruction'

export default function Program({
  currentStep,
  programForm: { titleAndDescription, files, image },
  programHero,
  setStep
}: IProgram) {
  return (
    <section>
      <header className="grid text-center max-w-2xl place-self-center gap-6 pb-24">
        <h2>{programHero.heading}</h2>
        <p>{programHero.description}</p>
      </header>
      <ProgressBar currentStep={currentStep} />
      <Instruction
        currentStep={currentStep}
        {...titleAndDescription}
        files={files}
        image={image}
        setStep={setStep}
      />
    </section>
  )
}
