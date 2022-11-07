interface IResult {
  id: number
  name: string
  air_date: string
  episode: string
  characters: string[]
  url: string
  created: string
}

interface IResults<IResult> {
  info: {
    count: number
    pages: number
    next: string | null
    prev: string | null
  },
  results: IResult[]
}

export {IResults, IResult}
