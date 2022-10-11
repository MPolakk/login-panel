import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import '../styles/login.scss'
import Login from './Login'
import Register from './Register'
import axios from 'axios'



class Panel extends React.Component {
 constructor(props) {
  super(props) 
  this.state = {
   checkBox: false,
   emailValue: "",
   passwordValue: "",
   emailChar: "",
   invalidEmail: false,
   invalidPassword: false
  }
  // PASSWORD
  
 }

 
 checkboxHandler = (e) => {
  this.setState({
    checkBox: !this.state.checkBox
  })
 }

 emailHandler = (e) => {
  const emailValue = e.target.value;
  this.setState({
    emailChar: emailValue.indexOf('@'),
    emailValue,
    invalidEmail: false
  })


 }

 passwordHandler = (e) => {
 
  const passwordValue = e.target.value;
  this.setState({ 
    passwordValue,
    invalidPassword: false
  } )
 }

 validateHandler = (e) => {
  const minCharPassword = 8;
 
  if( this.state.emailChar === -1) {
    this.setState({
      invalidEmail: true
    })
  } else {
    this.setState({
      invalidPassword: false
     })
    }


  if( this.state.passwordValue.length < minCharPassword) {
    this.setState({
      invalidPassword: true
    }) 
  } else {
    this.setState({
      invalidPassword: false
     })
    }
    
 }
 registerButtonHandler = (e) => {
  e.preventDefault();
  this.validateHandler();

  if(this.state.invalidEmail === false && this.state.invalidPassword === false) {

    const user = {
      username: this.state.emailValue,
      password: this.state.passwordValue
    }
  
    axios.post('http://localhost:3001/register', user).then(res => {
      console.log(res)
    })

  this.setState({
    emailValue: "",
    passwordValue: ""
  })
}
}

loginButtonHandler = (e) => {
  e.preventDefault();
  this.validateHandler();

}

 render () {
 
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login 
    emailValue= {this.state.emailValue} 
    emailHandler={this.emailHandler} 
    invalidEmail={this.state.invalidEmail}
    passwordValue={this.state.passwordValue}
    passwordHandler={this.passwordHandler}
    invalidPassword = {this.state.invalidPassword}
    checkBox = {this.state.checkBox}
    checkBoxHandler={this.checkboxHandler}
    loginButtonHandler={this.loginButtonHandler}
    />}/>
      <Route path='/register' element={
        <Register
        emailValue= {this.state.emailValue} 
        emailHandler={this.emailHandler}
        invalidEmail={this.state.invalidEmail}
        passwordValue={this.state.passwordValue}
        passwordHandler={this.passwordHandler}
        invalidPassword = {this.state.invalidPassword}
        loginHandler={this.loginHandler}
        registerButtonHandler={this.registerButtonHandler}
        />
      }/>
    
    </Routes>
</BrowserRouter>
  )
 }



}


export default Panel
