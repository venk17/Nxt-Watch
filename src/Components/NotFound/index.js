import NxtWatchContext from '../../Context/NxtWatchContext'
import Header from '../Header'
import SideBar from '../SideBar'

import {
  FailureBackground,
  TrendingContainer,
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailureDiscription,
} from './styledComponents'

const NotFound = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDark} = value
      const failureView = () => (
        <FailureContainer>
          <FailureImage
            src={
              isDark
                ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
            }
            alt="Not Found Image"
          />
          <FailureHeading isDark={isDark}>Page Not Found </FailureHeading>
          <FailureDiscription isDark={isDark}>
            We are sorry, the page you requested could not be found we are
            sorry, the page you requested could not be found
          </FailureDiscription>
        </FailureContainer>
      )
      return (
        <>
          <Header />
          <TrendingContainer>
            <SideBar />
            <FailureBackground isDark={isDark}>
              {failureView()}
            </FailureBackground>
          </TrendingContainer>
        </>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default NotFound
