import logo from '../assets/imgs/logo.png'
import PasswordForm from '../components/passwordForm'
import EmailForm from '../components/emailForm'
import { Link } from "react-router-dom";



const Login = (props) => {

const {emailValue, emailHandler, invalidEmail, passwordValue, passwordHandler, invalidPassword, checkBox, checkBoxHandler, loginHandler, registerButtonHandler} = props



 return ( 
  <div className="login-container">
    <div className='login-panel'>

      {/* TITLE */}
      <img alt="logo" className="login-panel__logo" src={logo}></img>
      <h1 className="login-panel__title">Rejestracja</h1>
      <span className="login-panel__desc">Zarejestruj się aplikacji</span>

      <form className="login-panel__form">


      {/* EMAIL */}
       <EmailForm value={emailValue} emailhandler={emailHandler} invalidEmail={invalidEmail}/>

       {/* PASSWORD */}
       <PasswordForm passwordValue={passwordValue} passwordHandler={passwordHandler} invalidPassword = {invalidPassword}/>


        {/* REGISTER */}
        <div className="login-panel__bar">

       <button className="bar__login" onClick={loginHandler}>Zarejestruj się</button>


        {/* Login */}
       <div className='bar__register'>
        <span className="bar__register-desc">Masz już konto? 

        <button className="bar__register-button" onClick={registerButtonHandler}><Link to='/'>Zaloguj się</Link></button>

         </span>
        
        </div>
       </div>

      </form>



    </div>
    </div>
  );
}
 
export default Login;