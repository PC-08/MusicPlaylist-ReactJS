import {Component} from 'react'
import {BiSearch} from 'react-icons/bi'
import TrackItem from '../TrackItem'

import './index.css'

const initialTracksList = [
  {
    id: '3b22e3fd-3d12-4ad1-9e38-90314219c4f4',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-perfect-img.png',
    name: 'Perfect',
    genre: 'Pop',
    duration: '4:04',
  },
  {
    id: '40f97965-ff45-469e-a635-b2ef9f1642ed',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-shape-of-you-img.png',
    name: 'Shape of You',
    genre: 'Divide',
    duration: '4:24',
  },
  {
    id: '782f916b-4056-44ec-a95f-5115c3f84904',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-visiting-hours.png',
    name: 'Visiting Hours',
    genre: 'Folk-Pop',
    duration: '3:49',
  },
  {
    id: 'fcf0dc77-3427-457c-9ee0-91b1dc39fece',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-shivers-img.png',
    name: 'Shivers',
    genre: 'Dance-Pop',
    duration: '3:58',
  },
  {
    id: '9c1bb890-d4d5-4edf-9d95-6959d716b442',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-bad-habits-img.png',
    name: 'Bad Habits',
    genre: 'Dance-Pop',
    duration: '4:01',
  },
  {
    id: '2216db9c-647f-4814-b880-179740e4d748',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-castle-on-the-hill-img.png',
    name: 'Castle on the Hill',
    genre: 'Pop&Rock',
    duration: '4:48',
  },
  {
    id: 'a5e30966-b760-4660-bf08-073135f7d010',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-happier-img.png',
    name: 'Happier',
    genre: 'Pop',
    duration: '3:36',
  },
  {
    id: '2d5c9bc0-b8b0-41c6-aa55-cb3b659d8604',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-photograph-img.png',
    name: 'Photograph',
    genre: 'Folk music',
    duration: '4:26',
  },
  {
    id: 'efd3d621-2c05-4941-acdc-0a1a0786bc53',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-galway-girl-img.png',
    name: 'Galway Girl',
    genre: 'Pop',
    duration: '3:20',
  },
  {
    id: 'e4b8e3b8-7776-4c09-8abc-ba328a8babe9',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-i-dont-care-img.png',
    name: "I Don't Care",
    genre: 'Pop',
    duration: '3:38',
  },
]

class MusicPlaylist extends Component {
  state = {trackList: initialTracksList, userInput: ''}

  onUserInputChange = event => {
    this.setState({userInput: event.target.value})
  }

  onDelReq = id => {
    const {trackList} = this.state

    const filterdList = trackList.filter(eachTrack => eachTrack.id !== id)

    this.setState({trackList: filterdList})
  }

  render() {
    const {trackList, userInput} = this.state
    const filterdList = trackList.filter(eachTrack =>
      eachTrack.name.toLocaleLowerCase().includes(userInput),
    )
    return (
      <>
        <div>
          <div className="top">
            <h1 className="">Ed Sheeran</h1>
            <p className="">Singer</p>
          </div>

          <div className="b-con">
            <div className="bs-con">
              <h1>Songs Playlist</h1>
              <div className="s-con">
                <input
                  value={userInput}
                  onChange={this.onUserInputChange}
                  className="in"
                  type="search"
                  placeholder="Search"
                />
                <BiSearch />
              </div>
            </div>

            {filterdList.length === 0 ? (
              <div className="er">
                <p>No Songs Found</p>
              </div>
            ) : (
              <ul className="ul">
                {filterdList.map(eachTrack => (
                  <TrackItem
                    key={eachTrack.id}
                    eachTrack={eachTrack}
                    onDelReq={this.onDelReq}
                  />
                ))}
              </ul>
            )}
          </div>
        </div>
      </>
    )
  }
}

export default MusicPlaylist
