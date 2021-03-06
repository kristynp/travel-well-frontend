import React from 'react';
import { connect } from 'react-redux';
import { updateLoginForm } from '../../actions/user/loginForm';
import { login } from '../../actions/user/currentUser';


const Login = ({ loginFormData, updateLoginForm, login, history }) => {

  const handleInputChange = event => {
    const { name, value } = event.target
    const updatedFormInfo = {
      ...loginFormData,
      [name]: value
    }
    updateLoginForm(updatedFormInfo)
  }

  const handleSubmit = event => {
    event.preventDefault();
    login(loginFormData, history)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="username" type="text" placeholder="username" value={loginFormData.username} onChange={handleInputChange}/>
      <input name="password" type="text" placeholder="password" value={loginFormData.password} onChange={handleInputChange}/>
      <input type="submit" value="Log In" />
    </form>
  )
}

const mapStateToProps = state => {
  return { 
    loginFormData: state.loginForm
  }
}

export default connect(mapStateToProps, { updateLoginForm, login })(Login)