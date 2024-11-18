import React, { useRef, useState } from 'react'
import { IImportFile } from './IImportFile'
import { IFormValues } from '@/components/Calculator/Instruction/IFormValues'

export default function ImportFile({
  label,
  type = 'file',
  name,
  className = '',
  accept = 'application/pdf',
  error,
  setError,
  setFormValues
}: IImportFile) {
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([])
  const inputRef = useRef<HTMLInputElement | null>(null)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || [])
    const newFiles = files.map(file => file.name)
    setUploadedFiles(newFiles)

    setFormValues(
      (prevValues: IFormValues) =>
        ({ ...prevValues, [event.target.name]: event.target.files }) as IFormValues
    )

    if (newFiles.length > 0) {
      setError(null)
    }
  }

  const removeFile = (fileName: string) => {
    setUploadedFiles(prevFiles => prevFiles.filter(file => file !== fileName))

    if (inputRef.current) {
      inputRef.current.value = ''
    }
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if ((event.key === 'Enter' || event.key === ' ') && event.target === event.currentTarget) {
      event.preventDefault()
      inputRef.current?.click()
    }
  }

  const trimFileName = (filename: string) => {
    if (filename.endsWith('.pdf')) {
      const baseName = filename.slice(0, -4)
      const trimmedBaseName = baseName.length > 20 ? baseName.slice(0, 20) : baseName
      return `${trimmedBaseName}.pdf`
    }
    return filename
  }

  return (
    <>
      <div
        className={`relative rounded-full border border-dashed border-progressbar-inactive py-3 px-8 bg-input-bg ${className} dark:bg-dark-icon-bg-color dark:border-dark-icon-bg-color`}
        tabIndex={0}
        onKeyDown={handleKeyDown}
      >
        {uploadedFiles.length === 0 ? (
          <label htmlFor={name} className="flex items-center cursor-pointer justify-self-center">
            <span className="flex items-center gap-2 w-full z-20 dark:text-black">
              Dołącz plik <UploadIcon />
            </span>
          </label>
        ) : (
          <div className="flex flex-wrap">
            {uploadedFiles.map((fileName, index) => (
              <div key={index} className="flex items-center mr-2 z-20 dark:text-black">
                <span>{trimFileName(fileName)}</span>
                <button
                  type="button"
                  className="ml-2 text-red-500 hover:underline focus-visible:outline-black w-6"
                  onClick={() => removeFile(fileName)}
                  aria-label={`Remove ${fileName}`}
                >
                  &times;
                </button>
              </div>
            ))}
          </div>
        )}
        <input
          type={type}
          name={name}
          onChange={handleFileChange}
          accept={accept}
          className="hidden"
          id={name}
          multiple
          ref={inputRef}
        />
      </div>
      {error && <p className="-mt-8 text-lg text-red">{error}</p>}
      {label && <label className="text-sm -mt-4">{label}</label>}
    </>
  )
}
const UploadIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" fill="none" viewBox="0 0 18 19">
    <g
      stroke="#164346"
      strokeLinecap="round"
      strokeLinejoin="round"
      clipPath="url(#clip0_5562_5287)"
      className="dark:stroke-dark-icon-border-color"
    >
      <path d="M3 13.109v1.5a1.5 1.5 0 0 0 1.5 1.5h9a1.5 1.5 0 0 0 1.5-1.5v-1.5M5.25 7.109 9 3.359l3.75 3.75M9 3.359v9"></path>
    </g>
    <defs>
      <clipPath id="clip0_5562_5287">
        <path fill="#fff" d="M0 .359h18v18H0z"></path>
      </clipPath>
    </defs>
  </svg>
)
