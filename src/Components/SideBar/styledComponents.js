import styled from 'styled-components'

export const SideBarContainer = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    width: 20%;
    height: 95vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: fixed;
    left: 0;
    top: 0;
    margin-top: 80px;
    background-color: ${props => (props.isDark ? '#212121' : '#f9f9f9')};
  }
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
  font-size: 20px;
  color: ${props => (props.isDark ? '#fff' : '#000')};
  text-decoration: none;
`
export const ContactContainer = styled.div`
  width: 100%;
  padding-left: 20px;
  padding-bottom: 40px;
`

export const Contactheading = styled.p`
  font-size: 20px;
  color: ${props => (props.isDark ? '#fff' : '#475569')};

  @media screen and (min-width: 992px) {
    font-size: 25px;
  }
`
export const LogosContainer = styled.div`
  display: flex;
  align-items-center;
`

export const Logo = styled.img`
  height: 30px;
  margin-right: 10px;

  @media screen and (min-width: 992px) {
    height: 40px;
    margin-right: 20px;
  }
`
export const ContactDescription = styled.p`
  font-size: 15px;
  color: ${props => (props.isDark ? '#fff' : '#1e293b')};

  @media screen and (min-width: 992px) {
    font-size: 20px;
  }
`
