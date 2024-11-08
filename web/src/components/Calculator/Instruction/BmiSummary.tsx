import Button from '@/components/common/Button/Button'
import { ArrowIcon } from '@/components/common/Icons/ArrowIcon'
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

  const handleClick = () => {
    setStep(1)
  }

  return (
    <>
      <div
        className="p-8 flex justify-between border rounded-3xl border-input-border items-center dark:border-dark-icon-bg-color"
        id="bmiSummary"
      >
        <h4>Twój wynik BMI</h4>
        <div className="px-8 flex w-96 justify-between items-center border rounded-3xl border-input-border dark:border-dark-icon-bg-color">
          <h4>{bmiResult}</h4>
          <p>{calculateBmiType(bmiResult)}</p>
        </div>
        {bmiResult >= 25 && (
          <Button content="Przejdź do kalkulatora SCORE" className="px-4" onClick={handleClick} />
        )}
      </div>
      {bmiResult >= 25 && (
        <div className="flex content-between gap-auto justify-between py-9 md:flex-row flex-col gap-4 mb-9">
          <h4 className="max-w-96">
            Twój wynik BMI wskazuje, że kwalifikujesz się do naszego programu wsparcia.
          </h4>
          <div className="max-w-130 grid gap-6">
            <p>
              Projekt jest przeznaczony dla osób, które wymagają pomocy w osiągnięciu prawidłowego
              poziomu BMI. Cieszymy się, że możemy wesprzeć Cię w tym procesie.
            </p>
            <h4>Co teraz?</h4>
            <div className="flex gap-2 items-center">
              <ArrowIcon />
              <p>Przejdź do kolejnego etapu zgłoszenia i wypełnij kwestionariusz SCORE</p>
            </div>
          </div>
        </div>
      )}
      {bmiResult < 25 && bmiResult > 18.5 && (
        <div className="flex content-between gap-auto justify-between py-9 md:flex-row flex-col gap-4 mb-9">
          <h4 className="max-w-96">Wynik Twojego BMI jest prawidłowy.</h4>
          <div className="max-w-130 grid gap-6">
            <p>
              Gratulacje! Twój wyniki BMI jest prawidłowy, co oznacza, że nie kwalifikujesz się do
              naszego programu wsparcia. Projekt jest przeznaczony dla osób, które wymagają pomocy w
              osiągnięciu prawidłowego poziomu BMI.
            </p>
            <h4>Co teraz?</h4>
            <div className="flex gap-2 items-center">
              <ArrowIcon />
              <p>Kontynuuj swoje zdrowe nawyki i utrzymuj dobre wyniki!</p>
            </div>
            <div className="flex gap-2 items-center">
              <ArrowIcon />
              <p>
                Jeśli masz pytania dotyczące zdrowia i stylu życia, skontaktuj się z naszym
                specjalistą.
              </p>
            </div>
          </div>
        </div>
      )}
      {bmiResult <= 18.5 && (
        <div className="flex content-between gap-auto justify-between py-9 md:flex-row flex-col gap-4 mb-9">
          <h4 className="max-w-96">Wynik Twojego BMI jest prawidłowy.</h4>
          <div className="max-w-130 grid gap-6">
            <p>
              Twoje wyniki BMI wskazują, że kwalifikujesz się do naszego programu wsparcia. Powinno
              być: Twój wynik wskazuje na niedowagę. Zalecana jest konsultacja z lekarzem lub
              dietetykiem.
            </p>
          </div>
        </div>
      )}
    </>
  )
}
