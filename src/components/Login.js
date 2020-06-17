import React from 'react';
import { connect } from 'react-redux';
import { updateLoginForm } from '../actions/loginForm';

const Login = ({ loginForm, updateLoginForm }) => {
  const handleInputChange = event => {
    const { name, value } = event.target
    const updatedFormInfo = {
      ...loginForm,
      [name]: value
    }
    updateLoginForm(updatedFormInfo)
  }
  return (
    <form onSubmit={}> //! needs to not be empty
      <input name="username" type="text" placeholder="username" value={loginForm.username} onChange={handleInputChange}/>
      <input name="password" type="text" placeholder="password" value={loginForm.password} onChange={handleInputChange}/>
      <input type="submit" value="Log In" />
    </form>
  )
}

const mapStateToProps = state => {
  return { 
    loginForm: state.loginForm
  }
}

export default connect(mapStateToProps, { updateLoginForm })(Login)