import { ICheckbox } from './ICheckbox'

export default function Checkbox({
  label,
  value,
  onChange,
  className = '',
  name,
  required = false
}: ICheckbox) {
  return (
    <div className={`flex items-center space-x-2 ${className} pl-4`}>
      <input
        type="checkbox"
        checked={value}
        onChange={onChange}
        className="h-4 w-4"
        name={name}
        required={required}
      />
      <label className="text-sm">
        {label ? (
          <>{label}</>
        ) : (
          <>
            Akceptuję{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
              href="/polityka-prywatnosci"
            >
              Politykę prywatności
            </a>{' '}
            oraz{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
              href="/rodo"
            >
              RODO
            </a>
          </>
        )}
      </label>
    </div>
  )
}
