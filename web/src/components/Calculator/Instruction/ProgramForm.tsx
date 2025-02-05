import Button from '@/components/common/Button/Button'
import Checkbox from '@/components/common/Checkbox/Checkbox'
import Input from '@/components/common/Input/Input'
import { IFormValues } from './IFormValues'
import { Dispatch, SetStateAction, useState } from 'react'
import ImportFile from '@/components/common/ImportFile/ImportFile'
import { toast } from 'react-toastify'
import DateInput from '@/components/common/DateInput/DateInput'
import RadioGroup from '@/components/common/RadioGroup/RadioGroup'
import { TStatus } from './TStatus'

export default function ProgramForm({
  formValues,
  setFormValues,
  statuteLink,
  enclosureLink
}: {
  formValues: IFormValues
  setFormValues: Dispatch<SetStateAction<IFormValues>>
  statuteLink: string
  enclosureLink: string
}) {
  const [error, setError] = useState<string | null>(null)

  const educationRadioValues = [
    { name: 'średnie I stopnia lub niższe (ISCED 0-2)', value: 'ISCED02' },
    { name: 'ponadgimnazjalne (ISCED 3) lub policealne (ISCED4)', value: 'ISCED34' },
    { name: 'wyższe (ISCED 5-8)', value: 'ISCED48' }
  ]

  const foreignOriginRadioValues = [
    { name: 'foreignOriginTrue', value: 'true', displayValue: 'Tak' },
    { name: 'foreignOriginFalse', value: 'false', displayValue: 'Nie' }
  ]

  const foreignCountryRadioValues = [
    { name: 'foreignCountryTrue', value: 'true', displayValue: 'Tak' },
    { name: 'foreignCountryFalse', value: 'false', displayValue: 'Nie' }
  ]

  const nationalMinorityRadioValues = [
    { name: 'nationalMinorityTrue', value: 'true', displayValue: 'Tak' },
    { name: 'nationalMinorityFalse', value: 'false', displayValue: 'Nie' },
    { name: 'nationalMinorityUnknown', value: 'unknown', displayValue: 'Odmawiam podania danych' }
  ]

  const isHomelessRadioValues = [
    { name: 'isHomelessTrue', displayValue: 'Tak', value: 'true' },
    { name: 'isHomelessFalse', displayValue: 'Nie', value: 'false' }
  ]

  const isDisabledRadioValues = [
    { name: 'isDisabledTrue', displayValue: 'Tak', value: 'true' },
    { name: 'isDisabledFalse', displayValue: 'Nie', value: 'false' },
    { name: 'isDisabledUknown', displayValue: 'Odmawiam podania danych', value: 'unknown' }
  ]

  const areaOfResidenceRadioValues = [
    { name: 'miejski (tereny gęsto zaludnione)', value: 'DEGURBA1' },
    { name: 'miejsko-wiejski (tereny pośrednie)', value: 'DEGURBA2' },
    { name: 'wiejski (tereny słabo zaludnione)', value: 'DEGURBA3' }
  ]

  const statusValues = [
    { name: 'osoba prowadząca działalność na własny rachunek', value: 'selfEmployed' },
    {
      name: 'osoba pracująca w administracji rządowej',
      value: 'publicGovernmentAdministrationWorker'
    },
    {
      name: 'osoba pracująca w administracji samorządowej',
      value: 'localGovernmentAdministrationWorker'
    },
    {
      name: 'osoba pracująca w organizacji pozarządowej',
      value: 'nonGovernmentalOrganizationWorker'
    },
    {
      name: 'osoba pracująca w MMŚP (mikro, małe, średnie przedsiębiorstwa)',
      value: 'MSMEWorker'
    },
    {
      name: 'osoba pracująca w dużym przedsiębiorstwie',
      value: 'largeEnterpriseWorker'
    },
    {
      name: 'osoba pracująca w podmiocie wykonującym działalność leczniczą',
      value: 'medicalActivitiesWorker'
    },
    {
      name: 'osoba pracująca w szkole lub w placówce systemu oświaty (kadra pedagogiczna)',
      value: 'schoolWorkerTeachingStaff'
    },
    {
      name: 'osoba pracująca w szkole lub w placówce systemu oświaty (kadra niepedagogiczna)',
      value: 'schoolWorkerNonTeachingStaff'
    },
    {
      name: 'osoba pracująca w szkole lub w placówce systemu oświaty (kadra zarządzająca)',
      value: 'schoolWorkerAdministrationStaff'
    },
    {
      name: 'osoba pracująca na uczelni',
      value: 'universityWorker'
    },
    {
      name: 'osoba pracująca w instytucie naukowym',
      value: 'scientificInstituteWorker'
    },
    {
      name: 'osoba pracująca w instytucie badawczym',
      value: 'researchInstituteWorker'
    },
    {
      name: 'osoba pracująca w instytucie działającym w ramach Sieci Badawczej Łukasiewicz',
      value: 'ŁukasiewiczResearchNetworkWorker'
    },
    {
      name: 'osoba pracująca w międzynarodowym instytucie naukowym',
      value: 'internationalInstituteWorker'
    },
    {
      name: 'osoba pracująca dla federacji podmiotów systemu szkolnictwa wyższego i nauki',
      value: 'federationOfHigherEducationAndScienceSystemEntitiesWorker'
    },
    {
      name: 'osoba pracująca na rzecz państwowej osoby prawnej',
      value: 'stateLegalEntityWorker'
    },
    {
      name: 'inne',
      value: 'other'
    }
  ]

  const shiftChangesValues = [
    { name: 'shiftChangesTrue', displayValue: 'Tak', value: 'true' },
    { name: 'shiftChangesFalse', displayValue: 'Nie', value: 'false' }
  ]

  const handleInputChange = ({
    target: { name, value }
  }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormValues(prevValues => ({ ...prevValues, [name]: value }))
  }

  const handleCheckboxChange = ({
    target: { name, checked }
  }: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues(prevValues => ({ ...prevValues, [name]: checked }))
  }

  const handleEducationRadioChange = (value: string) => {
    setFormValues(prevValues => ({ ...prevValues, education: value }))
  }

  const handleForeignOriginChange = (value: string) => {
    setFormValues(prevValues => ({ ...prevValues, foreignOrigin: value }))
  }

  const handleForeignCountryChange = (value: string) => {
    setFormValues(prevValues => ({ ...prevValues, foreignCountry: value }))
  }

  const handleNationalMinorityChange = (value: string) => {
    setFormValues(prevValues => ({ ...prevValues, nationalMinority: value }))
  }

  const handleIsHomelessChange = (value: string) => {
    setFormValues(prevValues => ({ ...prevValues, isHomeless: value }))
  }

  const handleIsDisabledChange = (value: string) => {
    setFormValues(prevValues => ({ ...prevValues, isDisabled: value }))
  }

  const handleAreaOfResidenceChange = (value: 'DEGURBA1' | 'DEGURBA2' | 'DEGURBA3') => {
    setFormValues(prevValues => ({ ...prevValues, areaOfResidence: value }))
  }
  const handleStatusChange = (value: TStatus) => {
    setFormValues(prevValues => ({ ...prevValues, status: value }))
  }

  const handleShiftChange = (value: string) => {
    setFormValues(prevValues => ({ ...prevValues, shiftChanges: value }))
  }

  const convertToBase64 = (file: File) => {
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result as string)
      reader.onerror = error => reject(error)
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // if (formValues.files.length == 0 || formValues.files[0] == '') {
    //   setError('Wymagany plik')
    //   return
    // }
    try {
      if (formValues.files[0] != '') {
        if (typeof formValues.files != 'string')
          formValues.files = (await convertToBase64(
            formValues.files[0] as unknown as File
          )) as unknown as string[]
      }
      const response = await fetch('/api/kalkulator', {
        method: 'POST',
        headers: { 'Content-type': 'application-json' },
        body: JSON.stringify(formValues)
      })
      if (!response.ok) {
        if (response.status == 400) toast.warning('Jesteś już uczestnikiem programu.')
        if (response.status == 500) toast.error('Błąd serwera')
      } else {
        toast.success('Zapisałeś się do programu')
      }
    } catch (error) {
      console.error((error as Error).message)
    }
  }

  return (
    <>
      <form
        className="flex flex-row justify-between flex-wrap gap-y-10 gap-x-2 894:gap-x-14 1210:gap-x-2"
        onSubmit={handleSubmit}
      >
        <div className="gap-6 grid 894:max-w-80 max-w-130 place-self-start">
          <h4>Dane uczestnika projektu</h4>
          <Input
            label="Imię i nazwisko"
            type="text"
            value={formValues['name'] ?? ''}
            onChange={e => handleInputChange(e)}
            name="name"
            required
          />
          <Input
            label="Pesel"
            type="text"
            name="pesel"
            value={formValues['pesel'] ?? ''}
            onChange={e => handleInputChange(e)}
            pattern="[0-9]{11}"
            title="Pesel musi mieć 11 cyfr"
            required
          />
          <DateInput
            label="Data urodzenia"
            value={formValues['dateOfBirth'] ?? ''}
            name="dateOfBirth"
            onChange={e => handleInputChange(e)}
            required
          />
          <Input
            label="Miejsce urodzenia"
            type="text"
            name="placeOfBirth"
            value={formValues['placeOfBirth'] ?? ''}
            onChange={e => handleInputChange(e)}
            required
          />
          <RadioGroup
            label="Wykształcenie"
            onChange={e => handleEducationRadioChange(e)}
            radioValues={educationRadioValues}
            selectedValue={formValues['education'] ?? ''}
          />
          <div className="grid gap-3">
            <span className="text-xl">status uczestnika/uczestniczki</span>
            <p>w chwili przystąpienia do projektu</p>
          </div>
          <RadioGroup
            label="Osoba obcego pochodzenia"
            onChange={e => handleForeignOriginChange(e)}
            radioValues={foreignOriginRadioValues}
            selectedValue={formValues['foreignOrigin'] ?? ''}
          />
          <RadioGroup
            label="Osoba państwa trzeciego"
            onChange={e => handleForeignCountryChange(e)}
            radioValues={foreignCountryRadioValues}
            selectedValue={formValues['foreignCountry'] ?? ''}
          />
          <RadioGroup
            label="Osoba należąca do mniejszości narodowej lub etnicznej (w tym społeczności marginalizowane)"
            onChange={e => handleNationalMinorityChange(e)}
            radioValues={nationalMinorityRadioValues}
            selectedValue={formValues['nationalMinority'] ?? ''}
          />
          <RadioGroup
            label="Osoba bezdomna lub dotknięta wykluczeniem z dostępu do mieszkań"
            onChange={e => handleIsHomelessChange(e)}
            radioValues={isHomelessRadioValues}
            selectedValue={formValues['isHomeless'] ?? ''}
          />
          <RadioGroup
            label="Osoba z niepełnosprawnościami"
            onChange={e => handleIsDisabledChange(e)}
            radioValues={isDisabledRadioValues}
            selectedValue={formValues['isDisabled'] ?? ''}
          />
        </div>
        <div className="w-2px bg-form-border-color mx-4 hidden 894:inline" />
        <div className="gap-6 grid 894:max-w-80 max-w-130 flex-auto place-self-start">
          <h4>Dane kontaktowe</h4>
          <Input
            label="Numer telefonu"
            type="tel"
            value={formValues['phone'] ?? ''}
            name="phone"
            onChange={e => handleInputChange(e)}
            pattern="[0-9]{9}|[0-9]{3}-[0-9]{3}-[0-9]{3}"
            title="podaj poprawny numer telefonu np.111111111 lub 111-111-111"
            required
          />
          <Input
            label="E-mail"
            type="email"
            name="email"
            value={formValues['email'] ?? ''}
            onChange={e => handleInputChange(e)}
            required
          />
          <Input
            label="Województwo"
            type="text"
            name="voivodeship"
            value={formValues['voivodeship'] ?? ''}
            onChange={e => handleInputChange(e)}
            required
          />
          <Input
            label="Powiat"
            type="text"
            name="district"
            value={formValues['district'] ?? ''}
            onChange={e => handleInputChange(e)}
            required
          />
          <Input
            label="Gmina"
            type="text"
            name="commune"
            value={formValues['commune'] ?? ''}
            onChange={e => handleInputChange(e)}
            required
          />
          <div className="grid grid-flow-col gap-4 grid-cols-12">
            <Input
              label="Miejscowość"
              type="text"
              name="town"
              value={formValues['town'] ?? ''}
              onChange={e => handleInputChange(e)}
              required
              className="col-span-7"
            />
            <Input
              label="Kod pocztowy"
              type="text"
              name="postalCode"
              value={formValues['postalCode'] ?? ''}
              pattern="[0-9]{2}-[0-9]{3}"
              onChange={e => handleInputChange(e)}
              required
              className="col-span-5"
            />
          </div>
          <Input
            label="Ulica"
            type="text"
            name="streetName"
            value={formValues['streetName'] ?? ''}
            onChange={e => handleInputChange(e)}
            required
          />
          <div className="grid grid-flow-col gap-4 grid-cols-12 place-self-start">
            <Input
              label="Nr domu"
              type="text"
              name="houseNumber"
              value={formValues['houseNumber'] ?? ''}
              onChange={e => handleInputChange(e)}
              required
              className="col-span-6"
            />
            <Input
              label="Nr lokalu"
              type="text"
              name="localNumber"
              value={formValues['localNumber'] ?? ''}
              onChange={e => handleInputChange(e)}
              className="col-span-6"
            />
          </div>
          <RadioGroup
            label="Obszar"
            onChange={e => handleAreaOfResidenceChange(e as 'DEGURBA1' | 'DEGURBA2' | 'DEGURBA3')}
            radioValues={areaOfResidenceRadioValues}
            selectedValue={formValues['areaOfResidence'] ?? ''}
            spanClassName="text-sm"
          />
        </div>
        <div className="w-2px bg-form-border-color mx-4 hidden 1210:inline" />
        <div className="gap-6 grid 894:max-w-80 max-w-130">
          <h4>Szczegóły wsparcia</h4>
          <span>Status osoby na rynku pracy w chwili przystąpienia do projektu</span>
          <RadioGroup
            onChange={e => handleStatusChange(e as TStatus)}
            radioValues={statusValues}
            selectedValue={formValues['status'] ?? ''}
          />
          <RadioGroup
            label="Praca zmianowa"
            onChange={e => handleShiftChange(e)}
            radioValues={shiftChangesValues}
            selectedValue={formValues['shiftChanges'] ?? ''}
          />
          <Checkbox
            name="statute"
            onChange={e => handleCheckboxChange(e)}
            value={formValues['statute'] ?? false}
            required
          >
            <>
              Akceptuję{' '}
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
                href={statuteLink}
              >
                Regulamin
              </a>
            </>
          </Checkbox>
          <Checkbox
            name="rodo"
            onChange={e => handleCheckboxChange(e)}
            value={formValues['rodo'] ?? false}
            required
          >
            <>
              Akceptuję{' '}
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
                href={enclosureLink}
              >
                Klauzulę informacyjną
              </a>
            </>
          </Checkbox>
          <ImportFile
            label="Do dokumentów rekrutacyjnych wymagane jest zaświadczenie o zatrudnieniu na dowolnym wzorze"
            name="files"
            error={error}
            setError={setError}
            setFormValues={setFormValues}
          />
          <Button content="Wyślij zgłoszenie" color="primary" className="w-full sm:px-0" />
        </div>
      </form>
    </>
  )
}
