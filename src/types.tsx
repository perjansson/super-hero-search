// TODO: Type
export interface Hero {
  id: string
  name: string
  powerstats: unknown
  biography: unknown
  appearance: unknown
  work: unknown
  connections: unknown
  image: unknown
}

export interface HeroSearchResult {
  response: 'success'
  'results-for': string
  results: Hero[]
}
