import { IInput } from './IInput'

export default function Input({
  label,
  type = 'text',
  value,
  name,
  onChange,
  placeholder = '',
  className = '',
  error = '',
  pattern = undefined,
  title = undefined,
  min = undefined,
  max = undefined,
  required = false,
  ...props
}: IInput) {
  return (
    <div className={`${className}`}>
      {label && <label className="block mb-1 text-sm font-medium pl-4">{label}</label>}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        name={name}
        className={`w-full px-3 py-2 border rounded-full focus:outline-none focus:ring-2 ${error ? 'border-red-500' : 'border-input-border'} ${className}`}
        title={title}
        min={min}
        max={max}
        required={required}
        {...(pattern && { pattern })}
        {...props}
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  )
}
