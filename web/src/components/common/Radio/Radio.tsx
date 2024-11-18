import { IRadio } from './IRadio'

export default function Radio({ radio: { name, value }, onChange, selectedValue }: IRadio) {
  return (
    <div className="flex flex-shrink-0 w-6 h-6 hover:cursor-pointer rounded-full border border-input-border dark:border-dark-icon-bg-color bg-white dark:bg-dark-icon-border-color items-center place-content-center">
      <input
        type="radio"
        name={name}
        value={value}
        onChange={() => onChange(value)}
        checked={selectedValue === value}
        className={`hover:cursor-pointer w-4 h-4 rounded-full appearance-none focus:outline-offset-8 ${
          selectedValue === value
            ? 'dark:bg-dark-icon-bg-color bg-input-border'
            : 'dark:bg-dark-icon-border-color bg-white'
        }`}
      />
    </div>
  )
}
