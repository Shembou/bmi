import { createClient, SanityClient } from 'next-sanity'

export const client: SanityClient = createClient({
  projectId: 'apc6sl76',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false
})
