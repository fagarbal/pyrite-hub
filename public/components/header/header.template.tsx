import React from 'react';
import { Header } from './header.component';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default function (this: Header) {
    return (
        <div className="header">
            <Modal isOpen={this.state.modal} toggle={this.toggleModal} centered={true} backdrop="static">
                <ModalHeader toggle={this.toggleModal}>Login Method</ModalHeader>
                <ModalBody className="m-auto">
                    <a className="btn btn-secondary" href="/auth/github">
                        Github <i className="fab fa-github"></i>
                    </a> <a className="btn btn-secondary" href="/auth/gitlab">
                        Gitlab <i className="fab fa-gitlab"></i>
                    </a> <a className="btn btn-secondary" href="/auth/bitbucket">
                        Bitbucket <i className="fab fa-bitbucket"></i>
                    </a>
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" onClick={this.toggleModal}>Cancel</Button>
                </ModalFooter>
            </Modal>
            <Navbar className="navbar fixed-top navbar-expand-lg navbar-dark scrolling-navbar" color="faded" light expand="xs">
                <NavbarBrand href="/" className="mr-auto">
                    <b>pyrite</b> <img src="/_next/static/images/logo.png" width="26" height="26"></img> <b>hub</b>
                </NavbarBrand>
                <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                <Collapse isOpen={!this.state.collapsed} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <button type="button" className="btn btn-outline-secondary" onClick={this.toggleModal}>Log in</button>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
            <div className="header-title">
                <h1 className="mb-3">Pyrite Hub</h1>
                <h4 className="mb-3">Web components, the easy way</h4>
            </div>
        </div>
    );
};