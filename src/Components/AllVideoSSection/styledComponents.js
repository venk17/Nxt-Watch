import styled from 'styled-components'

export const VideoItem = styled.li`
  margin-bottom: 24px;
  width: 100%;
  list-style-type: none;

  @media (min-width: 576px) {
    width: 48%;
    margin-right: 4%;

    &:nth-child(2n) {
      margin-right: 0;
    }
  }

  @media (min-width: 768px) {
    width: 31%;
    margin-right: 3.5%;

    &:nth-child(2n) {
      margin-right: 3.5%;
    }

    &:nth-child(3n) {
      margin-right: 0;
    }
  }

  @media (min-width: 1200px) {
    width: 23%;
    margin-right: 2.66%;

    &:nth-child(2n),
    &:nth-child(3n) {
      margin-right: 2.66%;
    }

    &:nth-child(4n) {
      margin-right: 0;
    }
  }
`

export const Thumbnail = styled.img`
  width: 100%;
  border-radius: 8px;
  aspect-ratio: 16/9;
  object-fit: cover;
  margin-bottom: 12px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`

export const ThumbnailContainer = styled.div`
  display: flex;
  width: 100%;
  padding-left: 0;

  @media (min-width: 576px) {
    padding-left: 0;
  }
`

export const ChannelProfile = styled.img`
  height: 36px;
  width: 36px;
  border-radius: 50%;
  margin-right: 12px;
  object-fit: cover;

  @media (min-width: 768px) {
    height: 40px;
    width: 40px;
  }
`

export const VideoDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

export const Title = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: ${props => (props.isDark ? '#f1f1f1' : '#0f0f0f')};
  font-family: 'Roboto', sans-serif;
  margin: 0 0 8px 0;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`

export const VideoInformationContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 4px;
`

export const VideoInfo = styled.p`
  font-size: 12px;
  color: ${props => (props.isDark ? '#aaaaaa' : '#606060')};
  margin: 0;
  display: flex;
  align-items: center;

  &::after {
    content: '•';
    margin-left: 4px;
  }

  &:last-child::after {
    content: '';
    margin-left: 0;
  }

  @media (min-width: 768px) {
    font-size: 13px;
  }
`
