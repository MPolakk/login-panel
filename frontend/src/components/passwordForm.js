const PasswordForm = (props) => {
 const {passwordValue, passwordHandler, invalidPassword} = props;

 
 
 return ( 


  <>

  {/* PASSWORD INPUT*/}
       <label htmlFor="password">Hasło*</label>
       <div className="login-container">
       <input value={passwordValue} onChange={passwordHandler} name="password" placeholder="Min. 8 znaków" className="form__password"></input>
       <span className="form__passwordInvalid" style={invalidPassword === true ? {display: 'block'} : {display: 'none'}}>*zbyt krótkie hasło</span>
       </div>
       
  
  
  </>
  );
}
 
export default PasswordForm ;