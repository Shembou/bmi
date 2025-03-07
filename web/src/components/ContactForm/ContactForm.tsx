import Img from '../common/Img/Img'
import Form from './Form'
import { IContactForm } from './IContactForm'

export default function ContactForm({ content, email, info, name }: IContactForm) {
  return (
    <section className="grid grid-flow-row justify-between items-start gap-14 xl:grid-flow-col justify-self-center">
      <div className="grid gap-6 ">
        <iframe
          width="813"
          height="343"
          src={`https://www.google.com/maps/embed/v1/place?key=${process.env.GOOGLE_API_TOKEN}&q=Uniwersytecki+Szpital+Kliniczny+Nr+4+w+Lublinie&maptype=satellite`}
          className="rounded-3xl w-full"
          title={'lokalizacja szpitala otwarta w google maps'}
        />
        <h2 className="h4 font-normal">{info.name}</h2>
        <div className="flex gap-4">
          <div className="flex gap-1 items-start">
            <div className="p-1 border rounded-full bg-icon-bg-color border-icon-border-color dark:bg-dark-icon-border-color dark:border-dark-icon-bg-color">
              <Img
                data={info.addressConfiguration.logo}
                height={16}
                width={16}
                className="flex-shrink-0 filter-yellow"
              />
            </div>
            <p>{info.addressConfiguration.address}</p>
          </div>
          <div className="flex gap-1 items-start">
            <div className="p-1 border rounded-full bg-icon-bg-color border-icon-border-color dark:bg-dark-icon-border-color dark:border-dark-icon-bg-color">
              <Img
                data={info.mailConfiguration.logo}
                height={16}
                width={16}
                className="flex-shrink-0 filter-yellow"
              />
            </div>
            <p>{info.mailConfiguration.mail}</p>
          </div>
          <div className="flex gap-1 items-start">
            <div className="p-1 border rounded-full bg-icon-bg-color border-icon-border-color dark:bg-dark-icon-border-color dark:border-dark-icon-bg-color">
              <Img
                data={info.phoneConfiguration.logo}
                height={16}
                width={16}
                className="flex-shrink-0 filter-yellow"
              />
            </div>
            <p>
              {info.phoneConfiguration.phoneNumbers.map((number, index) => {
                return index == 0 ? `${number}` : `, ${number}`
              })}
            </p>
          </div>
        </div>
      </div>
      <Form
        content={content}
        email={email}
        name={name}
        className="grid w-96 gap-7 justify-self-center"
      />
    </section>
  )
}
