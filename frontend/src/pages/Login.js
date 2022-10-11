import logo from '../assets/imgs/logo.png'
import PasswordForm from '../components/passwordForm'
import EmailForm from '../components/emailForm'
import { Link } from "react-router-dom";



const Login = (props) => {

const {emailValue, emailHandler, invalidEmail, passwordValue, passwordHandler, invalidPassword, checkBox, checkBoxHandler, loginButtonHandler, registerButtonHandler} = props



 return ( 
  <div className="login-container">
    <div className='login-panel'>

      {/* TITLE */}
      <img alt="logo" className="login-panel__logo" src={logo}></img>
      <h1 className="login-panel__title">Logowanie</h1>
      <span className="login-panel__desc">Zaloguj się do aplikacji</span>

      <form className="login-panel__form">


      {/* EMAIL */}
       <EmailForm emailValue={emailValue} emailHandler={emailHandler} invalidEmail={invalidEmail}/>

       {/* PASSWORD */}
       <PasswordForm passwordValue={passwordValue} passwordHandler={passwordHandler} invalidPassword = {invalidPassword}/>


        {/* REMEMBER ME */}
        <div className="login-panel__bar">
        <div className="bar__remember">
       <input className="bar__checkbox" type="checkbox" defaultChecked = {checkBox} onChange={checkBoxHandler}/>
       <span className="bar__checkbox-desc">Zapamietaj mnie</span>
       </div>

       {/* FORGOT PASSWORD */}
       <button className="bar__forgot" onClick={checkBoxHandler}>Zapomniałeś hasła?</button>

       <button className="bar__login" onClick={loginButtonHandler}>Zaloguj</button>


        {/* REGISTER */}
       <div className='bar__register'>
        <span className="bar__register-desc">Nie masz jeszcze utworzonego konta? 

        <button className="bar__register-button" onClick={registerButtonHandler}><Link to='/register'>Utwórz Konto</Link></button>

         </span>
        
        </div>
       </div>

      </form>



    </div>
    </div>
  );
}
 
export default Login;