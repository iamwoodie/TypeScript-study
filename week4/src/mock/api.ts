import { movieItemInterface, movieListInterface } from '@/interface/index.ts'
import mockData from './data.ts'

const api: any = {
  getMovieList(): movieListInterface {
    return mockData.movieListData()
  }
}

export default api
