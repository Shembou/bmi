import Button from '@/components/common/Button/Button'
import { Dispatch } from 'react'

export default function BmiSummary({
  bmiResult,
  setStep
}: {
  bmiResult: number
  setStep: Dispatch<number>
}) {
  const calculateBmiType = (bmi: number): string => {
    if (bmi < 18.5) return 'Niedowaga'
    if (bmi >= 18.5 && bmi <= 24.9) return 'Prawidłowa waga'
    if (bmi >= 25 && bmi <= 29.9) return 'Nadwaga'
    if (bmi >= 30 && bmi <= 34.9) return 'Otyłość I stopnia'
    if (bmi >= 35 && bmi <= 39.9) return 'Otyłość II stopnia'
    return 'Otyłość III stopnia'
  }

  return (
    <div className="p-8 flex justify-between border rounded-3xl border-input-border items-center">
      <h4>Twój wynik BMI</h4>
      <div className="px-8 flex w-96 justify-between items-center border rounded-3xl border-input-border">
        <h4>{bmiResult}</h4>
        <p>{calculateBmiType(bmiResult)}</p>
      </div>
      <Button content="Przejdź do kalkulatora SCORE" onClick={() => setStep(1)} />
    </div>
  )
}
