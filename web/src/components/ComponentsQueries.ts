import { GetCalculatorData } from './Calculator/CalculatorQuery'
import { GetContactFormData } from './ContactForm/ContactFormQuery'
import { GetContactInfoData } from './ContactInfo/ContactInfoQueries'
import { GetEnumeratedTilesData } from './EnumeratedTiles/EnumeratedTilesQuery'
import { GetHeroData } from './Hero/HeroQuery'
import { GetNewsSectionData } from './NewsSection/NewsSectionQueries'
import { GetPictureSectionData } from './PicturesSection/PicturesSectionQuery'
import { GetProjectShowcaseData } from './ProjectShowcase/ProjectShowcaseQuery'
import { GetReferenceSectionData } from './ReferenceSection/ReferenceSectionQuery'
import { GetSimpleHeroData } from './SimpleHero/SimpleHeroQuery'
import { GetTilesSectionData } from './TilesSection/TilesSectionQuery'
import { GetVideoSectionData } from './VideoSection/VideoSectionQueries'

export const GetComponentData = `
    content[] {
        _type,
        ${GetHeroData}
        ${GetEnumeratedTilesData}
        ${GetPictureSectionData}
        ${GetReferenceSectionData}
        ${GetTilesSectionData}
        ${GetProjectShowcaseData}
        ${GetCalculatorData}
        ${GetSimpleHeroData}
        ${GetContactFormData}
        ${GetContactInfoData}
        ${GetVideoSectionData}
        ${GetNewsSectionData}
    }
`
