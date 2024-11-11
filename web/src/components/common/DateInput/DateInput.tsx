import { IDateInput } from './IDateInput'

export default function DateInput({
  label,
  value,
  name,
  onChange,
  min = undefined,
  max = undefined,
  required = false,
  ...props
}: IDateInput) {
  return (
    <div>
      {label && <label className="block mb-1 text-sm font-medium pl-4">{label}</label>}
      <input
        type="date"
        value={value}
        onChange={onChange}
        name={name}
        className={`w-full px-3 py-input border rounded-full border-icon-bg-color focus:outline-none dark:bg-dark-icon-border-color dark:border-dark-icon-bg-color focus:ring-2 dark:ring-dark-icon-bg-color appearance-none`}
        min={min}
        max={max}
        required={required}
        {...props}
      />
    </div>
  )
}
