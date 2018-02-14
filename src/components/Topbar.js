import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width : 100%;
    height : 30px;
    padding : 0;
    padding-top:5px;
    padding-bottom : 25px;
    display : inline-grid;
    grid-column : 1/span 4;
    grid-row : 1;
    grid-template-columns: 200px 300px auto 300px 250px;
    grid-column-gap: 10px;
    background-color : white;
    

`;

const Logo = styled.div`
    color:#515c67;
    font-family: 'Quicksand', sans-serif;
    font-size:36px;
    grid-column : 3;
    text-align : center;
`;

const Search = styled.div`
    grid-column : 2;
    padding : 0;
    padding-top : 10px;
    input{
        -webkit-border-radius: 0;
        -moz-border-radius: 0;
        height : 30px;
        width : 200px;
        font-size : 14px;
        background-color:#f6f6f7;
        border : 0.5px;
        border-style : solid;
        border-color : #dedfe0;
        border-radius : 2px;
        /* font-family: FontAwesome, "Open Sans", Verdana, sans-serif; */
    }
`;

const Menu = styled.div`
    grid-column : 4;
    text-align : right;
    padding : 0;
    padding-top : 15px;
    color : #7f8594;
    .icon{
        margin-right:20px;
        font-size:18px;
    }
    a:visited{
        color:#7f8594;
    }
`;

class Topbar extends Component{
   
    render(){
        return(
            <Container>
                <Search>
                    <input type="text" placeholder="Search Fancy" />
                </Search>
                <Logo>FANCY</Logo>
                <Menu>
                    <span class="icon"><i class="fas fa-shopping-cart"></i></span>
                    <span class="icon"><i class="fas fa-archive"></i></span>
                    <a href="#"><span class="icon" onClick={()=>this.props.logout()}><i class="fas fa-bolt"></i></span></a>
                    <span class="icon"><i class="fas fa-user"></i> You <i class="fas fa-sort-down"></i></span>
                </Menu>
            </Container>
        );
    }
}
export default Topbar;
