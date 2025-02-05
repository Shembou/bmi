import Button from '@/components/common/Button/Button'
import { calculateScoreType } from '@/utils/calculateScoreType'
import { scrollIntoId } from '@/utils/smoothScroll'
import { Dispatch } from 'react'

export default function ScoreSummary({
  scoreResult,
  setStep
}: {
  scoreResult: number
  setStep: Dispatch<number>
}) {
  const handleClick = () => {
    setStep(2)
    setTimeout(() => {
      scrollIntoId('instruction')
    }, 400)
  }

  return (
    <div
      className="p-8 flex justify-between border rounded-3xl border-input-border items-center mb-20 dark:border-dark-icon-bg-color"
      id="scoreSummary"
    >
      <h4>Twój wynik Score</h4>
      <div className="px-8 flex w-96 justify-between items-center border rounded-3xl border-input-border dark:border-dark-icon-bg-color">
        <h4>{`${scoreResult}%`} </h4>
        <p>{calculateScoreType(scoreResult)}</p>
      </div>
      {scoreResult >= 1 && (
        <Button content="Zapisz się do programu" onClick={() => handleClick()} className="px-4 " />
      )}
    </div>
  )
}
