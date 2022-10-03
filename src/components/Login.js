import React from 'react'
import '../styles/login.scss'
import logo from '../assets/imgs/logo.png'


class LoginPanel extends React.Component {
 constructor(props) {
  super(props) 
  this.state = {
   

  }
 }


 render () {



  return (
    <div className="login-container">
    <div className='login-panel'>
      <img alt="logo" className="login-panel__logo" src={logo}></img>
      <h1 className="login-panel__title">Logowanie</h1>
      <span className="login-panel__desc">Zaloguj się do aplikacji</span>

      <form className="login-panel__form">
       <label for="email">Email*</label>
       <input name="email" placeholder="Użytkownik@email.pl" className="form__email"></input>
       <label for="password">Hasło*</label>
       <input name="password" placeholder="Min. 8 znaków"className="form__password"></input>

       <div className="login-panel__bar">

        <div className="bar__remember">
       <input className="bar__checkbox" type="checkbox"/>
       <span className="bar__checkbox-desc">Zapamietaj mnie</span>
       </div>

       
       <button className="bar__forgot">Zapomniałeś hasła?</button>
       <button className="bar__login">Zaloguj</button>
       <div className='bar__register'>
        <span className="bar__register-desc">Nie masz jeszcze utworzonego konta? <button className="bar__register-button">Utwórz Konto</button></span>
        
        </div>
       </div>

      </form>



    </div>
    </div>
  )
 }



}


export default LoginPanel
