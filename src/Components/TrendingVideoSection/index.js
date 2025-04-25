import {differenceInYears} from 'date-fns'
import {Link} from 'react-router-dom'

import {
  Thumbnail,
  ThumbnailContainer,
  ChannelProfile,
  VideoItem,
  Title,
  ChannelNameContainer,
  VideoDetailsContainer,
  VideoInformationContainer,
  VideoInfo,
} from './styledComponents'
import NxtWatchContext from '../../Context/NxtWatchContext'

const TrendingVideoSection = props => {
  const {videoItem} = props
  const {title, thumbnailUrl, channel, viewCount, publishedAt, id} = videoItem
  const {name, profileImageUrl} = channel
  const duration = differenceInYears(new Date(), new Date(publishedAt))
  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDark} = value

        return (
          <Link to={`/videos/${id}`} style={{textDecoration: 'none'}}>
            <VideoItem>
              <Thumbnail src={thumbnailUrl} alt="video thumbnail" />
              <ThumbnailContainer>
                <ChannelProfile src={profileImageUrl} alt="channel logo" />
                <VideoDetailsContainer>
                  <Title isDark={isDark}>{title}</Title>
                  <ChannelNameContainer>
                    <VideoInfo>{name}</VideoInfo>
                    <VideoInformationContainer>
                      <VideoInfo>{`. ${viewCount} Views`}</VideoInfo>
                      <VideoInfo>{`. ${duration} years ago`}</VideoInfo>
                    </VideoInformationContainer>
                  </ChannelNameContainer>
                </VideoDetailsContainer>
              </ThumbnailContainer>
            </VideoItem>
          </Link>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default TrendingVideoSection
