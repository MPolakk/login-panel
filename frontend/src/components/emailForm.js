


const EmailForm = (props) => {

 const {emailValue, emailHandler, invalidEmail} = props;


 return ( 
  <>

  <label htmlFor="email">Email*</label>
       <div className="login-container">
       <input value={emailValue} onChange={emailHandler} name="email" placeholder="Użytkownik@email.pl" className="form__email" ></input>
       <span className="form__emailInvalid" style={invalidEmail === true ? {display: 'block'} : {display: 'none'}}>*błędny email</span>
       </div>
  
  
  </>
  );
}
 
export default EmailForm;