import { ISelect } from './ISelect'

export default function Select({
  label,
  value,
  onChange,
  className = '',
  error = '',
  name,
  options,
  id
}: ISelect) {
  return (
    <div>
      {label && (
        <label className="block mb-1 text-sm font-medium pl-4" htmlFor={id}>
          {label}
        </label>
      )}
      <div
        className={`dark:bg-dark-icon-border-color dark:border-dark-icon-bg-color dark: w-full px-3 py-2 border rounded-full focus:outline-none focus:ring-2 ${error ? 'border-red-500' : 'border-input-border'} ${className}`}
      >
        <select
          id={id}
          value={value}
          onChange={onChange}
          className={`w-full dark:bg-dark-icon-border-color`}
          name={name}
        >
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
