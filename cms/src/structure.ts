import {type StructureBuilder} from 'sanity/structure'
import {singlePages, multiplePages, baseConfiguration} from '../schemaTypes'

const createSinglePage = (S: StructureBuilder, page: any) => {
  const {title, name, icon} = page
  return S.listItem()
    .title(title)
    .id(name)
    .icon(icon)
    .child(S.document().schemaType(name).title(title).documentId(name))
}

export const structure = (S: StructureBuilder) =>
  S.list()
    .title('Podstrony')
    .items([
      ...baseConfiguration.map((page) => createSinglePage(S, page as any)),
      S.divider(),
      ...singlePages.map((page) => createSinglePage(S, page as any)),
      S.divider(),
      ...multiplePages.map((page: any) => S.documentTypeListItem(page.name)),
      S.divider()
    ])
