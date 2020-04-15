import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="nav flex-column justify-content-center">
                <Link to='/timeline' className="nav-item">
                    <i className="fa fa-feed" />
                </Link>
                <Link to='/profile' className="nav-item">
                    <i className="fa fa-user-o" />
                </Link>
                <Link to='/explore' className="nav-item">
                    <i className="fa fa-search" />
                </Link>
                <Link to='/chat' className="nav-item">
                    <i className="fa fa-comments-o" />
                </Link>
                <Link to='/notifications' className="nav-item">
                    <i className="fa fa-bell-o" />
                </Link>
                <Link to='/post' className="nav-item">
                    <i className="fa fa-edit"/>
                </Link>
            </NavWrapper>
        );
    }
}

const NavWrapper = styled.div`
margin-top: 5px 0 5px 5px;
min-height:100vh;
display:inline-flex;
width:70px;
justify-content: center;
text-align: center;
position: fixed;
z-index: 999;
.nav-item{
    color:var(--mainWhite); 
    margin-top:10px;
}
.nav-item:hover{
    text-shadow:0px 0px 7px var(--lightGrey);
}
.fa{
    font-size:1.5rem;
}
`;

export default Navbar;