import React from 'react';
import Dashboard from './dasboard.component';
<<<<<<< HEAD
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Card, CardBody, CardTitle, CardText, CardFooter, CardColumns, Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem } from 'reactstrap';
import { withComponents } from '../../queries/component.query';

const Components = withComponents(({loading, components}: any ) => {
	if (loading) return (
		<div>
			<b>
				<span>Loading </span> <i className="fa fa-spinner fa-spin"></i>
			</b>
		</div>
	);

	return (
		<CardColumns>
			{components.map((component) => (
				<Card key={component._id}>
					<a href={"/component/" + component.tag}>
						<CardBody>
							<CardTitle>{component.tag}</CardTitle>
							<CardText>{component.description}</CardText>
						</CardBody>
					</a>
					<CardFooter>
						<button type="button" className="btn btn-outline-secondary btn-sm">
							{component.username} <i className="fa fa-user"></i>
						</button>
						<button type="button" className="btn btn-outline-danger btn-sm float-right ml-1">
							{component.likes} <i className="fas fa-heart"></i>
						</button>
						<button type="button" className="btn btn-outline-secondary btn-sm float-right">
							{component.views} <i className="fa fa-eye"></i>
						</button>	
					</CardFooter>
				</Card>
			))}
		</CardColumns>
	);
});

=======
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, CardDeck } from 'reactstrap';
import { Components } from './componentList.component';
import { InfoCard } from './infoCard.component';
>>>>>>> styles
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
                <Navbar className="navbar" color="faded" light expand="xs">
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
                    <CardDeck>
                        <InfoCard></InfoCard>
                        <InfoCard></InfoCard>
                        <InfoCard></InfoCard>
                    </CardDeck>
                </section>
            </div>
            <div className="container mt-4">
                <Components></Components>
            </div>
        </div>
    );
}