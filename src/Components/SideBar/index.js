import {FaHome, FaFireAlt, FaGamepad} from 'react-icons/fa'
import {RiPlayListAddFill} from 'react-icons/ri'
import {Link} from 'react-router-dom'

import NxtWatchContext from '../../Context/NxtWatchContext'
import {
  SideBarContainer,
  MenuContainer,
  MenuIconContainer,
  Menus,
  ContactContainer,
  Contactheading,
  LogosContainer,
  Logo,
  ContactDescription,
} from './styledComponents'

const Sidebar = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDark} = value

        return (
          <SideBarContainer isDark={isDark}>
            <MenuContainer isDark={isDark}>
              <Link to="/" style={{textDecoration: 'none', color: 'inherit'}}>
                <MenuIconContainer>
                  <FaHome size={20} color="#606060" />
                  <Menus isDark={isDark}>Home</Menus>
                </MenuIconContainer>
              </Link>
              <Link
                to="/trending"
                style={{textDecoration: 'none', color: 'inherit'}}
              >
                <MenuIconContainer>
                  <FaFireAlt size={20} color="#606060" />
                  <Menus isDark={isDark}>Trending</Menus>
                </MenuIconContainer>
              </Link>
              <Link
                to="/gaming"
                style={{textDecoration: 'none', color: 'inherit'}}
              >
                <MenuIconContainer>
                  <FaGamepad size={20} color="#606060" />
                  <Menus isDark={isDark}>Gaming</Menus>
                </MenuIconContainer>
              </Link>
              <Link
                to="/saved-videos"
                style={{textDecoration: 'none', color: 'inherit'}}
              >
                <MenuIconContainer>
                  <RiPlayListAddFill size={20} color="#606060" />
                  <Menus isDark={isDark}>Saved Videos</Menus>
                </MenuIconContainer>
              </Link>
            </MenuContainer>

            <ContactContainer>
              <Contactheading isDark={isDark}>Contact Us</Contactheading>
              <LogosContainer>
                <Logo
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  alt="facebook logo"
                />
                <Logo
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  alt="twitter logo"
                />
                <Logo
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  alt="linked in logo"
                />
              </LogosContainer>
              <ContactDescription isDark={isDark}>
                Enjoy! Now to see your channels and recommendations!
              </ContactDescription>
            </ContactContainer>
          </SideBarContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

export default Sidebar
