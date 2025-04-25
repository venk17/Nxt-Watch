import Popup from 'reactjs-popup'

import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'
import NxtWatchContext from '../../Context/NxtWatchContext'

import {
  PopupContainer,
  LogoutButton,
  ModalContainer,
  PopupButton,
  ButtonsContainer,
  WarningMessage,
} from './styledComponents'

import 'reactjs-popup/dist/index.css'

const Logout = props => {
  const onLogoutClicked = () => {
    const {history} = props
    Cookies.remove('jwt_token')

    history.replace('/login')
  }

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <PopupContainer>
            <Popup
              modal
              trigger={
                <LogoutButton type="button" darkMode={isDark}>
                  Logout
                </LogoutButton>
              }
            >
              {close => (
                <ModalContainer darkMode={isDark}>
                  <WarningMessage darkMode={isDark}>
                    Are you sure, you want to logout
                  </WarningMessage>
                  <ButtonsContainer>
                    <PopupButton type="button" outline onClick={() => close()}>
                      Cancel
                    </PopupButton>
                    <PopupButton type="button" onClick={onLogoutClicked}>
                      Confirm
                    </PopupButton>
                  </ButtonsContainer>
                </ModalContainer>
              )}
            </Popup>
          </PopupContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default withRouter(Logout)
