import styled from 'styled-components'

export const HomeBackground = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: ${props => (props.isDark ? '#181818' : '#f9f9f9')};
  margin: 0px;

  @media screen and (min-width: 768px) {
    width: 80%;
    margin-left: 20%;
    padding: 20px;
  }
`
export const HomeContainer = styled.div`
  display: flex;
`

export const PremiumCard = styled.div`
  min-height: 100px;
  background-color: #f9f9f9;
  padding: 20px;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;

  @media screen and (min-width: 768px) {
  }
`
export const NxtWatchLogo = styled.img`
  height: 30px;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    height: 60px;
  }
`
export const PreImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const PreDescriptopn = styled.p`
  font-size: 16px;
  color: #1e293b;
`

export const PreButton = styled.button`
  border: 1px solid #000;
  color: #1e293b;
  padding: 10px;
  font-weight: bold;
  margin-top: 20px;
  background-color: transparent;
`

export const SearchContainer = styled.div`
  margin: 10px;
  border: 1px #909090 solid;
  height: 30px;
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: 576px) {
    width: 70%;
  }

  @media screen and (min-width: 768px) {
    width: 60%;
  }

  @media screen and (min-width: 1200px) {
    width: 50%;
  }
`

export const Search = styled.input`
  border: none;
  background-color: transparent;
  color: #606060;
  font-size: 16px;
  padding-left: 10px;
  padding: 5px;
  outline: none;
  width: 90%;
`
export const SearchButton = styled.button`
  border: none;
  border-left: 1px solid #909090;
  background-color: ${props => (props.isDark ? '#606060' : '#f1f5f9')};
  width: 60px;
`
export const VideosContainer = styled.ul`
  list-style: none;
  padding: 0px;

  @media screen and (min-width: 576px) {
    display: flex;
    alighn-items: center;
    flex-wrap: wrap;
    justify-content: space-around;
  }
`
export const FailureContainer = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
`
export const FailureImage = styled.img`
  height: 150px;

  @media screen and (min-width: 576px) {
    height: 250px;
  }
`

export const FailureHeading = styled.h1`
  font-size: 16px;
  color: ${props => (props.isDark ? '#fff' : '#1e293b')};
  margin-bottom: 5px;

  @media screen and (min-width: 576px) {
    font-size: 20px;
  }
`
export const FailureDiscription = styled.p`
  font-size: 16px;
  color: ${props => (props.isDark ? '#94a3b8' : '#606060')};
  margin-top: 0px;

  @media screen and (min-width: 576px) {
    font-size: 20px;
  }
`
export const RetryButton = styled.button`
  background-color: #3b82f6;
  color: #fff;
  font-size: 14px;
  padding: 10px;
  padding-left: 30px;
  padding-right: 30px;
  cursor: pointer;
  border: none;
  border-radius: 5px;

  @media screen and (min-width: 576px) {
    font-size: 18px;
  }
`
