import React from 'react';
import { connect } from 'react-redux';
import { updateSignupForm } from '../actions/signupForm';
import { signup } from '../actions/currentUser';


const Signup = ({ signupFormData, updateSignupForm, signup, history }) => {
  const handleInputChange = event => {
    const { name, value } = event.target
    const updatedFormInfo = {
      ...signupFormData,
      [name]: value
    }
    updateSignupForm(updatedFormInfo)
  }

  const handleSubmit = event => {
    event.preventDefault();
    signup(signupFormData, history)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="username" type="text" placeholder="username" value={signupFormData.username} onChange={handleInputChange}/>
      <input name="password" type="text" placeholder="password" value={signupFormData.password} onChange={handleInputChange}/>
      <input type="submit" value="Sign Up" />
    </form>
  )
}

const mapStateToProps = state => {
  return { 
    signupFormData: state.signupForm
  }
}

export default connect(mapStateToProps, { updateSignupForm, signup })(Signup)