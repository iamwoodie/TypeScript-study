import Mock from 'mockjs'
import { movieItemInterface, movieListInterface } from '@/interface/index.ts'

function movieItemData(): movieItemInterface {
  return {
    movieName: Mock.Random.ctitle(2,10),
    movieClassify: Mock.Random.ctitle(2,5),
    moviePicture: Mock.Random.image('200x240'),
    actor: Mock.Random.cname(),
    director: Mock.Random.cname(),
    grade: Mock.Random.float(0, 10, 1, 1)
  }
}

function movieListData(): movieListInterface {
  const dataLen = Mock.Random.integer(1, 20)
  let response: movieListInterface = {
    status: 0,
    data: []
  }
  response.status = 0
  for(let i = 0; i < dataLen; i++) {
    response.data.push(movieItemData())
  }
  return response
}

export default {
  movieListData
}
