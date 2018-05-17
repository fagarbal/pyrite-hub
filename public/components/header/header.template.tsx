import React from 'react';
import { Header } from './header.component';
import { Navbar, NavbarBrand, Nav, NavItem, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import { translation } from '@utils/i18n';

export default function (this: Header) {
    return (
        <div className="header">
            <Modal isOpen={this.state.modal} centered={true} backdrop="static">
                <ModalHeader>{translation('header.loginMethod')}</ModalHeader>
                <ModalBody className="m-auto">
                    <a className="btn btn-secondary" href="/auth/github">
                        Github <i className="fab fa-github"></i>
                    </a>
                    <a className="btn btn-secondary ml-3 mr-3" href="/auth/gitlab">
                        Gitlab <i className="fab fa-gitlab"></i>
                    </a>
                    <a className="btn btn-secondary" href="/auth/bitbucket">
                        Bitbucket <i className="fab fa-bitbucket"></i>
                    </a>
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" onClick={this.toggleModal}>{translation('cancel')}</Button>
                </ModalFooter>
            </Modal>
            <Navbar className="navbar fixed-top navbar-expand-lg navbar-dark scrolling-navbar" color="faded" light expand="xs">
                <NavbarBrand href="/" className="mr-auto">
                    <b>pyrite</b> <img src="/static/images/logo.png" width="26" height="26"></img> <b>hub</b>
                </NavbarBrand>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <button type="button" className="btn btn-outline-secondary" onClick={this.toggleModal}>{translation('header.login')}</button>
                        </NavItem>
                    </Nav>
            </Navbar>
        </div>
    );
};