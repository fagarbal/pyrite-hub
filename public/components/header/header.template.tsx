import React from 'react';
import { HeaderComponent } from './header.component';
import { Navbar, NavbarBrand, Nav, NavItem, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
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
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                <img src="/static/images/default.png" width="26" height="26" alt="Pyrite Hub Logo" className="mr-2"></img>
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem header>
                                    Signed in as <b>{this.props.user}</b>
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem href="/my-components">
                                    Your components
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem href="#" onClick={this.logout}>
                                    {translation('header.logout')}
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
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