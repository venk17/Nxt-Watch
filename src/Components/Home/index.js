import {IoIosClose, IoIosSearch} from 'react-icons/io'
import Cookies from 'js-cookie'
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import Header from '../Header'
import AllVideoSection from '../AllVideoSSection'
import SideBar from '../SideBar'

import {
  HomeBackground,
  PremiumCard,
  NxtWatchLogo,
  PreImageContainer,
  PreDescriptopn,
  PreButton,
  SearchContainer,
  Search,
  SearchButton,
  VideosContainer,
  HomeContainer,
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailureDiscription,
  RetryButton,
} from './styledComponents'

import NxtWatchContext from '../../Context/NxtWatchContext'

const status = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  inProgress: 'IN_PROGRESS',
  noResult: 'NO_RESULT',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {
    isShowPremiumCard: true,
    videoslist: [],
    searchInput: '',
    onStatus: status.initial,
  }

  componentDidMount() {
    this.getVideoList()
  }

  getVideoList = async () => {
    this.setState({onStatus: status.inProgress})

    try {
      const {searchInput} = this.state
      const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
      const jwtToken = Cookies.get('jwt_token')
      // 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaHVsIiwicm9sZSI6IlBSSU1FX1VTRVIiLCJpYXQiOjE2MjMwNjU1MzJ9.D13s5wN3Oh59aa_qtXMo3Ec4wojOx0EZh8Xr5C5sRkU'
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
        if (updatedData.length === 0) {
          this.setState({onStatus: status.noResult})
        } else {
          this.setState({videoslist: updatedData, onStatus: status.success})
        }
      } else {
        this.setState({onStatus: status.failure})
      }
    } catch (errMsg) {
      console.log(errMsg)
    }
  }

  onSearchInput = () => {
    this.getVideoList()
  }

  premiumCard = () => (
    <PremiumCard data-testid="banner">
      <PreImageContainer>
        <NxtWatchLogo
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="nxt watch logo"
        />
        <button
          data-testid="close"
          type="button"
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
          }}
          onClick={() => this.setState({isShowPremiumCard: false})}
        >
          <IoIosClose size={24} />
        </button>
      </PreImageContainer>
      <PreDescriptopn>
        Buy Nxt Watch Premium <br />
        prepaid plans with UPI
      </PreDescriptopn>
      <PreButton>GET IT NOW</PreButton>
    </PremiumCard>
  )

  render() {
    const {isShowPremiumCard, searchInput, videoslist} = this.state

    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDark} = value

          const isLoader = () => (
            <FailureContainer className="loader-container" data-testid="loader">
              <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
            </FailureContainer>
          )

          const noSearchResultView = () => (
            <FailureContainer>
              <FailureImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                alt="no videos"
              />
              <FailureHeading isDark={isDark}>
                No Search results found
              </FailureHeading>
              <FailureDiscription isDark={isDark}>
                Try different key words or remove search filter
              </FailureDiscription>
              <RetryButton type="button" onClick={() => this.getVideoList()}>
                Retry
              </RetryButton>
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
                alt="failure view"
              />
              <FailureHeading isDark={isDark}>
                Oops! Something Went Wrong
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
              {videoslist.map(each => (
                <AllVideoSection key={each.id} videoItem={each} />
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
              case 'NO_RESULT':
                return noSearchResultView()
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
                <HomeBackground isDark={isDark} data-testid="home">
                  {isShowPremiumCard && this.premiumCard()}
                  <SearchContainer>
                    <Search
                      type="search"
                      placeholder="Search"
                      value={searchInput}
                      onChange={event =>
                        this.setState({searchInput: event.target.value})
                      }
                    />
                    <SearchButton
                      isDark={isDark}
                      type="button"
                      onClick={this.onSearchInput}
                      data-testid="searchButton"
                    >
                      <IoIosSearch size={24} />
                    </SearchButton>
                  </SearchContainer>
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

export default Home
