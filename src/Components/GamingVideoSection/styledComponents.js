import styled from 'styled-components'

export const VideoItem = styled.li`
  margin-bottom: 20px;
  width: 46%;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 576px) {
    width: 30%;
  }
`
export const Thumbnail = styled.img`
  width: 100%;
  margin-bottom: 10px;
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
export const GameInfo = styled.p`
  font-size: 12px;
  color: #606060;
  margin: 5px;
  margin-right: 5px;

  @media screen and (min-width: 768px) {
    font-size: 15px;
  }
`
