import Calculator from './Calculator/Calculator'
import ContactForm from './ContactFrom/ContactForm'
import ContactInfo from './ContactInfo/ContactInfo'
import EnumeratedTiles from './EnumeratedTiles/EnumeratedTiles'
import Hero from './Hero/Hero'
import { IComponents } from './IComponents'
import PicturesSection from './PicturesSection/PicturesSection'
import ProjectShowcase from './ProjectShowcase/ProjectShowcase'
import ReferenceSection from './ReferenceSection/ReferenceSection'
import SimpleHero from './SimpleHero/SimpleHero'
import { TComponent } from './TComponent'
import TilesSection from './TilesSection/TilesSection'
import VideoSection from './VideoSection/VideoSection'

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
      case 'simpleHero':
        return <SimpleHero key={index} {...(component as TComponent)} />
      case 'contactForm':
        return <ContactForm key={index} {...(component as TComponent)} />
      case 'contactInfo':
        return <ContactInfo key={index} {...(component as TComponent)} />
      case 'videoSection':
        return <VideoSection key={index} {...(component as TComponent)} />
      default:
        return null
    }
  })
}
