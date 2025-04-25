import {Component} from 'react'
import Cookies from 'js-cookie'
import NxtWatchContext from '../../Context/NxtWatchContext'

import {
  BackgroundContainer,
  LoginForm,
  NxtWatchLogo,
  Label,
  InputElement,
  ShowPassword,
  ShowPasswordContainer,
  LoginButton,
  Error,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    isShowPassword: false,
    isShowErrMsg: false,
    errorMsg: '',
  }

  onSuccessLogin = jwtToken => {
    const {history} = this.props
    console.log(jwtToken)
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onFailureLogin = errorMsg => {
    this.setState({isShowErrMsg: true, errorMsg})
  }

  onSubmitLoginForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const loginUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(loginUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSuccessLogin(data.jwt_token)
    } else {
      this.onFailureLogin(data.error_msg)
      console.log(data.error_msg)
    }
  }

  render() {
    const {
      username,
      password,
      isShowPassword,
      errorMsg,
      isShowErrMsg,
    } = this.state

    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDark} = value

          return (
            <BackgroundContainer isDark={isDark}>
              <LoginForm isDark={isDark}>
                <NxtWatchLogo
                  src={
                    isDark
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  }
                  alt="website logo"
                />
                <form onSubmit={this.onSubmitLoginForm}>
                  <Label isDark={isDark} htmlFor="username">
                    USERNAME
                  </Label>
                  <InputElement
                    type="text"
                    id="username"
                    placeholder="Username"
                    value={username}
                    onChange={event => {
                      this.setState({username: event.target.value})
                    }}
                  />
                  <Label isDark={isDark} htmlFor="password">
                    PASSWORD
                  </Label>
                  <InputElement
                    type={isShowPassword ? 'text' : 'password'}
                    id="password"
                    placeholder="Password"
                    isDark={isDark}
                    value={password}
                    onChange={event => {
                      this.setState({password: event.target.value})
                    }}
                  />
                  <ShowPasswordContainer>
                    <input
                      type="checkbox"
                      id="showPassword"
                      onChange={() => {
                        this.setState(prevState => ({
                          isShowPassword: !prevState.isShowPassword,
                        }))
                      }}
                    />
                    <ShowPassword isDark={isDark} htmlFor="showPassword">
                      Show Password
                    </ShowPassword>
                  </ShowPasswordContainer>
                  <LoginButton type="submit">Login</LoginButton>
                  {isShowErrMsg ? <Error>{errorMsg}</Error> : ''}
                </form>
              </LoginForm>
            </BackgroundContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Login
