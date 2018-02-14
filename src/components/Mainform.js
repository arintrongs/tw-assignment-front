import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled from 'styled-components';
import Login from '../login'

const Container = styled.div`
    grid-column :3;
    grid-row : 2/span 2;    
    background-color : white;
    border-radius: 5px;
    .btn{
        text-align : right;
        padding : 10px 30px 15px 0px;
    }
    .label{
        margin-right : 35px;
    }
    hr{
        display: block;
        height: 1px;
        border: 0;
        border-top: 1px solid #ccc;
        margin: 1em 0;
        padding: 0; 
    }
    .option{
        color :#4b4f5d;
    }
`;

const Header = styled.div`
    font-size : 18px;
    color :#4b4f5d;
    height : 30px;
    line-height : 30px;
    padding : 20px 0px 5px 25px;
    font-weight : 700;
`;

const Preferences = styled.div`
    display : inline-grid;
    grid-template-columns: 250px auto auto auto ;
    padding : 30px 30px 15px 30px;
    
`;

const Subject =styled.div`
    grid-column : 1;
    color : #7f8594;
`;

const Detail = styled.div`
    grid-column : 2/ span 3;
`;

const Item = styled.div`
    padding-bottom : 20px;
    font-size:14px;
    color : #979ba5;
    .leading{
        color :#4b4f5d;
        font-weight : 700;
        padding-bottom : 5px;
    }
    .memo{
        padding-top : 5px;
    }
    .option{
        padding-top : 10px;
    }

`;

const Button = styled.button`
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    border-radius: 2px;
    color: #757575;
    font-size: 14px;
    background: #ffffff;
    padding: 10px 20px 10px 20px;
    text-decoration: none;
    &:hover{
        background-color : #f6f6f7;
        cursor: pointer;
        
    }
`;

const Selector = styled.select`
    -webkit-appearance: none;
    -webkit-border-radius: 0px;
    font-size:14px;
    padding : 8px;
    width : 300px;
    color :#4b4f5d;
`;


class Localization extends Component{

    languageList(){
        var returnVal = [];
        var langList = ["English","German","Italian","Lithuanian","Punjabi","Thai","Bengali","Greek","Japanese","Malay"]
        for(var i=0 ;i<langList.length;i++){
            returnVal.push(<option value={i}>{langList[i]}</option>)
        }
        return returnVal
    }
    timezoneList(){
        var returnVal = [];
        var timeList = ["(UTC+00:00) UTC","(UTC+00:30) UTC","(UTC+01:00) UTC","(UTC+01:30) UTC","(UTC+02:00) UTC","(UTC+02:30) UTC","(UTC+03:00) UTC","(UTC+03:30) UTC","(UTC+04:00) UTC","(UTC+04:30) UTC","(UTC+05:00) UTC"]
        for(var i=0 ;i<timeList.length;i++){
            returnVal.push(<option value={i}>{timeList[i]}</option>)
        }
        return returnVal
    }
    currencyList(){
        var returnVal =[];
        var currList = ["US dollars ($)","Russian ruble	(₽)","Euro (€)","Pound (£)","Angolan kwanza (Kz)","Artsakh dram (դր)","Thai Baht (฿)","Swiss franc (Fr)","Japanese yen (¥)","Indian rupee (₹)"]
        for(var i=0 ;i<currList.length;i++){
            returnVal.push(<option value={i}>{currList[i]}</option>)
        }
        return returnVal
    }
    render(){
        
        return(
            <Preferences>
                    <Subject>Localization</Subject>
                    <Detail>
                        <Item>
                            <div class="leading">Language</div>
                            <Selector value={this.props.language} onChange={this.props.handleLang}>
                                {this.languageList()}
                            </Selector>
                            <div class="memo">Interested in helping translate Fancy? <a href="#">Let us know.</a></div>
                        </Item>
                        <Item>
                            <div class="leading">Time Zone</div>
                            <Selector value={this.props.timezone} onChange={this.props.handleTime}>
                                {this.timezoneList()}
                            </Selector>
                        </Item>
                        <Item>
                            <div class="leading">Currency</div>
                            <Selector value={this.props.currency} onChange={this.props.handleCurr}>
                                {this.currencyList()}
                            </Selector>
                        </Item>
                    </Detail>
                </Preferences>
        );
    }
}

class Privacy extends Component{

