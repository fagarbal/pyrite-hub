import React from 'react';
import { HeaderComponent } from './header.component';
import { Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap';
import Link from 'next/link';

import { translation } from '@utils/i18n';
import { SignInModal } from './signin/header.signin.component';

export default function (this: HeaderComponent) {
    return (
        <div className="header">
            <SignInModal show={this.state.showModal} toggle={this.toggleModal} onSignIn={this.props.signin}/>
            <Navbar className="navbar fixed-top navbar-expand-lg navbar-dark scrolling-navbar" color="faded" light expand="xs">
                <Link href="/" passHref>
                    <NavbarBrand  className="mr-auto">
                        <b>pyrite</b> <img src="/static/images/logo.png" width="26" height="26" alt="Pyrite Hub Logo"></img> <b>hub</b>
                    </NavbarBrand>
                </Link>
                <Nav className="ml-auto" navbar>
                    {this.props.user ?
                        <NavItem>
                            <button type="button" className="btn btn-primary mr-2">{this.props.user}</button>
                            <button type="button" className="btn btn-danger" onClick={this.logout}>{translation('header.logout')}</button>
                        </NavItem>
                        :
                        <NavItem>
                            <button type="button" className="btn btn-primary" onClick={this.toggleModal}>{translation('header.signin')}</button>
                        </NavItem>
                    }
                </Nav>
            </Navbar>
        </div>
    );
};