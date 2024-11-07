import Button from '@/components/common/Button/Button'
import Input from '@/components/common/Input/Input'
import RadioGroup from '@/components/common/RadioGroup/RadioGroup'
import { Dispatch, SetStateAction } from 'react'
import { IFormValues } from './IFormValues'
import { calculatePolScore } from '@/utils/calculatePolScore'
import { smoothScroll } from '@/utils/smoothScroll'

export default function ScoreForm({
  formValues,
  setFormValues,
  setScoreResult
}: {
  formValues: IFormValues
  setFormValues: Dispatch<SetStateAction<IFormValues>>
  setScoreResult: Dispatch<SetStateAction<number | undefined>>
}) {
  const radioValues = [
    { name: 'Tak', value: 'yes' },
    { name: 'Nie', value: 'no' }
  ]

  const handleInputChange = ({
    target: { name, value }
  }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormValues(prevValues => ({ ...prevValues, [name]: value }))
  }

  const handleRadioChange = (value: string) => {
    setFormValues(prevValues => ({ ...prevValues, isSmoking: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setScoreResult(calculatePolScore(formValues))

    setTimeout(() => {
      smoothScroll(e as React.MouseEvent, 'scoreSummary')
    }, 100)
  }

  return (
    <form
      className="grid place-self-center self-start gap-8 col-span-full 894:w-80 894:col-span-9 max-w-130 w-full"
      onSubmit={e => handleSubmit(e)}
    >
      <Input
        label="Ciśnienie tętnicze skurczowe (mmHg)"
        type="number"
        name="pressure"
        onChange={handleInputChange}
        value={formValues['pressure'] ?? ''}
        min={120}
        max={180}
        required
      />
      <RadioGroup
        label="Palenie tytoniu"
        onChange={handleRadioChange}
        className="mb-4"
        radioValues={radioValues}
        selectedValue={formValues['isSmoking'] ?? 'no'}
      />
      <Input
        label="Choloesterol całkowity (mg/dl)"
        type="number"
        onChange={handleInputChange}
        name={'cholesterol'}
        value={formValues['cholesterol'] ?? ''}
        min={150}
        max={310}
        required
      />
      <Button content="Oblicz SCORE" color="primary" className="w-full sm:px-0" />
    </form>
  )
}