    render(){
        return(
            <Preferences>
                <Subject>Privacy</Subject>
                <Detail>
                    <Item>
                        <div class="leading">Profile visibility</div>
                        <div class="memo">Manage who can see your activity, things you fancy, your follower, people you follow or in anyone's search results.</div>
                        <div class="option">
                            <span class="label"><input type="radio" id="everyone" name="privacy" checked={this.props.visibility===0} onChange={() => this.props.handleVisibility(0)}/><label for="everyone">Everyone</label></span>
                            <span class="label"><input type="radio" id="private" name="privacy" checked={this.props.visibility===1} onChange={() => this.props.handleVisibility(1)}/><label for="private">Private</label></span>
                        </div>
                    </Item>
                    <Item>
                        <div class="leading">Messages</div>
                        <div class="memo">Contact who can send you message.</div>
                        <div class="option">
                            <span class="label"><input type="radio" id="everyone_m" name="messages" checked={this.props.message===0} onChange={() => this.props.handleMessage(0)}/><label for="everyone_m">Everyone</label></span>
                            <span class="label"><input type="radio" id="follow" name="messages" checked={this.props.message===1} onChange={() => this.props.handleMessage(1)}/><label for="follow">People you follow</label></span>
                            <span class="label"><input type="radio" id="noone" name="messages" checked={this.props.message===2} onChange={() => this.props.handleMessage(2)}/><label for="noone">No one</label></span>
                        </div>
                    </Item>
                    <Item>
                        <div class="leading">Recently viewed</div>
                        <div class="memo">Manage your Fancy browsing history.</div>
                        <div class="option">
                            <a href="">Delete all items</a>
                        </div>
                    </Item>
                </Detail>
            </Preferences>
        );
    }
}

class Content extends Component{

    render(){
        return(
            <Preferences>
                <Subject>Content</Subject>
                <Detail>
                    <Item>
                        <div class="leading">Category lists</div>
                        <div class="memo">Automatically add Fancy'd items to the Category list.</div>
                        <div class="option">
                            <span class="label"><input type="radio" id="enable" name="content" checked={this.props.content===0} onChange={() => this.props.handleContent(0)}/><label for="enable">Enable</label></span>
                            <span class="label"><input type="radio" id="disable" name="content" checked={this.props.content===1} onChange={() => this.props.handleContent(1)}/><label for="disable">Disable</label></span>
                        </div>
                    </Item>
                </Detail>
            </Preferences>
        );
    }
}
class Mainform extends Component{
    constructor(props){
        super(props)
        this.state={
            language : 0,
            timezone : 0,
            currency : 0,
            visibility : 0,
            message : 0,
            content : 0,
            status : 0
        }
    }
    async getPref(){
        var username = window.sessionStorage.getItem("username");
        var a = await fetch("/users?user="+username, {
            method: "GET",
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }
          })
        var data = await a.json()
        return data
    }
    async savePref(){
        var username = window.sessionStorage.getItem("username");
        this.setState({
            status : 1
        })
        await fetch("/save?data="+JSON.stringify(this.state)+"&username="+username, {
            method: "GET",
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }
          })
          this.setState({
            status : 0
        })
        
    }
    async componentDidMount(){
        var pref = await this.getPref()
        this.setState({
            language : pref.language,
            timezone : pref.timezone,
            currency : pref.currency,
            visibility : pref.visibility,
            message : pref.message,
            content : pref.content,
        })

    }
    handleContent(value){
        this.setState({
            content : parseInt(value)
        })
    }
    handleVisibility(value){
        this.setState({
            visibility : parseInt(value)
        })
    }
    handleMessage(value){
        this.setState({
            message : parseInt(value)
        })
    }
    handleLang(event){
        this.setState({
            language: parseInt(event.target.value)
        })
    }
    handleTime(event){
        this.setState({
            timezone: parseInt(event.target.value)
        })
    }
    handleCurr(event){
        this.setState({
            currency : parseInt(event.target.value)
        })
    }
    render(){
        console.log(this.state)
        return(
            <Container>
                <Header>Edit Preferences</Header>
                <hr/>
                <Localization handleLang={this.handleLang.bind(this)} handleTime={this.handleTime.bind(this)} handleCurr={this.handleCurr.bind(this)} language={this.state.language} timezone={this.state.timezone} currency={this.state.currency}/><hr/>             
                <Privacy visibility={this.state.visibility} message={this.state.message} handleVisibility={this.handleVisibility.bind(this)} handleMessage={this.handleMessage.bind(this)}/><hr/>   
                <Content content={this.state.content} handleContent={this.handleContent.bind(this)}/><hr/>
                <div class="btn">
                    <Button onClick={()=>this.savePref()}>{(this.state.status===0)?"Save Preferences" : "Saving..."}</Button><br/>
                </div>

            </Container>
        );
    };
}
export default Mainform;