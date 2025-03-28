// Write your code here
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import MovieItem from '../MovieItem'

let MoviesSlider = props => {
  let {moviesList} = props
  const settings = {
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
  }

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {moviesList.map(obj => {
          return <MovieItem key={obj.id} obj={obj} />
        })}
      </Slider>
    </div>
  )
}

export default MoviesSlider
