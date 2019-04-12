export interface movieItemInterface {
  movieName: string;
  movieClassify: string;
  moviePicture: string;
  actor: string;
  director: string;
  grade: number;
}

export interface movieListInterface {
  status: number;
  data: Array<movieItemInterface>;
}
