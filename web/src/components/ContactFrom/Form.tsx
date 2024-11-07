'use client'

import { useState } from 'react'
import Input from '../common/Input/Input'
import Checkbox from '../common/Checkbox/Checkbox'
import Button from '../common/Button/Button'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function Form({
  content,
  email,
  name,
  className
}: {
  content: string
  email: string
  name: string
  className: string
}) {
  const [formValues, setFormValues] = useState({ email: '', name: '', content: '', policy: false })

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-type': 'application-json' },
        body: JSON.stringify(formValues)
      })
      if (!response.ok) {
        if (response.status == 400) toast.warning('Jesteś już uczestnikiem programu.')
        if (response.status == 500) toast.error('Błąd serwera')
      } else {
        toast.success('wiadomość została wysłana')
      }
    } catch (error) {
      console.error((error as Error).message)
    }
  }

  return (
    <form className={`${className}`} onSubmit={handleSubmit}>
      <ToastContainer />
      <Input
        label={email}
        type="email"
        name="email"
        value={formValues['email'] ?? ''}
        onChange={e => handleInputChange(e)}
        required
      />
      <Input
        label={name}
        type="text"
        name="name"
        value={formValues['name'] ?? ''}
        onChange={e => handleInputChange(e)}
        required
      />
      <Input
        label={content}
        type="text"
        name="content"
        value={formValues['content'] ?? ''}
        onChange={e => handleInputChange(e)}
        className="h-32 rounded-2xl text-start"
        required
        textarea
      />
      <Checkbox
        name="policy"
        onChange={e => handleCheckboxChange(e)}
        value={formValues['policy'] ?? false}
        required
      />
      <Button content="Wyślij wiadomość" color="primary" className="w-full sm:px-0" />
    </form>
  )
}
