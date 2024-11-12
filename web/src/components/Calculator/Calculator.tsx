'use client'

import { useRef, useState } from 'react'
import { ICalculator } from './ICalculator'
import Bmi from './Instruction/Bmi'
import Score from './Instruction/Score'
import Program from './Instruction/Program'
import { SwitchTransition, CSSTransition } from 'react-transition-group'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { IFormValues } from './Instruction/IFormValues'

export default function Calculator({ bmi, program, score }: ICalculator) {
  const [order, setOrder] = useState(2)
  const nodeRef = useRef(null)

  const [formValues, setFormValues] = useState<IFormValues>({
    age: '',
    gender: 'male',
    weight: '',
    height: '',
    pressure: '',
    isSmoking: 'no',
    cholesterol: '',
    name: '',
    pesel: '',
    dateOfBirth: '',
    placeOfBirth: '',
    education: 'ISCED02',
    foreignOrigin: 'false',
    foreignCountry: 'false',
    nationalMinority: 'false',
    isHomeless: 'false',
    isDisabled: 'false',
    email: '',
    phone: '',
    voivodeship: '',
    district: '',
    commune: '',
    town: '',
    postalCode: '',
    houseNumber: '',
    localNumber: '',
    areaOfResidence: 'DEGURBA1',
    status: 'selfEmployed',
    shiftChanges: 'false',
    files: [''],
    statute: false,
    rodo: false
  })

  const renderOrder = [
    <Bmi
      {...bmi}
      currentStep={order}
      setStep={setOrder}
      formValues={formValues}
      setFormValues={setFormValues}
    />,
    <Score
      {...score}
      currentStep={order}
      setStep={setOrder}
      formValues={formValues}
      setFormValues={setFormValues}
    />,
    <Program
      {...program}
      currentStep={order}
      setStep={setOrder}
      formValues={formValues}
      setFormValues={setFormValues}
    />
  ]

  return (
    <>
      <ToastContainer />
      <SwitchTransition mode="out-in">
        <CSSTransition key={order} timeout={300} classNames="fade" nodeRef={nodeRef}>
          <div ref={nodeRef}>{renderOrder[order]}</div>
        </CSSTransition>
      </SwitchTransition>
    </>
  )
}
