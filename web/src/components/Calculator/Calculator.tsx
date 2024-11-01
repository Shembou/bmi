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

  const renderOrder = [
    <Bmi {...bmi} currentStep={order} setStep={setOrder} />,
    <Score {...score} currentStep={order} setStep={setOrder} />,
    <Program {...program} currentStep={order} setStep={setOrder} />
  ]

  return (
    <SwitchTransition mode="out-in">
      <CSSTransition key={order} timeout={300} classNames="fade" nodeRef={nodeRef}>
        <div ref={nodeRef}>{renderOrder[order]}</div>
      </CSSTransition>
    </SwitchTransition>
  )
}
