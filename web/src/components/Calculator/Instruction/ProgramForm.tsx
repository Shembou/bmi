import Button from '@/components/common/Button/Button'
import Checkbox from '@/components/common/Checkbox/Checkbox'
import Input from '@/components/common/Input/Input'
import { IFormValues } from './IFormValues'
import { Dispatch, SetStateAction } from 'react'

export default function ProgramForm({
  formValues,
  setFormValues
}: {
  formValues: IFormValues
  setFormValues: Dispatch<SetStateAction<IFormValues>>
}) {
  const handleInputChange = ({
    target: { name, value }
  }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormValues(prevValues => ({ ...prevValues, [name]: value }))
  }

  const handleCheckboxChange = ({
    target: { name, checked }
  }: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues(prevValues => ({ ...prevValues, [name]: checked }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formValues)
  }

  return (
    <form
      className="grid place-self-center self-start gap-8 col-span-full 894:w-80 894:col-span-9 max-w-130 w-full"
      onSubmit={handleSubmit}
    >
      <Input
        label="Imię i nazwisko"
        type="text"
        value={formValues['name'] ?? ''}
        onChange={e => handleInputChange(e)}
        name="name"
        required
      />
      <Input
        label="Email"
        type="email"
        name="email"
        value={formValues['email'] ?? ''}
        onChange={e => handleInputChange(e)}
        required
      />
      <Input
        label="Numer telefonu"
        type="tel"
        value={formValues['phone'] ?? ''}
        name="phone"
        onChange={e => handleInputChange(e)}
        pattern="[0-9]{9}|[0-9]{3}-[0-9]{3}-[0-9]{3}"
        title="podaj poprawny numer telefonu np.111111111 lub 111-111-111"
        required
      />
      <Checkbox
        name="policy"
        onChange={e => handleCheckboxChange(e)}
        value={formValues['policy'] ?? false}
        required
      />
      <Button content="Wyślij zgłoszenie" color="primary" className="w-full sm:px-0" />
    </form>
  )
}
