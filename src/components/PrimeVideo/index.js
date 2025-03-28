// Write your code here
import MoviesSlider from '../MoviesSlider'

import './index.css'

let actionMovie = 'ACTION'
let comedyMovie = 'COMEDY'

let PrimeVideo = props => {
  let {moviesList} = props
  let actionMoviesList = moviesList.filter(
    movie => movie.categoryId === actionMovie,
  )
  let comedyMoviesList = moviesList.filter(
    movie => movie.categoryId === comedyMovie,
  )
  return (
    <div className="prime-video-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="image"
      />
      <div className="movies-container">
        <h1 className="movies-heading">Action Movies</h1>
        <MoviesSlider moviesList={actionMoviesList} />
        <h1 className="movies-heading">Comedy Movies</h1>
        <MoviesSlider moviesList={comedyMoviesList} />
      </div>
    </div>
  )
}

export default PrimeVideo
