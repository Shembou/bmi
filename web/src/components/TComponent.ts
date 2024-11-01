import { ICalculator } from './Calculator/ICalculator'
import { IEnumeratedTiles } from './EnumeratedTiles/IEnumeratedTiles'
import { IHero } from './Hero/IHero'
import { IPicturesSection } from './PicturesSection/IPicturesSection'
import { IProjectShowcase } from './ProjectShowcase/IProjectShowcase'
import { IReferenceSection } from './ReferenceSection/IReferenceSection'
import { ITilesSection } from './TilesSection/ITilesSection'

type TComponentExtension = IHero &
  IEnumeratedTiles &
  IPicturesSection &
  IReferenceSection &
  ITilesSection &
  IProjectShowcase &
  ICalculator

export type TComponent = {
  _type: string
} & TComponentExtension
