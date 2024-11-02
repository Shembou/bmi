'use client'

import { useState } from 'react'
import Input from '../common/Input/Input'
import Checkbox from '../common/Checkbox/Checkbox'
import Button from '../common/Button/Button'

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formValues)
  }

  return (
    <form className={`${className}`} onSubmit={handleSubmit}>
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
      <Button content="Wyślij wiadomość" color="primary" className="w-80" />
    </form>
  )
}
