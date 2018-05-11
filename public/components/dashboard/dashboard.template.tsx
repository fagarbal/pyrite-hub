import React from 'react';
import Dashboard from './dasboard.component';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, CardDeck } from 'reactstrap';
import { Components } from './componentList.component';
import { InfoCard } from './infoCard.component';
export default function (this: Dashboard) {
    return (
        <div>
            <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />
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
            <div className="header">
                <Navbar className="navbar fixed-top navbar-expand-lg navbar-dark scrolling-navbar" color="faded" light expand="xs">
                    <NavbarBrand href="/" className="mr-auto">
                        <b>pyrite</b> <img src="/static/images/logo.png" width="26" height="26"></img> <b>hub</b>
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
            <div className="container over-header mt-4">
                <section className="row">
                    <CardDeck className="centered">
                        <InfoCard icon="fa-blind" text="The help you need to build your website, just the way you need it"></InfoCard>
                        <InfoCard icon="fa-tachometer-alt" text="Web development, modular and faster than ever before"></InfoCard>
                        <InfoCard icon="fa-briefcase" text="Profesional web components, created and mantained by our community"></InfoCard>
                    </CardDeck>
                </section>
            </div>
            <hr />
            <div className="container mt-4">
                <h1 className="mb-3 section-title centered"><i className="fas fa-crown"></i>Featured components</h1>
                <Components></Components>
            </div>
        </div>
    );
}