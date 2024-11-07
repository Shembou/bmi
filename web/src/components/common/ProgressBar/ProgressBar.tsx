export default function ProgressBar({ currentStep }: { currentStep: number }) {
  return (
    <div className="py-12 px-8 grid gap-x-6 grid-flow-col">
      <div className="grid gap-y-2 items-center">
        <div className="relative">
          <h4
            className={`${currentStep >= 0 ? 'border-2 border-progressbar-1 ' : 'border border-progressbar-inactive'} w-min rounded-full p-2 z-10 bg-white`}
          >
            01
          </h4>
          <div
            className={`${currentStep >= 0 ? 'border-t-2 border-progressbar-1' : 'border-t border-progressbar-inactive'} absolute left-1/2 -translate-x-1/2 top-1/2 -z-10 h-6 w-full`}
          ></div>
        </div>
        <p>Kwestionarusz BMI</p>
      </div>
      <div className="grid gap-y-2">
        <div className="relative">
          <h4
            className={`${currentStep >= 1 ? 'border-2 border-progressbar-1 ' : 'border border-progressbar-inactive'} w-min rounded-full p-2 z-10 bg-white`}
          >
            02
          </h4>
          <div
            className={`${currentStep >= 1 ? 'border-t-2 border-progressbar-1' : 'border-t border-progressbar-inactive'} absolute left-1/2 -translate-x-1/2 top-1/2 -z-10 h-6 w-full`}
          ></div>
        </div>
        <p>Kwestionarusz Score</p>
      </div>
      <div className="grid gap-y-2">
        <div className="relative">
          <h4
            className={`${currentStep >= 2 ? 'border-2 border-progressbar-1 ' : 'border border-progressbar-inactive'} w-min rounded-full p-2 z-10 bg-white`}
          >
            03
          </h4>
          <div
            className={`${currentStep >= 2 ? 'border-t-2 border-progressbar-1' : 'border-t border-progressbar-inactive'} absolute left-1/2 -translate-x-1/2 top-1/2 -z-10 h-6 w-full`}
          ></div>
        </div>
        <p>Zgłoszenie do programu</p>
      </div>
    </div>
  )
}
