// Write your code here
import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'

import 'reactjs-popup/dist/index.css'

import './index.css'

let obj1 = {
  id: '612271141bf93653809cdccb',
  thumbnailUrl: 'https://assets.ccbp.in/frontend/react-js/war-img.png',
  videoUrl: 'https://www.youtube.com/watch?v=tQ0mzXRk-oM',
  categoryId: 'ACTION',
}

let MovieItem = props => {
  let {obj} = props
  let {thumbnailUrl, videoUrl} = obj
  return (
    <Popup
      modal
      trigger={<img src={thumbnailUrl} alt="thumbnail" className="thumbnail" />}
      className="popup-content"
    >
      {close => (
        <div className="modal-container">
          <button
            type="button"
            className="close-button"
            data-testid="closeButton"
            onClick={() => close()}
          >
            <IoMdClose size={20} color="#231f20" />
          </button>
          <div className="movie-player-container">
            <ReactPlayer url={videoUrl} controls />
          </div>
        </div>
      )}
    </Popup>
  )
}

export default MovieItem
