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
  textarea = false,
  ...props
}: IInput) {
  return (
    <div className={`${className}`}>
      {label && (
        <label className="block text-sm font-medium" htmlFor={title}>
          <p className="pl-4 text-sm mb-1">{label}</p>
          {textarea ? (
            <textarea
              id={title}
              value={value}
              onChange={onChange}
              placeholder={placeholder}
              name={name}
              className={`w-full px-3 py-input border rounded-2xl focus:outline-none focus:ring-2 dark:bg-dark-icon-border-color dark:border-dark-icon-bg-color dark:ring-dark-icon-bg-color ${error ? 'border-red-500' : 'border-input-border'}`}
              required={required}
              title={title}
              {...(pattern && { pattern })}
              {...props}
            />
          ) : (
            <input
              id={title}
              type={type}
              title={title}
              value={value}
              onChange={onChange}
              placeholder={placeholder}
              name={name}
              className={`w-full px-3 py-input border rounded-full focus:outline-none dark:bg-dark-icon-border-color dark:border-dark-icon-bg-color focus:ring-2 dark:ring-dark-icon-bg-color ${error ? 'border-red-500' : 'border-input-border'}`}
              min={min}
              max={max}
              required={required}
              {...(pattern && { pattern })}
              {...props}
            />
          )}
        </label>
      )}
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  )
}
