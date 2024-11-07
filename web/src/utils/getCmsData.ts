import type { QueryParams } from '@sanity/client'
import { client } from '../../sanity.config'

export async function getCmsData<QueryResponse>({
  query,
  params = {}
}: {
  query: string
  params?: QueryParams
  isDraftMode?: boolean
}): Promise<QueryResponse> {
  return await client.fetch<QueryResponse>(query, params, {
    token: process.env.SANITY_API_TOKEN,
    perspective: 'published',
    next: {
      revalidate: 60
    }
  })
}
