import {Link} from 'react-router-dom'

import {Thumbnail, VideoItem, GameInfo, Title} from './styledComponents'
import NxtWatchContext from '../../Context/NxtWatchContext'

const GamingVideoSection = props => {
  const {videoItem} = props
  const {title, thumbnailUrl, viewCount, id} = videoItem

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDark} = value

        return (
          <VideoItem>
            <Link to={`/videos/${id}`} style={{textDecoration: 'none'}}>
              <Thumbnail src={thumbnailUrl} alt="video thumbnail" />
              <Title isDark={isDark}>{title}</Title>
              <GameInfo>{`${viewCount} Watching Worldwide`}</GameInfo>
            </Link>
          </VideoItem>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default GamingVideoSection
