import { IRadioGroup } from './IRadioGroup'

export default function RadioGroup({
  label,
  radioValues,
  selectedValue,
  onChange,
  className = ''
}: IRadioGroup) {
  return (
    <div className={`flex flex-col ${className} pl-4`}>
      {label && <label className="block mb-1 text-sm font-medium">{label}</label>}
      <div className="flex gap-16">
        {radioValues.map(({ name, value }, index) => (
          <label key={index} className="inline-flex items-center cursor-pointer">
            <input
              type="radio"
              name={name}
              value={value}
              onChange={() => onChange(value)}
              checked={selectedValue === value}
            />
            <span className="ml-2 text-sm font-medium">{name}</span>
          </label>
        ))}
      </div>
    </div>
  )
}
