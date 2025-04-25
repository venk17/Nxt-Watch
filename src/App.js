import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import NxtWatchContext from './Context/NxtWatchContext'
import './App.css'

import Home from './Components/Home'
import Login from './Components/Login'
import Trending from './Components/Trending'
import Gaming from './Components/Gaming'
import NotFound from './Components/NotFound'
import ProtectedRoute from './Components/ProtectectedRoute'
import VideoItem from './Components/VideoItem'
import SavedVideos from './Components/SavedVideos'

class App extends Component {
  state = {isDark: false, savedVideos: [], isSaved: false}

  changeTheme = () => {
    this.setState(prevState => ({isDark: !prevState.isDark}))
  }

  onSaveVideo = videoDetails => {
    const {savedVideos} = this.state

    this.setState(prevState => {
      const isAlreadySaved = savedVideos.some(
        video => video.id === videoDetails.id,
      )

      return {
        savedVideos: isAlreadySaved
          ? prevState.savedVideos.filter(video => video.id !== videoDetails.id)
          : [...prevState.savedVideos, videoDetails],
        isSaved: !isAlreadySaved,
      }
    })
  }

  render() {
    const {isDark, savedVideos, isSaved} = this.state
    return (
      <NxtWatchContext.Provider
        value={{
          savedVideos,
          isDark,
          isSaved,
          changeTheme: this.changeTheme,
          onSaveVideo: this.onSaveVideo,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/videos/:id" component={VideoItem} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <Route path="/bad-path" component={NotFound} />
          <Redirect to="/bad-path" />
        </Switch>
      </NxtWatchContext.Provider>
    )
  }
}

export default App
