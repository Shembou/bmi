export default function BmiExplanation() {
  const lt = '<'

  const ge = '≥'

  return (
    <div className="grid gap-8 mx-2 col-span-9">
      <header>
        <h4>Wynik BMI podzielony jest na następujące kategorie:</h4>
      </header>
      <div className="grid gap-6">
        <div className="grid gap-6 grid-flow-col grid-cols-23 items-center">
          <h4 className="col-span-8 text-xl">
            Niedowaga <br /> (BMI {lt} 18,5):
          </h4>
          <p className="col-span-15">
            Masa ciała jest zbyt niska; zalecana jest konsultacja z lekarzem lub dietetykiem.
          </p>
        </div>
        <div className="grid gap-6">
          <div className="grid gap-6 grid-flow-col grid-cols-23 items-center">
            <h4 className="col-span-8 text-xl">Prawidłowa waga (BMI 18,5 - 24,9):</h4>
            <p className="col-span-15">Masa ciała jest w normie; zalecane jest utrzymanie</p>
          </div>
        </div>
        <div className="grid gap-6">
          <div className="grid gap-6 grid-flow-col grid-cols-23 items-center">
            <h4 className="col-span-8 text-xl">
              Nadwaga <br /> (BMI 25 - 29,9):
            </h4>
            <p className="col-span-15">
              Nadmierna masa ciała; zalecane są zmiany stylu życia, aby uniknąć ryzyka chorób
              przewlekłych.
            </p>
          </div>
        </div>
        <div className="grid gap-6">
          <div className="grid gap-6 grid-flow-col grid-cols-23 items-center">
            <h4 className="col-span-8 text-xl">Otyłość I stopnia (BMI 30 - 34,9):</h4>
            <p className="col-span-15">
              Znaczna nadmierna masa ciała; konieczne są działania prewencyjne i kontrola medyczna.
            </p>
          </div>
        </div>
        <div className="grid gap-6">
          <div className="grid gap-6 grid-flow-col grid-cols-23 items-center">
            <h4 className="col-span-8 text-xl">Otyłość II stopnia (BMI 35 - 39,9):</h4>
            <p className="col-span-15">
              Wysokie ryzyko zdrowotne; wymaga intensywnych działań prewencyjnych i leczenia.
            </p>
          </div>
        </div>
        <div className="grid gap-6">
          <div className="grid gap-6 grid-flow-col grid-cols-23 items-center">
            <h4 className="col-span-8 text-xl">Otyłość III stopnia (BMI {ge} 40):</h4>
            <p className="col-span-15">
              Bardzo wysokie ryzyko zdrowotne; konieczna jest natychmiastowa interwencja medyczna.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}