import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import '../styles/login.scss'
import Login from './Login'
import Register from './Register'



class Panel extends React.Component {
 constructor(props) {
  super(props) 
  this.state = {
   checkBox: false,
   emailValue: "",
   passwordValue: "",
   emailChar: "",
   invalidEmail: "",
   invalidPassword: ""
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
    invalidEmail: ""
  })


 }

 passwordHandler = (e) => {
 
  const passwordValue = e.target.value 
  this.setState({ 
    passwordValue,
    invalidPassword: ""
  } )
 }

 loginHandler = (e) => {
  const minCharPassword = 8;
  e.preventDefault()
  if( this.state.emailChar === -1) {
    this.setState({
      invalidEmail: true
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
  this.loginHandler();

}


 render () {
 
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login 
    emailValue= {this.state.emailValue} 
    emailhandler={this.emailHandler} 
    invalidEmail={this.state.invalidEmail}
    passwordValue={this.state.passwordValue}
    passwordHandler={this.passwordHandler}
    invalidPassword = {this.state.invalidPassword}
    checkBox = {this.state.checkBox}
    checkBoxHandler={this.checkboxHandler}
    loginHandler={this.loginHandler}
    registerButtonHandler={this.registerButtonHandler}
    />}/>
      <Route path='/register' element={
        <Register/>
      }/>
    
    </Routes>
</BrowserRouter>
  )
 }



}


export default Panel
