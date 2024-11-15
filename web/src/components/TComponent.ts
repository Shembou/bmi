import { ICalculator } from './Calculator/ICalculator'
import { IContactForm } from './ContactFrom/IContactForm'
import { IContactInfo } from './ContactInfo/IContactInfo'
import { IEnumeratedTiles } from './EnumeratedTiles/IEnumeratedTiles'
import { IHero } from './Hero/IHero'
import { IPicturesSection } from './PicturesSection/IPicturesSection'
import { IProjectShowcase } from './ProjectShowcase/IProjectShowcase'
import { IReferenceSection } from './ReferenceSection/IReferenceSection'
import { ITilesSection } from './TilesSection/ITilesSection'
import { IVideoSection } from './VideoSection/IVideoSection'
import { INewsSection } from './NewsSection/INewsSection'

type TComponentExtension = IHero &
  IEnumeratedTiles &
  IPicturesSection &
  IReferenceSection &
  ITilesSection &
  IProjectShowcase &
  ICalculator &
  IContactForm &
  IContactInfo &
  IVideoSection &
  INewsSection
export type TComponent = {
  _type: string
} & TComponentExtension
