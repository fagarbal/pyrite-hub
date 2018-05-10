import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Card, CardHeader, CardBody, CardTitle, CardText, CardFooter, CardColumns, Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem } from 'reactstrap';

import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const query = gql`
	query Component {
		getAll {
			id
			tag
			username
			description
			likes
			views
		}
	}
`;

const withComponents = graphql(query, {
	props: ({ data }) => ({ ...data }),
})

const Components = withComponents((props: any) => {
	if (props.loading) return (
		<div>
			<b>
				<span>Loading </span> <i className="fa fa-spinner fa-spin"></i>
			</b>
		</div>
	);

	return (
		<CardColumns>
			{props.getAll.map((component) => (
				<Card key={component.id}>
					<a href="/component/example-component">
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

interface IndexProps {
	cards: Array<any>;
	modal?: boolean;
}

interface IndexState {
	modal?: boolean;
	collapsed?: boolean;
}

class IndexComponent extends Component<IndexProps, IndexState> {
	static async getInitialProps({ query: { cards, modal } }) {
		return {
			cards: cards,
			modal: modal
		}
	}
	constructor(props) {
		super(props);

		this.state = {
			modal: false,
			collapsed: true
		};

		this.toggleModal = this.toggleModal.bind(this);
		this.toggleNavbar = this.toggleNavbar.bind(this);
	}

	componentDidMount() {
		this.setState({
			modal: this.props.modal || false
		});
	} 

	openSocialPopUp(name) {
		const popup = window.open('/auth/' + name, '', 'width=500,height=800,scrollbars=yes,menubar=no,resizable=yes,toolbar=no,location=no,status=no');

		popup.addEventListener('message', (e) => {
			console.log(e.data);
		});
	}

	toggleModal() {
		this.setState({
			modal: !this.state.modal
		});
	}

	toggleNavbar() {
		this.setState({
			collapsed: !this.state.collapsed
		});
	}

	render() {
		return (
			<div>
				<Modal isOpen={this.state.modal} toggle={this.toggleModal} centered={true} backdrop="static">
					<ModalHeader toggle={this.toggleModal}>Login Method</ModalHeader>
					<ModalBody className="m-auto">
						<button className="btn btn-secondary" onClick={() => this.openSocialPopUp('github')}>
							Github <i className="fab fa-github"></i>
						</button> <button className="btn btn-secondary" onClick={() => this.openSocialPopUp('gitlab')}>
							Gitlab <i className="fab fa-gitlab"></i>
						</button> <button className="btn btn-secondary" onClick={() => this.openSocialPopUp('bitbucket')}>
							Bitbucket <i className="fab fa-bitbucket"></i>
						</button>
					</ModalBody>
					<ModalFooter>
						<Button color="danger" onClick={this.toggleModal}>Cancel</Button>
					</ModalFooter>
				</Modal>
				<Navbar color="faded" light expand="xs">
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
				<div className="container mt-4">
				<h6 className="mb-3">Featured components:</h6>
					<Components></Components>
				</div>
			</div>
		)
	}
}

export default IndexComponent;