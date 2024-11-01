import Calculator from './Calculator/Calculator'
import EnumeratedTiles from './EnumeratedTiles/EnumeratedTiles'
import Hero from './Hero/Hero'
import { IComponents } from './IComponents'
import PicturesSection from './PicturesSection/PicturesSection'
import ProjectShowcase from './ProjectShowcase/ProjectShowcase'
import ReferenceSection from './ReferenceSection/ReferenceSection'
import { TComponent } from './TComponent'
import TilesSection from './TilesSection/TilesSection'

export default function Components({ content }: IComponents) {
  return content?.map((component, index) => {
    switch (component._type) {
      case 'hero':
        return <Hero key={index} {...(component as TComponent)} />
      case 'enumeratedTiles':
        return <EnumeratedTiles key={index} {...(component as TComponent)} />
      case 'picturesSection':
        return <PicturesSection key={index} {...(component as TComponent)} />
      case 'referenceSection':
        return <ReferenceSection key={index} {...(component as TComponent)} />
      case 'tilesSection':
        return <TilesSection key={index} {...(component as TComponent)} />
      case 'projectShowcase':
        return <ProjectShowcase key={index} {...(component as TComponent)} />
      case 'calculator':
        return <Calculator key={index} {...(component as TComponent)} />
      default:
        return null
    }
  })
}
