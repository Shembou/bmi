import Button from '@/components/common/Button/Button'
import Input from '@/components/common/Input/Input'
import Select from '@/components/common/Select/Select'
import { Dispatch, SetStateAction, useState } from 'react'
import { IFormValues } from './IFormValues'

export default function BmiForm({
  formValues,
  setFormValues,
  setBmiResult
}: {
  formValues: IFormValues
  setFormValues: Dispatch<SetStateAction<IFormValues>>
  setBmiResult: Dispatch<SetStateAction<number>>
}) {
  const [gender, setGender] = useState('male')

  const handleGenderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value
    setGender(value)
    setFormValues(prevValues => ({ ...prevValues, gender: value }))
  }

  const handleInputChange = ({ target: { name, value } }: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues(prevValues => ({ ...prevValues, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const division = Number(Math.pow(Number(formValues['height']) / 100, 2).toFixed(2))
    const result = Math.floor((Number(formValues['weight']) / division) * 10) / 10
    setBmiResult(result)
  }

  return (
    <form
      className="col-span-9 w-80 grid place-self-center self-start gap-8"
      onSubmit={handleSubmit}
    >
      <Input
        label="Wiek"
        type="number"
        onChange={e => handleInputChange(e)}
        name="age"
        value={formValues['age'].toString() ?? ''}
        pattern="^(0|[1-9]|[1-9][0-9]|100|1[01][0-9]|120)$|^(?!\s*$).*$"
        title="Proszę podać poprawny wiek"
        min={1}
        max={120}
        required
      />
      <Select
        options={[
          { label: 'Mężczyzna', value: 'male' },
          { label: 'Kobieta', value: 'female' }
        ]}
        label="Płeć"
        onChange={e => handleGenderChange(e)}
        value={gender}
        name={'gender'}
      />
      <Input
        label="Waga (kg)"
        type="number"
        name="weight"
        onChange={handleInputChange}
        value={formValues['weight'].toString() ?? ''}
        min={20}
        max={400}
        required
      />
      <Input
        label="Wzrost"
        type="number"
        name="height"
        onChange={handleInputChange}
        value={formValues['height'].toString() ?? ''}
        min={20}
        max={400}
        required
      />
      <Button content="Oblicz BMI" color="primary" className="w-64" />
    </form>
  )
}