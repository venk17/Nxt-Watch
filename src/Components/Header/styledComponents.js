import styled from 'styled-components'

export const Navbar = styled.nav`
  height: 60px;
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px;
  background-color: ${props => (props.isDark ? '#212121' : '#f9f9f9')};
  position: sticky;
  top: 0;

  @media screen and (min-width: 768px) {
    height: 80px;
    padding-left: 50px;
    padding-right: 30px;
  }
`

export const WebsiteLogo = styled.img`
  height: 25px;
  @media screen and (min-width: 768px) {
    height: 35px;
  }
`
export const NavButtons = styled.div`
  display: flex;
`
export const ChangeThemeButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    margin-right: 15px;
  }
`
export const MenuList = styled.ul`
  list-style: none;
  padding: 0px;
  background-color: ${props => (props.isDark ? '#212121' : '#f9f9f9')};
`
export const Menu = styled.li`
  color: ${props => (props.isDark ? '#f9f9f9' : '#212121')};
  font-size: 16px;
`
export const Profile = styled.img`
  height: 40px;
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    margin-right: 15px;
  }
`

export const PopupContainer = styled.div`
  margin: 0px;
  width: 300px;
`
export const PopupContent = styled.p`
  font-size: 16px;
  color: ${props => (props.isDark ? '#f9f9f9' : '#212121')};
  width: 300px;
  margin-left: 40px;
`
export const PopupButton = styled.button`
  font-size: 16px;
  border: ${props => (props.isLogout ? '' : '616e7c')};
  background-color: ${props => (props.isLogout ? '#3b82f6' : 'transparent')};
  color: ${props => (props.isLogout ? '#fff' : '#909090')};
`
