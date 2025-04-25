import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {differenceInYears} from 'date-fns'
import {BiLike, BiDislike} from 'react-icons/bi'
import {RiPlayListAddFill} from 'react-icons/ri'
import ReactPlayer from 'react-player'

import {Component} from 'react'
import NxtWatchContext from '../../Context/NxtWatchContext'

import Header from '../Header'
import SideBar from '../SideBar'

import {
  HomeBackground,
  HomeContainer,
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailureDiscription,
  RetryButton,
  VideoContainer,
  VideoItemDetails,
  ThumbnailContainer,
  ChannelProfile,
  Title,
  VideoDetailsContainer,
  VideoInformationContainer,
  VideoInfo,
  LikeButton,
  DisLikeButton,
  SaveButton,
  CountsAndButtons,
} from './styledComponents'

const status = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  inProgress: 'IN_PROGRESS',
  failure: 'FAILURE',
}

class VideoItem extends Component {
  state = {
    videoDetails: {},
    onStatus: status.initial,
    isLiked: false,
    isDisLiked: false,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    this.setState({onStatus: status.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params

    console.log(id)
    try {
      const apiUrl = `https://apis.ccbp.in/videos/${id}`
      const jwtToken = Cookies.get('jwt_token')
      // ('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaHVsIiwicm9sZSI6IlBSSU1FX1VTRVIiLCJpYXQiOjE2MjMwNjU1MzJ9.D13s5wN3Oh59aa_qtXMo3Ec4wojOx0EZh8Xr5C5sRkU')
      // Cookies.get('jwt_token')
      const options = {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
        method: 'GET',
      }

      const response = await fetch(apiUrl, options)
      if (response.ok === true) {
        const data = await response.json()

        const updatedData = {
          id: data.video_details.id,
          thumbnailUrl: data.video_details.thumbnail_url,
          title: data.video_details.title,
          channel: {
            name: data.video_details.channel.name,
            profileImageUrl: data.video_details.channel.profile_image_url,
            subscriberCount: data.video_details.channel.subscriber_count,
          },
          viewCount: data.video_details.view_count,
          publishedAt: data.video_details.published_at,
          description: data.video_details.description,
          videoUrl: data.video_details.video_url,
        }
        console.log(updatedData)
        this.setState({videoDetails: updatedData, onStatus: status.success})
      } else {
        this.setState({onStatus: status.failure})
      }
    } catch (errMsg) {
      console.log(errMsg)
    }
  }

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDark, onSaveVideo, savedVideos} = value

          const {isLiked, isDisLiked, videoDetails} = this.state

          console.log(savedVideos)
          const handleLike = () => {
            this.setState(prevState => ({
              isLiked: !prevState.isLiked,
              isDisLiked: false,
            }))
          }

          const handleDisLike = () => {
            this.setState(prevState => ({
              isDisLiked: !prevState.isDisLiked,
              isLiked: false,
            }))
          }

          const handleSave = () => {
            onSaveVideo(videoDetails)
          }

          const isSaved = savedVideos.some(
            video => video.id === videoDetails.id,
          )

          const isLoader = () => (
            <FailureContainer className="loader-container" data-testid="loader">
              <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
            </FailureContainer>
          )

          const failureView = () => (
            <FailureContainer>
              <FailureImage
                src={
                  isDark
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
                }
                alt="failure"
              />
              <FailureHeading isDark={isDark}>
                Oops! Somethig Went Wrong
              </FailureHeading>
              <FailureDiscription isDark={isDark}>
                We are having some trouble to complete. Your request. Please try
                again.
              </FailureDiscription>
              <RetryButton type="button" onClick={() => this.getVideoList()}>
                Retry
              </RetryButton>
            </FailureContainer>
          )

          const onSuccessView = () => {
            const {
              title,
              channel,
              viewCount,
              publishedAt,
              description,
              videoUrl,
            } = videoDetails

            const {name, profileImageUrl, subscriberCount} = channel
            const duration = differenceInYears(
              new Date(),
              new Date(publishedAt),
            )
            return (
              <VideoItemDetails>
                <VideoContainer>
                  <ReactPlayer width="100%" height="100%" url={videoUrl} />
                </VideoContainer>

                <ThumbnailContainer>
                  <VideoDetailsContainer>
                    <Title isDark={isDark}>{title}</Title>
                    <CountsAndButtons>
                      <VideoInformationContainer>
                        <VideoInfo
                          isDark={isDark}
                        >{`${viewCount} Views`}</VideoInfo>
                        <VideoInfo
                          isDark={isDark}
                        >{`. ${duration} years ago`}</VideoInfo>
                      </VideoInformationContainer>
                      <VideoInformationContainer>
                        <LikeButton
                          type="button"
                          onClick={handleLike}
                          isLiked={isLiked}
                          isDark={isDark}
                        >
                          <BiLike style={{marginRight: '5px'}} />
                          Like
                        </LikeButton>
                        <DisLikeButton
                          type="button"
                          onClick={handleDisLike}
                          isDisLiked={isDisLiked}
                        >
                          <BiDislike style={{marginRight: '5px'}} />
                          DisLike
                        </DisLikeButton>
                        <SaveButton
                          type="button"
                          onClick={handleSave}
                          isSaved={isSaved}
                        >
                          <RiPlayListAddFill style={{marginRight: '5px'}} />
                          {isSaved ? 'Saved' : 'save'}
                        </SaveButton>
                      </VideoInformationContainer>
                    </CountsAndButtons>
                  </VideoDetailsContainer>
                  <hr
                    style={{
                      color: '909090',
                      width: '100%',
                      marginTop: '10px',
                      marginBottom: '10px',
                    }}
                  />
                  <VideoInformationContainer>
                    <ChannelProfile src={profileImageUrl} alt="channel logo" />
                    <ThumbnailContainer>
                      <Title isDark={isDark}>{name}</Title>
                      <VideoInfo
                        isDark={isDark}
                      >{`${subscriberCount} subscribers`}</VideoInfo>
                    </ThumbnailContainer>
                  </VideoInformationContainer>
                  <VideoInfo
                    isDark={isDark}
                  >{`${description} subscribers`}</VideoInfo>
                </ThumbnailContainer>
              </VideoItemDetails>
            )
          }

          const onSwitchStatus = () => {
            const {onStatus} = this.state

            switch (onStatus) {
              case 'SUCCESS':
                return onSuccessView()
              case 'IN_PROGRESS':
                return isLoader()
              case 'FAILURE':
                return failureView()
              default:
                return null
            }
          }

          return (
            <>
              <Header />
              <HomeContainer>
                <SideBar />
                <HomeBackground isDark={isDark}>
                  {onSwitchStatus()}
                </HomeBackground>
              </HomeContainer>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default VideoItem
