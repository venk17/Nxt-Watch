import {differenceInYears} from 'date-fns'
import {Link} from 'react-router-dom'
import {
  Thumbnail,
  ThumbnailContainer,
  ChannelProfile,
  VideoItem,
  Title,
  VideoDetailsContainer,
  VideoInformationContainer,
  VideoInfo,
} from './styledComponents'
import NxtWatchContext from '../../Context/NxtWatchContext'

const AllVideoSection = props => {
  const {videoItem} = props
  const {title, thumbnailUrl, channel, viewCount, publishedAt, id} = videoItem
  const {name, profileImageUrl} = channel
  const duration = differenceInYears(new Date(), new Date(publishedAt))
  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDark} = value

        return (
          <VideoItem>
            <Link to={`/videos/${id}`} style={{textDecoration: 'none'}}>
              <Thumbnail src={thumbnailUrl} alt="video thumbnail" />
              <ThumbnailContainer>
                <ChannelProfile src={profileImageUrl} alt="channel logo" />
                <VideoDetailsContainer>
                  <Title isDark={isDark}>{title}</Title>
                  <VideoInformationContainer>
                    <VideoInfo>{name}</VideoInfo>
                    <VideoInfo>{`. ${viewCount} Views`}</VideoInfo>
                    <VideoInfo>{`. ${duration} years ago`}</VideoInfo>
                  </VideoInformationContainer>
                </VideoDetailsContainer>
              </ThumbnailContainer>
            </Link>
          </VideoItem>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default AllVideoSection
