import styled from 'styled-components'

export const PopupContainer = styled.div`
  width: 50%;

  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${props => (props.darkMode ? '#ffffff' : '#3b82f6')};
  background-color: ${props => (props.darkMode ? '#181818' : '#ffffff')};
  min-height: 20vh;
`

export const MenuContainer = styled.ul`
  list-style: none;
  padding: 0px;

  color: ${props => (props.isDark ? '#fff' : '#000')};
`

export const MenuIconContainer = styled.li`
  display: flex;
  align-items: center;
  padding-left: 20px;
  margin-top: 15px;
  text-decoration: none;
`

export const Menus = styled.p`
  display: flex;
  align-items: center;
  margin: 0px;
  margin-left: 20px;
  font-size: 14px;
  color: ${props => (props.isDark ? '#fff' : '#000')};
  text-decoration: none;
`
export const CloseButton = styled.div`
  width: 90%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 0px;
`
