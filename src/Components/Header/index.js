import {FaMoon} from 'react-icons/fa'

import 'reactjs-popup/dist/index.css'

import {FiSun} from 'react-icons/fi'
import {Link} from 'react-router-dom'
import Logout from '../Logout'
import MenuPopup from '../MenuPopup'

import NxtWatchContext from '../../Context/NxtWatchContext'
import {
  Navbar,
  WebsiteLogo,
  NavButtons,
  ChangeThemeButton,
  Profile,
} from './styledComponents'

const Header = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDark, changeTheme} = value

      return (
        <Navbar isDark={isDark}>
          <Link to="/">
            <WebsiteLogo
              src={
                isDark
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
              }
              alt="website logo"
            />
          </Link>
          <NavButtons>
            <ChangeThemeButton
              data-testid="theme"
              onClick={() => changeTheme()}
            >
              {isDark ? <FiSun size={24} color="#fff" /> : <FaMoon size={24} />}
            </ChangeThemeButton>
            <MenuPopup />

            <Profile
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
            />

            <Logout />
          </NavButtons>
        </Navbar>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default Header
