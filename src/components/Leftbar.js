import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    grid-column :2;
    background-color : white;
    border-radius: 5px;
    padding-top : 10px;
    padding-bottom : 10px;
    hr{
        display: block;
        height: 1px;
        border: 0;
        border-top: 1px solid #ccc;
        padding: 0; 
        padding-left : 20px;
    }
    .icon{
        font-size:20px;
        grid-column : 1;
    }
    .text{
        grid-column:2;
    }
    
`;

const Item = styled.div`
    width : 250px;
    height : 25px;
    line-height: 25px;
    text-align: left;
    margin :0;
    padding : 5px 25px 5px 25px;
    color : #7f8594;
    display:inline-grid;
    grid-template-columns: 40px auto;
    background-color: ${props => props.selected ? "#f6f6f7" : "#ffffff"};
    font-weight : ${props => props.selected ? 700 : 400};
    &:hover{
        background-color : #f6f6f7;
        cursor: pointer;
        font-weight:700;
    }

`;
const HorzLine = styled.div`
    padding : 2.5px 25px 2.5px 25px;
`;

class Leftbar extends Component{
    render(){
        return(
            <Container>
                <Item><span class="icon item"><i class="fas fa-user-circle"></i></span><span class="text">Edit Profile</span></Item>
                <Item selected><span class="icon"><i class="far fa-edit"></i></span><span class="text">Preferences</span></Item>
                <Item><span class="icon"><i class="fas fa-lock"></i></span><span class="text">Password</span></Item>
                <Item><span class="icon"><i class="far fa-bell"></i></span><span class="text">Notifications</span></Item>
                <Item><span class="icon"><i class="fas fa-plug"></i></span><span class="text">Connected Accounts</span></Item>
                <HorzLine><hr/></HorzLine>
                <Item><span class="icon"><i class="far fa-list-alt"></i></span><span class="text">Orders</span></Item>
                <Item><span class="icon"><i class="far fa-credit-card"></i></span><span class="text">Payment</span></Item>
                <Item><span class="icon"><i class="fas fa-truck"></i></span><span class="text">Shipping</span></Item>
                <HorzLine><hr/></HorzLine>
                <Item><span class="icon"><i class="fas fa-dollar-sign"></i></span><span class="text">Credits & Referrals</span></Item>
                

            </Container>
        );
    };
}
export default Leftbar;