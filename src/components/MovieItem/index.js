// Write your code here
import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'

import 'reactjs-popup/dist/index.css'

import './index.css'

const MovieItem = props => {
  const {obj} = props
  const {thumbnailUrl, videoUrl} = obj
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
