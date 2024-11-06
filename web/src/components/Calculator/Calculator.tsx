'use client'

import { useRef, useState } from 'react'
import { ICalculator } from './ICalculator'
import Bmi from './Instruction/Bmi'
import Score from './Instruction/Score'
import Program from './Instruction/Program'
import { SwitchTransition, CSSTransition } from 'react-transition-group'

export default function Calculator({ bmi, program, score }: ICalculator) {
  const [order, setOrder] = useState(0)
  const nodeRef = useRef(null)

  const [formValues, setFormValues] = useState({
    age: '',
    gender: 'male',
    weight: '',
    height: '',
    pressure: '',
    isSmoking: 'no',
    cholesterol: '',
    name: '',
    email: '',
    phone: '',
    policy: false,
    files: ['']
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
    <SwitchTransition mode="out-in">
      <CSSTransition key={order} timeout={300} classNames="fade" nodeRef={nodeRef}>
        <div ref={nodeRef}>{renderOrder[order]}</div>
      </CSSTransition>
    </SwitchTransition>
  )
}
