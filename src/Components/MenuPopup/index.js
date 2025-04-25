import {MdMenu} from 'react-icons/md'
import Popup from 'reactjs-popup'
import {FaHome, FaFireAlt, FaGamepad} from 'react-icons/fa'
import {RiPlayListAddFill} from 'react-icons/ri'
import {Link} from 'react-router-dom'
import NxtWatchContext from '../../Context/NxtWatchContext'

import {
  PopupContainer,
  ModalContainer,
  MenuContainer,
  MenuIconContainer,
  Menus,
  CloseButton,
} from './styledComponents'

import 'reactjs-popup/dist/index.css'

const MenuPopup = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDark} = value
      return (
        <PopupContainer>
          <Popup
            modal
            trigger={
              <button
                type="button"
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                <MdMenu color={isDark ? '#fff' : '#000'} size={24} />
              </button>
            }
          >
            {close => (
              <ModalContainer darkMode={isDark}>
                <CloseButton>
                  <button
                    type="button"
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      color: isDark ? '#fff' : '#000',
                    }}
                    onClick={() => close()}
                  >
                    x
                  </button>
                </CloseButton>
                <MenuContainer isDark={isDark}>
                  <Link
                    to="/"
                    style={{textDecoration: 'none', color: 'inherit'}}
                  >
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
                    to="/savedVideos"
                    style={{textDecoration: 'none', color: 'inherit'}}
                  >
                    <MenuIconContainer>
                      <RiPlayListAddFill size={20} color="#606060" />
                      <Menus isDark={isDark}>Saved Videos</Menus>
                    </MenuIconContainer>
                  </Link>
                </MenuContainer>
              </ModalContainer>
            )}
          </Popup>
        </PopupContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default MenuPopup
