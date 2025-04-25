import React from 'react'

const NxtWatchContext = React.createContext({
  isDark: false,
  isSaved: false,
  savedVideos: [],
  changeTheme: () => {},
  onSaveVideo: () => {},
})

export default NxtWatchContext
