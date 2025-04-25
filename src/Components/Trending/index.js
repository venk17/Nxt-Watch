import {FaFireAlt} from 'react-icons/fa'
import Cookies from 'js-cookie'

import {Component} from 'react'
import Loader from 'react-loader-spinner'

import NxtWatchContext from '../../Context/NxtWatchContext'
import Header from '../Header'
import SideBar from '../SideBar'
import TrendingVideoSection from '../TrendingVideoSection'

import {
  TrendingContainer,
  TrendingBackground,
  TrendingImageContainer,
  TrendingIcon,
  TrendingHeading,
  VideosContainer,
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailureDiscription,
  RetryButton,
} from './styledComponents'

const status = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  inProgress: 'IN_PROGRESS',
  failure: 'FAILURE',
}

class Trending extends Component {
  state = {trendingVideosList: []}

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({onStatus: status.inProgress})
    try {
      const ApiUrl = 'https://apis.ccbp.in/videos/trending'
      const JwtToken = Cookies.get('jwt_token')
      // 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaHVsIiwicm9sZSI6IlBSSU1FX1VTRVIiLCJpYXQiOjE2MjMwNjU1MzJ9.D13s5wN3Oh59aa_qtXMo3Ec4wojOx0EZh8Xr5C5sRkU'

      const options = {
        headers: {
          Authorization: `Bearer ${JwtToken}`,
        },
        method: 'GET',
      }

      const response = await fetch(ApiUrl, options)
      if (response.ok === true) {
        const data = await response.json()

        const updatedData = data.videos.map(each => ({
          id: each.id,
          thumbnailUrl: each.thumbnail_url,
          title: each.title,
          channel: {
            name: each.channel.name,
            profileImageUrl: each.channel.profile_image_url,
          },
          viewCount: each.view_count,
          publishedAt: each.published_at,
        }))
        console.log(updatedData)
        this.setState({
          trendingVideosList: updatedData,
          onStatus: status.success,
        })
      } else {
        this.setState({onStatus: status.failure})
      }
    } catch (errMsg) {
      console.log(errMsg)
    }
  }

  render() {
    const {trendingVideosList} = this.state
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDark} = value

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

          const onSuccessView = () => (
            <VideosContainer>
              {trendingVideosList.map(each => (
                <TrendingVideoSection key={each.id} videoItem={each} />
              ))}
            </VideosContainer>
          )

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
              <TrendingContainer>
                <SideBar />
                <TrendingBackground isDark={isDark}>
                  <TrendingImageContainer isDark={isDark}>
                    <TrendingIcon isDark={isDark}>
                      <FaFireAlt color="#ff0000" size={24} />
                    </TrendingIcon>
                    <TrendingHeading isDark={isDark}>Trending</TrendingHeading>
                  </TrendingImageContainer>
                  {onSwitchStatus()}
                </TrendingBackground>
              </TrendingContainer>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Trending
