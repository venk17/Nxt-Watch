import styled from 'styled-components'

export const HomeBackground = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
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

export const VideoContainer = styled.div`
  width: 100%;
  height: 35%;
  @media screen and (min-width: 576px) {
    height: 40%;
  }
  @media screen and (min-width: 768px) {
    height: 35%;
  }
  @media screen and (min-width: 1200px) {
    height: 53%;
  }
`

export const VideoItemDetails = styled.div`
  margin-bottom: 20px;
  height: 100%;
`

export const Thumbnail = styled.video`
  width: 100%;
  margin-bottom: 10px;
`
export const ThumbnailContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 12px;
`
export const ChannelProfile = styled.img`
  height: 30px;
  margin-right: 10px;
`
export const CountsAndButtons = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

export const VideoDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.p`
  font-size: 13px;
  color: ${props => (props.isDark ? '#fff' : '#000')};
  font-family: 'Roboto';
  margin: 0px;
`
export const VideoInformationContainer = styled.div`
  display: flex;
  align-items: center;
`
export const VideoInfo = styled.p`
  font-size: 12px;
  color: ${props => (props.isDark ? '#94a3b8' : '#606060')};
  margin-right: 5px;
`
export const LikeButton = styled.button`
  border: none;
  color: ${props => (props.isLiked ? '#2563eb' : '#64748b')};
  font-size: 14px;
  background-color: transparent;
  cursor: pointer;
  margin-right: 10px;
  display: flex;
`
export const DisLikeButton = styled.button`
  border: none;
  color: ${props => (props.isDisLiked ? '#2563eb' : '#64748b')};
  background-color: transparent;
  font-size: 14px;
  cursor: pointer;
  margin-right: 10px;
  display: flex;
`
export const SaveButton = styled.button`
  border: none;
  color: ${props => (props.isSaved ? '#3b82f6' : '#64748b')};
  background-color: transparent;
  font-size: 14px;
  cursor: pointer;
  margin-right: 10px;
  display: flex;
`
