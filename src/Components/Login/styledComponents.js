import styled from 'styled-components'

export const BackgroundContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isDark ? '#181818' : '#f9f9f9')};
  padding: 20px;
`

export const LoginForm = styled.div`
  width: 100%;
  max-width: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#ffffff')};
  padding: 30px;
  border-radius: 8px;
  box-shadow: ${props =>
    props.isDark
      ? '0 4px 12px rgba(0, 0, 0, 0.5)'
      : '0 4px 12px rgba(0, 0, 0, 0.1)'};

  @media (max-width: 576px) {
    padding: 25px 20px;
    width: 90%;
  }
`

export const NxtWatchLogo = styled.img`
  height: 28px;
  margin-bottom: 30px;

  @media (min-width: 768px) {
    height: 40px;
    margin-bottom: 40px;
  }
`

export const Label = styled.label`
  font-size: 12px;
  font-weight: 600;
  color: ${props => (props.isDark ? '#f1f1f1' : '#475569')};
  margin-bottom: 5px;
  align-self: flex-start;

  @media (min-width: 768px) {
    font-size: 14px;
  }
`

export const InputElement = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid ${props => (props.isDark ? '#475569' : '#cbd5e1')};
  border-radius: 4px;
  background-color: transparent;
  margin-bottom: 15px;
  padding: 8px 16px;
  font-size: 14px;
  color: ${props => (props.isDark ? '#f8fafc' : '#1e293b')};
  outline: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #3b82f6;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
  }

  @media (min-width: 768px) {
    height: 44px;
    font-size: 15px;
  }
`

export const ShowPasswordContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 0 15px;
  align-self: flex-start;
`

export const ShowPassword = styled.label`
  font-size: 14px;
  color: ${props => (props.isDark ? '#e2e8f0' : '#334155')};
  margin-left: 8px;
  cursor: pointer;

  @media (min-width: 768px) {
    font-size: 15px;
  }
`

export const LoginButton = styled.button`
  width: 100%;
  height: 40px;
  color: #ffffff;
  background-color: #3b82f6;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 10px;

  &:hover {
    background-color: #2563eb;
  }

  &:active {
    transform: scale(0.98);
  }

  @media (min-width: 768px) {
    height: 44px;
    font-size: 16px;
  }
`

export const Error = styled.p`
  font-size: 14px;
  color: #ef4444;
  margin-top: 15px;
  text-align: center;
  line-height: 1.4;

  @media (min-width: 768px) {
    font-size: 15px;
  }
`
