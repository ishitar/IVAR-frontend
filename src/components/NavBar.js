import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

class NavBar extends Component {
  render() {
    return (
        // navbar navbar-default navbar-static-left  navbar-expand
      <NavWrapper className="nav flex-column align-items-center">
          <Link to='/' className="nav-item logo">
              <h5 className="logo">IVAR</h5>
          </Link>
        <Link to='/timeline' className="nav-item">
        <i class="fa fa-feed" aria-hidden="true"></i>
            </Link>             
            <Link to='/profile' className="nav-item">
            <i class="fa fa-user-o" aria-hidden="true"></i>
            </Link>
            <Link to='/profile' className="nav-item">
            <i class="fa fa-search" aria-hidden="true"></i>
            </Link>
            <Link to='/profile' className="nav-item">
            <i class="fa fa-comments-o" aria-hidden="true"></i>
            </Link>
            <Link to='/profile' className="nav-item">
            <i class="fa fa-bell-o" aria-hidden="true"></i>
            </Link>
            <Link to='/inbox' className="nav-item">
                <i className="fa fa-edit" size= '10x'/>
            </Link>
      
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.div`
background:var(--mainBlack);
box-shadow: 6px 5px 5px 1px rgba(31,31,31,1);
min-height:100vh;
display:flex;
top: 0;
width:100px;
.logo{
    font-size:2rem;
}
.logo:hover{
    text-decoration:none;
}
.nav-item{
    color:var(--mainWhite); 
    margin-top:50px;
}
.nav-item:hover{
    
    text-shadow:0px 0px 7px var(--lightGrey);
}
.fa{
    font-size:1.5rem;
}
`

export default NavBar;