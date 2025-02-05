import ProgressBar from '@/components/common/ProgressBar/ProgressBar'
import { IProgram } from '../ICalculator'
import Instruction from '../Instruction/Instruction'

export default function Program({
  currentStep,
  programForm: { titleAndDescription, files, link, referenceSection, enclosureLink },
  programHero,
  setStep,
  formValues,
  setFormValues
}: IProgram) {
  return (
    <section>
      <header className="grid text-center max-w-2xl place-self-center gap-6 pb-24 m-auto">
        <h1>{programHero.heading}</h1>
        <p>{programHero.description}</p>
      </header>
      <ProgressBar currentStep={currentStep} />
      <Instruction
        currentStep={currentStep}
        {...titleAndDescription}
        files={files}
        setStep={setStep}
        formValues={formValues}
        setFormValues={setFormValues}
        link={link}
        referenceSection={referenceSection}
        enclosureLink={enclosureLink}
      />
    </section>
  )
}
