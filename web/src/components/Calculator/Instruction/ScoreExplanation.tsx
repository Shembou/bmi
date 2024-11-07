export default function ScoreExplanation() {
  const lt = '<'
  return (
    <div className="grid gap-8 mx-2 xl:col-span-9 col-span-full 894:col-span-13">
      <header>
        <h3>Wynik</h3>
        <p>
          Po wprowadzeniu danych otrzymasz swój wynik SCORE, który wskaże Twoje ryzyko
          sercowo-naczyniowe w procentach. Wynik podzielony jest na następujące kategorie:
        </p>
      </header>
      <div className="grid gap-6">
        <div className="grid gap-6 grid-flow-row lg:grid-flow-col items-center">
          <h4 className="col-span-9 text-xl">Niskie ryzyko ({lt}1%):</h4>
          <p className="col-span-14">
            Masa ciała jest zbyt niska; zalecana jest konsultacja z lekarzem lub dietetykiem.
          </p>
        </div>
        <div className="grid gap-6">
          <div className="grid gap-6 grid-flow-row lg:grid-flow-col items-center">
            <h4 className="col-span-9 text-xl">Umiarkowane ryzyko (≥1% - {lt}5%):</h4>
            <p className="col-span-14">Zalecane są zmiany stylu życia i regularne kontrole.</p>
          </div>
        </div>
        <div className="grid gap-6">
          <div className="grid gap-6 grid-flow-row lg:grid-flow-col items-center">
            <h4 className="col-span-9 text-xl">Wysokie ryzyko (≥5% - {lt}10%):</h4>
            <p className="col-span-14">Wymaga intensywnych działań prewencyjnych i leczenia.</p>
          </div>
        </div>
        <div className="grid gap-6">
          <div className="grid gap-6 grid-flow-row lg:grid-flow-col items-center">
            <h4 className="col-span-9 text-xl">Bardzo wysokie ryzyko (≥10%):</h4>
            <p className="col-span-14">Konieczna jest natychmiastowa interwencja medyczna.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
