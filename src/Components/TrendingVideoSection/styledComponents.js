import styled from 'styled-components'

export const VideoItem = styled.li`
  margin-bottom: 20px;

  @media screen and (min-width: 576px) {
    width: 100%;
    display: flex;
    padding: 20px;
  }
`

export const Thumbnail = styled.img`
  width: 100%;
  margin-bottom: 10px;
  height: 200px;

  @media screen and (min-width: 576px) {
    width: 55%;
    height: 200px;
  }
`
export const ThumbnailContainer = styled.div`
  width: 100%;
  display: flex;
  padding-left: 10px;

  @media screen and (min-width: 576px) {
    width: 100%;
  }
`
export const ChannelProfile = styled.img`
  height: 30px;
  margin-right: 10px;

  @media screen and (min-width: 576px) {
    display: none;
  }
`
export const VideoDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const ChannelNameContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-top: 5px;

  @media screen and (min-width: 576px) {
    flex-direction: column;
  }
`

export const Title = styled.p`
  font-size: 13px;
  color: ${props => (props.isDark ? '#fff' : '#000')};
  font-family: 'Roboto';
  margin: 0px;

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`
export const VideoInformationContainer = styled.div`
  display: flex;
  align-items: center;
`
export const VideoInfo = styled.p`
  font-size: 12px;
  color: #606060;
  margin-right: 5px;

  @media screen and (min-width: 768px) {
    font-size: 15px;
  }
`
