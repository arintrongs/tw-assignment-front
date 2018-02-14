import React, { Component } from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
    width : 100%;
    text-align:center;
    padding : 0;
    padding-top :200px;
`
const Mainform = styled.div`
    display : inline-block;
    background-color : white;
    width : 350px;
    padding : 25px 10px 25px 10px;
`
const Logo = styled.div`
    color:#515c67;
    font-family: 'Quicksand', sans-serif;
    font-size:36px;
    text-align : center;
`;
const Loginform = styled.div`
    font-family: 'Roboto', sans-serif;
    input{
        height : 40px;
        width : 300px;
        font-size : 20px;
        background-color:#f6f6f7;
        border : 0.5px;
        border-style : solid;
        border-color : #dedfe0;
        border-radius : 2px;
        margin-top : 15px;
    }
`;
const Signin = styled.button`
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    border-radius: 2px;
    color: #757575;
    font-size: 18px;
    background: #ffffff;
    padding: 10px 20px 10px 20px;
    margin-top :25px;
    text-decoration: none;
    &:hover{
        background-color : #f6f6f7;
        cursor: pointer;
    }
`
const Signup = styled.button`
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    border-radius: 2px;
    color: #757575;
    font-size: 18px;
    background: #ffffff;
    padding: 10px 20px 10px 20px;
    margin-top :25px;
    margin-left : 15px;
    text-decoration: none;
    &:hover{
        background-color : #f6f6f7;
        cursor: pointer;
        
    }
`
const Status = styled.div`
    color : red;
    margin : 0;
    padding : 10px, 0px,10px,0px;
`
class Login extends Component {

    changeForm(){
        console.log(this.props.form)
        if(this.props.form===1){
            return(
            <div>
                <Loginform>
                    <input type="text" placeholder=" Username" onChange={this.props.changeUsername}/>
                    <input type="password" placeholder=" Password" onChange={this.props.changePassword}/>
                    <input type="password" placeholder=" Retype-Password" onChange={this.props.changeRePassword}/>
                </Loginform>
                <Signin onClick={()=>this.props.setSigninForm()}>Back</Signin>
                <Signup onClick={()=>this.props.register()}>Submit</Signup>
            </div>
            )
        }else{
            return(
                <div>
                <Loginform>
                    <input type="text" placeholder=" Username" onChange={this.props.changeUsername}/>
                    <input type="password" placeholder=" Password" onChange={this.props.changePassword}/>
                </Loginform>
                <Signin onClick={this.props.loggingIn}>Sign In</Signin>
                <Signup onClick={()=>this.props.setSignupForm()}>Sign Up</Signup>
                </div>
            )
        }
    }
  render() {
    return (
        <PageContainer>
            <Mainform>
                <Logo>FANCY</Logo>
                <Status>{this.props.status}</Status>
                {this.changeForm()}
            </Mainform>
        </PageContainer>
  
    );
  }
}

export default Login;
