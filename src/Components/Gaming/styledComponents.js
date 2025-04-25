import styled from 'styled-components'

export const GameBackground = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
  padding-top: 60px;

  @media (min-width: 768px) {
    width: calc(100% - 250px);
    margin-left: 250px;
    padding-top: 80px;
  }
`

export const GamingContainer = styled.div`
  display: flex;
  position: relative;
`

export const GameImageContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  width: 100%;
  background-color: ${props => (props.isDark ? '#181818' : '#e2e8f0')};
  position: fixed;
  top: 60px;
  z-index: 10;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    top: 80px;
    padding: 20px 40px;
  }
`

export const GamingIcon = styled.div`
  padding: 12px;
  border-radius: 50%;
  background-color: ${props => (props.isDark ? '#000000' : '#cbd5e1')};
  height: 60px;
  width: 60px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    height: 70px;
    width: 70px;
  }
`

export const GameHeading = styled.h1`
  font-size: 22px;
  color: ${props => (props.isDark ? '#f9f9f9' : '#1e293b')};
  margin-left: 20px;
  font-weight: 600;

  @media (min-width: 768px) {
    font-size: 26px;
  }
`

export const VideosContainer = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 100px;
  padding: 20px;

  @media (min-width: 576px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    margin-top: 120px;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    padding: 30px 40px;
    margin-top: 140px;
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  }
`

export const FailureContainer = styled.div`
  height: calc(100vh - 180px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
  margin-top: 100px;

  @media (min-width: 768px) {
    margin-top: 140px;
    height: calc(100vh - 220px);
  }
`

export const FailureImage = styled.img`
  width: 80%;
  max-width: 400px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    max-width: 500px;
  }
`

export const FailureHeading = styled.h1`
  font-size: 18px;
  color: ${props => (props.isDark ? '#fff' : '#1e293b')};
  margin-bottom: 10px;
  font-weight: 600;

  @media (min-width: 576px) {
    font-size: 22px;
  }

  @media (min-width: 768px) {
    font-size: 24px;
  }
`

export const FailureDiscription = styled.p`
  font-size: 14px;
  color: ${props => (props.isDark ? '#94a3b8' : '#606060')};
  margin-bottom: 20px;
  line-height: 1.5;
  max-width: 500px;

  @media (min-width: 576px) {
    font-size: 16px;
  }

  @media (min-width: 768px) {
    font-size: 18px;
  }
`

export const RetryButton = styled.button`
  background-color: #3b82f6;
  color: #fff;
  font-size: 14px;
  padding: 12px 32px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background-color: #2563eb;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }

  @media (min-width: 768px) {
    font-size: 16px;
    padding: 14px 36px;
  }
`
