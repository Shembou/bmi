import { ICheckbox } from './ICheckbox'

export default function Checkbox({
  value,
  onChange,
  className = '',
  name,
  required = false,
  children
}: ICheckbox) {
  return (
    <div className={`flex items-center space-x-2 ${className} pl-4`}>
      <div className="relative flex flex-shrink-0 w-6 h-6 border rounded bg-white dark:bg-black border-input-border dark:border-dark-icon-bg-color">
        <input
          type="checkbox"
          checked={value}
          onChange={onChange}
          className={`w-full h-full rounded-sm appearance-none transition-colors ${value ? 'bg-icon-border-color dark:bg-dark-icon-bg-color' : 'bg-white dark:bg-dark-icon-border-color'} checkbox hover:cursor-pointer focus-visible:outline-offset-4`}
          name={name}
          required={required}
        />
      </div>
      <label className="text-sm">
        {children ? (
          <>{children}</>
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
