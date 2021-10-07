import React from 'react';
import ReactDOM  from 'react-dom';
import FadeTransition from "./transitions/fadeTransitions";
import "../src/react.css";
class App extends React.Component{
   
  constructor(props){
    super(props);
    this.state={
      isEmailOpen:true,
      isMobileOpen:false
    };
  }
  
  showEmailBox(){
    this.setState({isEmailOpen: true, isMobileOpen: false});
  }
  
  showMobileBox(){
    this.setState({isMobileOpen:true, isEmailOpen: false});
  }
  
  render(){
         return(
           <div className="root-container">
            <div className="box-controller">
             <div
                 className={"controller " + (this.state.isEmailOpen
                  ? "selected-controller"
                  : "")}
                  onClick={this
                  .showEmailBox
                  .bind(this)}>
                  Email</div>
             <div 
                className={"controller " + (this.state.isMobileOpen
                  ? "selected-controller"
                  : "")}
                  onClick={this
                  .showMobileBox
                  .bind(this)}>
                  Mobile</div>
             </div>
             <FadeTransition isOpen={this.state.isEmailOpen} duration={500}>
          <div className="box-container">
            <EmailBox/>
          </div>
        </FadeTransition>
        <FadeTransition isOpen={this.state.isMobileOpen} duration={500}>
          <div className="box-container">
            <MobileBox/>
          </div>
        </FadeTransition>
  
  
  
             </div>
  
         );
  
  
  }
  
  }
  
  class EmailBox extends React.Component {
  
    constructor(props){
      super(props);
      this.state={
        email: "",
        username: "",
        password: "",
        errors: [],
        pwdlength: null
      };
      
    }
    showValidationErr(elm, msg) {
      this.setState((prevState) => ({
        errors: [
          ...prevState.errors, {
            elm,
            msg
          }
        ]
      }));
    }
    clearValidationErr(elm) {
      this.setState((prevState) => {
        let newArr = [];
        for (let err of prevState.errors) {
          if (elm != err.elm) {
            newArr.push(err);
          }
        }
        return {errors: newArr};
      });
    }
    onEmailChange(e) {
      this.setState({email: e.target.value});
      this.clearValidationErr("email");
    }
  
    onUsernameChange(e) {
      this.setState({username: e.target.value});
      this.clearValidationErr("username");
    }
  
    onPasswordChange(e) {
      this.setState({password: e.target.value});
      this.clearValidationErr("password");
    
  }
  
    submitEmail(e) {
      console.log(this.state);

    if (this.state.email == "") {
       this.showValidationErr("email", "Email Cannot be empty!");
    }
    if (this.state.username == "") {
       this.showValidationErr("username", "Username Cannot be empty!");
    }
    if (this.state.password == "") {
       this.showValidationErr("password", "Password Cannot be empty!");
    }

  }

  
    render(){
      let emailErr = null,
      usernameErr = null,
      passwordErr = null;

    for (let err of this.state.errors) {
      if (err.elm == "email") {
        emailErr = err.msg;
      }
      if (err.elm == "username") {
        usernameErr = err.msg;
      }
      if (err.elm == "password") {
        passwordErr = err.msg;
      }
    }




    
  
 
    return(
      <div className="inner-container">
    
      <div className="box">
      <div className="input-group">
      <input 
      type="email"
       className="login-input" 
       name="email" 
       placeholder="Enter the email" 
       onChange={this
       .onEmailChange
       .bind(this)}/>
         <small className="danger-error">{emailErr
               ? emailErr
               : ""}</small>
      </div>
      <div className="input-group">
      <input 
      type="text" 
      className="login-input"
       name="username" 
       placeholder="username" 
       onChange={this
         .onUsernameChange
         .bind(this)}/>
       <small className="danger-error">{usernameErr
           ? usernameErr
           : ""}</small>
      </div>
      <div className="input-group">
      <input 
      type="password" 
      className="login-input"
       name="password"
        placeholder="password"
        onChange={this
         .onPasswordChange
         .bind(this)}/>
       <small className="danger-error">{passwordErr
           ? passwordErr
           : ""}</small> 
      </div>
       </div>
       <div className="group">
         <input type="checkbox" className="checkbox" checked/> I agree to Food community's T&C 
         </div>
       <div>
       <button 
       type="button" 
       className="signup"
         onClick={this
         .submitEmail
         .bind(this)}>Signup</button>
        <p>or</p>
      
       <button type="button" className="login" name="login">Log in</button>
       </div>
   
    
        </div>
 
       
   );
 }
 
 
 }
 
  
       
  
  class MobileBox extends React.Component {
  
    constructor(props){
      super(props);
      this.state={
        number: "",
        username: "",
        password: "",
        errors: [],
        pwdlength: null
    };
    }
    showValidationErr(elm, msg) {
      this.setState((prevState) => ({
        errors: [
          ...prevState.errors, {
            elm,
            msg
          }
        ]
      }));
    }
    clearValidationErr(elm) {
      this.setState((prevState) => {
        let newArr = [];
        for (let err of prevState.errors) {
          if (elm != err.elm) {
            newArr.push(err);
          }
        }
        return {errors: newArr};
      });
    }
    onNumberChange(e) {
      this.setState({number: e.target.value});
      this.clearValidationErr("number");
    }
  
    onUsernameChange(e) {
      this.setState({username: e.target.value});
      this.clearValidationErr("username");
    }
  
    onPasswordChange(e) {
      this.setState({password: e.target.value});
      this.clearValidationErr("password");
      
    }
  submitMobile(e) {

    console.log(this.state);

    if (this.state.number == "") {
      this.showValidationErr("number", "Number Cannot be empty!");
    }
    if (this.state.username == "") {
      this.showValidationErr("username", "Username Cannot be empty!");
    }
    if (this.state.password == "") {
      this.showValidationErr("password", "Password Cannot be empty!");
    }

  }

  
    render(){
      let numberErr = null,
      usernameErr = null,
      passwordErr = null;

    for (let err of this.state.errors) {
      if (err.elm == "number") {
        numberErr = err.msg;
      }
      if (err.elm == "username") {
        usernameErr = err.msg;
      }
      if (err.elm == "password") {
        passwordErr = err.msg;
      }
    }
      
    return(
      
      <div className="inner-container">
    
       <div className="box">
       <div className="input-group">
       <input 
       type="text"
        className="login-input" 
        name="number" 
        placeholder="mobile number" 
        onValueChange= {this.state.countryCode}
        onChange={this.onNumberChange.bind(this)}/>
          <small className="danger-error">{numberErr
                ? numberErr
                : ""}</small>
       </div>
       <div className="input-group">
       <input 
       type="text" 
       className="login-input"
        name="username" 
        placeholder="username" 
        onChange={this
          .onUsernameChange
          .bind(this)}/>
        <small className="danger-error">{usernameErr
            ? usernameErr
            : ""}</small>
       </div>
       <div className="input-group">
       <input 
       type="password" 
       className="login-input"
        name="password"
         placeholder="password"
         onChange={this
          .onPasswordChange
          .bind(this)}/>
        <small className="danger-error">{passwordErr
            ? passwordErr
            : ""}</small> 
       </div>
        </div>
        <div className="group">
          <input type="checkbox" className="checkbox" checked/> I agree to Food community's T&C 
          </div>
        <div>
        <button 
        type="button" 
        className="signup"
          onClick={this
          .submitMobile
          .bind(this)}>Signup</button>
         <p>or</p>
       
        <button type="button" className="login" name="login">Log in</button>
        </div>
    
     
         </div>
      
  
        
    );
  }
  
  
  }
  
  
  
  
  
  
  
  
  
  
  ReactDOM.render(
      <App />,
    document.getElementById('root'));