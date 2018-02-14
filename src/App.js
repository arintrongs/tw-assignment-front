import React, { Component } from 'react';
import Topbar from './components/Topbar';
import Leftbar from './components/Leftbar';
import Mainform from './components/Mainform';
import styled from 'styled-components';
import Login from './login';

const PageContainer = styled.div`
    width:100%;
    display : grid;
    grid-template-columns: 200px 300px 900px auto ;
    grid-gap: 15px 20px;
    background-color: #ebeced;
    font-family: 'Roboto', sans-serif;
    font-size:16px;

`;

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      username: "",
      password: "",
      re_password :"",
      logged : 0,
      status : "",
      form : 0
    }
  }
  componentDidMount(){
    var username = window.sessionStorage.getItem("username");
    if(username!==""){
      this.setState({
        logged:1
      })
    }
  }
  async loggingIn(){
    var res = await fetch("/signin?username="+this.state.username+"&password="+this.state.password, {
      method: "GET",
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
    var data = await res.json()
    if(data === 1){
      window.sessionStorage.setItem("username", this.state.username);
      this.setState({
        logged:data
      })
    }else{
      this.setState({
        status : "Wrong Username/Password"
      })
    }
  }
  async register(){
    var res = await fetch("/signup?username="+this.state.username+"&password="+this.state.password+"&re_password="+this.state.re_password, {
      method: "GET",
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
    var data = await res.json()
    console.log(data)
    if(data.res === 1){
      this.setState({
        status : data.message,
        form : 0
      })
    }else{
      this.setState({
        status : data.message
      })
    }
  }
  changeUsername(e){
    console.log(this.state)
    this.setState({username:e.target.value})
  }
  changePassword(e){
    console.log(this.state)
    this.setState({password:e.target.value})
  }
  changeRePassword(e){
    console.log(this.state)
    this.setState({re_password:e.target.value})
  }
  setSignupForm(){
    this.setState({form:1})
  }
  setSigninForm(){
    this.setState({form:0})
  }
  logout(){
    window.sessionStorage.setItem("username", "");
    this.setState({
      logged : 0
    })
  }
  pageDecider(){
    if(this.state.logged===0){
      return(<Login register={this.register.bind(this)} changeRePassword={this.changeRePassword.bind(this)} setSigninForm={this.setSigninForm.bind(this)} setSignupForm={this.setSignupForm.bind(this)} form={this.state.form} status={this.state.status} loggingIn={this.loggingIn.bind(this)} changeUsername={this.changeUsername.bind(this)} changePassword={this.changePassword.bind(this)}/>)
    }
    return(<PageContainer>
      <Topbar logout={this.logout.bind(this)}/>
      <Leftbar />
      <Mainform />
    </PageContainer>)
  }
  render() {
    return (
      this.pageDecider()
    );
  }
}

export default App;
