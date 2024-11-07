import Button from '@/components/common/Button/Button'
import Checkbox from '@/components/common/Checkbox/Checkbox'
import Input from '@/components/common/Input/Input'
import { IFormValues } from './IFormValues'
import { Dispatch, SetStateAction, useState } from 'react'
import ImportFile from '@/components/common/ImportFile/ImportFile'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function ProgramForm({
  formValues,
  setFormValues
}: {
  formValues: IFormValues
  setFormValues: Dispatch<SetStateAction<IFormValues>>
}) {
  const [error, setError] = useState<string | null>(null)

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

  const convertToBase64 = (file: File) => {
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result as string)
      reader.onerror = error => reject(error)
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (formValues.files.length == 0 || formValues.files[0] == '') {
      setError('Wymagany plik')
      return
    }
    try {
      if (formValues.files.length != 0) {
        if (typeof formValues.files != 'string')
          formValues.files = (await convertToBase64(
            formValues.files[0] as unknown as File
          )) as unknown as string[]
      }
      const response = await fetch('/api/kalkulator', {
        method: 'POST',
        headers: { 'Content-type': 'application-json' },
        body: JSON.stringify(formValues)
      })
      if (!response.ok) {
        if (response.status == 400) toast.warning('Jesteś już uczestnikiem programu.')
        if (response.status == 500) toast.error('Błąd serwera')
      } else {
        toast.success('Zapisałeś się do programu')
      }
    } catch (error) {
      console.error((error as Error).message)
    }
  }

  return (
    <form
      className="grid place-self-center self-start gap-8 col-span-full 894:w-80 894:col-span-9 max-w-130 w-full"
      onSubmit={handleSubmit}
    >
      <ToastContainer />
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
      <ImportFile
        label="Do dokumentów rekrutacyjnych wymagane jest zaświadczenie o zatrudnieniu na dowolnym wzorze"
        name="files"
        error={error}
        setError={setError}
        setFormValues={setFormValues}
      />
      <Button content="Wyślij zgłoszenie" color="primary" className="w-full sm:px-0" />
    </form>
  )
}
