import { movieItemInterface, movieListInterface } from '@/interface/index.ts'

const api: any = {
  getMovieList: function(): movieListInterface {
    return {
      status: 0,
      data: [{
        movieName: 'string',
        movieClassify: 'string',
        moviePicture: 'string',
        actor: 'string',
        director: 'string',
        grade: 22
      }]
    }
  }
}

export default api
