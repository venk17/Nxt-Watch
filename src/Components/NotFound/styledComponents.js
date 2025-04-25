import styled from 'styled-components'

export const FailureBackground = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
  margin: 0px;

  @media screen and (min-width: 768px) {
    width: 80%;
    margin-left: 20%;
  }
`
export const TrendingContainer = styled.div`
  display: flex;
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
