import {RiDeleteBin7Line} from 'react-icons/ri'
import './index.css'

const TrackItem = props => {
  const {eachTrack, onDelReq} = props
  const {duration, name, genre, imageUrl, id} = eachTrack

  const onClickdelBtn = () => {
    onDelReq(id)
  }

  return (
    <li className="li">
      <div className="li-2">
        <img className="img" src={imageUrl} alt="track" />
        <div>
          <p className="p1">{name}</p>
          <p className="p2">{genre}</p>
        </div>
      </div>
      <p>{duration}</p>
      <button
        onClick={onClickdelBtn}
        className="btn"
        data-testid="delete"
        type="button"
      >
        <RiDeleteBin7Line /> Delete
      </button>
    </li>
  )
}

export default TrackItem
