import styled from 'styled-components'

export const TrendingBackground = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: ${props => (props.isDark ? '#181818' : '#f9f9f9')};
  margin: 0px;

  @media screen and (min-width: 768px) {
    width: 80%;
    margin-left: 20%;
  }
`
export const TrendingContainer = styled.div`
  display: flex;
`

export const TrendingImageContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  padding-left: 20px;
  width: 100%;
  background-color: ${props => (props.isDark ? '#181818' : '#e2e8f0')};
`
export const TrendingIcon = styled.div`
  padding: 10px;
  border-radius: 100px;
  background-color: ${props => (props.isDark ? '#000000' : '#cbd5e1')};
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const TrendingHeading = styled.h1`
  font-size: 20px;
  color: ${props => (props.isDark ? '#f9f9f9' : '#1e293b')};
  margin-left: 15px;
`
export const VideosContainer = styled.ul`
  list-style: none;
  padding: 0px;
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
