import {FaFireAlt} from 'react-icons/fa'

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
} from './styledComponents'

const status = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  inProgress: 'IN_PROGRESS',
  failure: 'FAILURE',
}

class SavedVideos extends Component {
  state = {onStatus: status.initial}

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDark, savedVideos} = value

          const isLoader = () => (
            <FailureContainer className="loader-container" data-testid="loader">
              <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
            </FailureContainer>
          )

          const failureView = () => (
            <FailureContainer>
              <FailureImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                alt="no saved videos"
              />
              <FailureHeading isDark={isDark}>
                No saved videos found
              </FailureHeading>
              <FailureDiscription isDark={isDark}>
                You can save your videos while watching them
              </FailureDiscription>
            </FailureContainer>
          )

          const onSuccessView = () => (
            <VideosContainer>
              {savedVideos.map(each => (
                <TrendingVideoSection key={each.id} videoItem={each} />
              ))}
            </VideosContainer>
          )

          const noVideos = savedVideos.length === 0

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
                    <TrendingHeading isDark={isDark}>
                      Saved Videos
                    </TrendingHeading>
                  </TrendingImageContainer>
                  {noVideos ? failureView() : onSuccessView()}
                </TrendingBackground>
              </TrendingContainer>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default SavedVideos
