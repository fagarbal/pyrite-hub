import React from 'react';
import { Header } from './header.component';
import { Navbar, NavbarBrand, Nav, NavItem, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import { translation } from '@utils/i18n';

export default function (this: Header) {
    return (
        <div className="header">
            <Modal isOpen={this.state.modal} centered={true} backdrop="static" fade={false}>
                <ModalHeader>{translation('header.signinTitle')}</ModalHeader>
                <ModalBody className="ml-4 mr-4">
                    <form>
                        <div className="form-group">
                            <label><b>{translation('header.username')}</b></label>
                            <input type="email" className="form-control" required/>
                        </div>
                        <div className="form-group">
                            <label><b>{translation('header.password')}</b></label>
                            <a className="float-right" href="">{translation('header.forgot')}</a>
                            <input type="password" className="form-control" required/>
                        </div>

                        <div className="col-sm-4 offset-sm-4">
                            <button type="submit" className="btn btn-primary btn-block">{translation('header.signin')}</button>
                        </div>

                        <hr/>
                        <p className="text-center">{translation('header.or')}</p>
                        <hr/>

                        <a className="btn btn-outline-dark btn-block" href="/auth/github">
                            <i className="fab fa-github"></i><span> {translation('header.signinWith')} Github</span>
                        </a>
                        <a className="btn btn-outline-dark btn-block" href="/auth/gitlab">
                            <i className="fab fa-gitlab"></i><span> {translation('header.signinWith')} Gitlab</span>
                        </a>
                        <a className="btn btn-outline-dark btn-block" href="/auth/bitbucket">
                            <i className="fab fa-bitbucket"></i><span> {translation('header.signinWith')} Bitbucket</span>
                        </a>
                    </form>

                </ModalBody>
                <ModalFooter>
                    <Button color="danger" onClick={this.toggleModal}>{translation('cancel')}</Button>
                </ModalFooter>
            </Modal>
            <Navbar className="navbar fixed-top navbar-expand-lg navbar-dark scrolling-navbar" color="faded" light expand="xs">
                <NavbarBrand href="/" className="mr-auto">
                    <b>pyrite</b> <img src="/static/images/logo.png" width="26" height="26" alt="Pyrite Hub Logo"></img> <b>hub</b>
                </NavbarBrand>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <button type="button" className="btn btn-primary" onClick={this.toggleModal}>{translation('header.signin')}</button>
                        </NavItem>
                    </Nav>
            </Navbar>
        </div>
    );
};