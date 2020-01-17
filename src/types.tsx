interface PowerStats {
  intelligence: string
  strength: string
  speed: string
  durability: string
  power: string
  combat: string
}

type Alias = string

interface Biography {
  'full-name': string
  'alter-egos': string
  aliases: Alias[]
  'place-of-birth': string
  'first-appearance': string
  publisher: string
  alignment: string
}

type MeasureUnitImperial = string
type MeasureUnitMetric = string

interface Appearance {
  gender: string
  race: string
  height: [MeasureUnitImperial, MeasureUnitMetric]
  weight: [MeasureUnitImperial, MeasureUnitMetric]
  'eye-color': string
  'hair-color': string
}

interface Work {
  occupation: string
  base: string
}

interface Connections {
  'group-affiliation': string
  relatives: string
}

interface Image {
  url: string
}

export interface Hero {
  id: string
  name: string
  powerstats: PowerStats
  biography: Biography
  appearance: Appearance
  work: Work
  connections: Connections
  image: Image
}

export interface HeroSearchResult {
  response: 'success' | 'error'
  'results-for': string
  results: Hero[]
  error: string
}
