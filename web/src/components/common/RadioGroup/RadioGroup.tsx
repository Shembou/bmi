import Radio from '../Radio/Radio'
import { IRadioGroup } from './IRadioGroup'

export default function RadioGroup({
  label,
  radioValues,
  selectedValue,
  onChange,
  className = '',
  spanClassName = ''
}: IRadioGroup) {
  return (
    <div className={`flex flex-col ${className} `}>
      {label && <label className="block mb-1 text-sm font-medium pl-4">{label}</label>}
      <div className="flex flex-wrap gap-x-12 gap-y-3 dark:bg-black pl-2">
        {radioValues.map((radio, index) => (
          <label key={index} className="inline-flex items-center cursor-pointer">
            <Radio selectedValue={selectedValue} onChange={onChange} radio={radio} />
            <span className={`ml-2 text-sm font-medium ${spanClassName}`}>
              {radio.displayValue ? radio.displayValue : radio.name}
            </span>
          </label>
        ))}
      </div>
    </div>
  )
}
