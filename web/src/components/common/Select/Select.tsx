import { ISelect } from './ISelect'

export default function Select({
  label,
  value,
  onChange,
  className = '',
  error = '',
  name,
  options
}: ISelect) {
  return (
    <div>
      {label && <label className="block mb-1 text-sm font-medium pl-4">{label}</label>}
      <div
        className={`w-full px-3 py-2 border rounded-full focus:outline-none focus:ring-2 ${error ? 'border-red-500' : 'border-input-border'} ${className}`}
      >
        <select value={value} onChange={onChange} className={`w-full`} name={name}>
          {options.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
      </div>
    </div>
  )
}
