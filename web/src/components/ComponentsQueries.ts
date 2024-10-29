import { GetEnumeratedTilesData } from './EnumeratedTiles/EnumeratedTilesQuery'
import { GetHeroData } from './Hero/HeroQuery'
import { GetPictureSectionData } from './PicturesSection/PicturesSectionQuery'
import { GetProjectShowcaseData } from './ProjectShowcase/ProjectShowcaseQuery'
import { GetReferenceSectionData } from './ReferenceSection/ReferenceSectionQuery'
import { GetTilesSectionData } from './TilesSection/TilesSectionQuery'

export const GetComponentData = `
    content[] {
        _type,
        ${GetHeroData}
        ${GetEnumeratedTilesData}
        ${GetPictureSectionData}
        ${GetReferenceSectionData}
        ${GetTilesSectionData}
        ${GetProjectShowcaseData}
    }
`
