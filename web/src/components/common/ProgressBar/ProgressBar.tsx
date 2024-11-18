export default function ProgressBar({ currentStep }: { currentStep: number }) {
  return (
    <div className="py-12 px-8 grid gap-x-6 grid-flow-col">
      <div className="grid gap-y-2 items-center">
        <div className="relative">
          <p
            className={`${currentStep >= 0 ? 'border-2 border-progressbar-1 dark:border-dark-icon-bg-color' : 'border border-progressbar-inactive'} w-min rounded-full p-2 z-10 bg-white dark:bg-dark-icon-border-color`}
          >
            01
          </p>
          <div
            className={`${currentStep >= 0 ? 'border-t-2 border-progressbar-1 dark:border-dark-icon-bg-color' : 'border-t border-progressbar-inactive'} absolute left-1/2 -translate-x-1/2 top-1/2 -z-10 h-6 w-full`}
          ></div>
        </div>
        <p>Kwestionarusz BMI</p>
      </div>
      <div className="grid gap-y-2">
        <div className="relative">
          <p
            className={`${currentStep >= 1 ? 'border-2 border-progressbar-1 dark:border-dark-icon-bg-color' : 'border border-progressbar-inactive'} w-min rounded-full p-2 z-10 bg-white dark:bg-dark-icon-border-color`}
          >
            02
          </p>
          <div
            className={`${currentStep >= 1 ? 'border-t-2 border-progressbar-1 dark:border-dark-icon-bg-color' : 'border-t border-progressbar-inactive'} absolute left-1/2 -translate-x-1/2 top-1/2 -z-10 h-6 w-full`}
          ></div>
        </div>
        <p>Kwestionarusz Score</p>
      </div>
      <div className="grid gap-y-2">
        <div className="relative">
          <p
            className={`${currentStep >= 2 ? 'border-2 border-progressbar-1 dark:border-dark-icon-bg-color' : 'border border-progressbar-inactive '} w-min rounded-full p-2 z-10 bg-white dark:bg-dark-icon-border-color`}
          >
            03
          </p>
          <div
            className={`${currentStep >= 2 ? 'border-t-2 border-progressbar-1 dark:border-dark-icon-bg-color' : 'border-t border-progressbar-inactive'} absolute left-1/2 -translate-x-1/2 top-1/2 -z-10 h-6 w-full`}
          ></div>
        </div>
        <p>Zgłoszenie do programu</p>
      </div>
    </div>
  )
}
