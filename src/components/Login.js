import React from 'react'
import '../styles/login.scss'
import logo from '../assets/imgs/logo.png'


class LoginPanel extends React.Component {
 constructor(props) {
  super(props) 
  this.state = {
   checkBox: true,
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


 render () {
 
  return (
    
    <div className="login-container">
    <div className='login-panel'>

      {/* TITLE */}
      <img alt="logo" className="login-panel__logo" src={logo}></img>
      <h1 className="login-panel__title">Logowanie</h1>
      <span className="login-panel__desc">Zaloguj się do aplikacji</span>

      <form className="login-panel__form">


    {/* EMAIL */}
       <label htmlFor="email">Email*</label>
       <div className="login-container">
       <input value={this.state.emailValue} onChange={this.emailHandler} name="email" placeholder="Użytkownik@email.pl" className="form__email" ></input>
       <span className="form__emailInvalid" style={this.state.invalidEmail === true ? {display: 'block'} : {display: 'none'}}>*błędny email</span>
       </div>

       {/* PASSWORD */}
       <label htmlFor="password">Hasło*</label>
       <div className="login-container">
       <input value={this.state.passwordValue} onChange={this.passwordHandler} name="password" placeholder="Min. 8 znaków"className="form__password"></input>
       <span className="form__passwordInvalid" style={this.state.invalidPassword === true ? {display: 'block'} : {display: 'none'}}>*błędne hasło</span>
       </div>
       <div className="login-panel__bar">


        {/* REMEMBER ME */}
        <div className="bar__remember">
       <input className="bar__checkbox" type="checkbox" defaultChecked= {this.state.checkBox} onChange={this.checkboxHandler}/>
       <span className="bar__checkbox-desc">Zapamietaj mnie</span>
       </div>

       {/* FORGOT PASSWORD */}
       <button className="bar__forgot">Zapomniałeś hasła?</button>

       <button className="bar__login" onClick={this.loginHandler}>Zaloguj</button>


        {/* REGISTER */}
       <div className='bar__register'>
        <span className="bar__register-desc">Nie masz jeszcze utworzonego konta? <button className="bar__register-button" onClick= {this.checkboxHandler}>Utwórz Konto</button></span>
        
        </div>
       </div>

      </form>



    </div>
    </div>
  )
 }



}


export default LoginPanel
