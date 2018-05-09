import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Card, CardHeader, CardBody, CardTitle, CardText, CardFooter, CardColumns, Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem } from 'reactstrap';

const CardComponent = () => (
	<a href="/component/example-component">
		<Card>
			<CardBody>
			<CardTitle><u>component-name</u></CardTitle>
			<CardText>Sort description of what the component do and some usage information.</CardText>
			</CardBody>
			<CardFooter>
				<span>username</span>
				<button type="button" className="btn btn-outline-secondary btn-sm float-right ml-1" onClick={this.toggleModal}>
					20 <i className="fa fa-eye"></i>
				</button>
				<button type="button" className="btn btn-outline-secondary btn-sm float-right" onClick={this.toggleModal}>
					1 <i className="fas fa-heart"></i>
				</button>
			</CardFooter>
      	</Card>
	</a>
);

interface IndexProps {
	cards: Array<any>;
	modal?: boolean;
}

interface IndexState {
	modal?: boolean;
	collapsed?: boolean;
}

export default class extends Component<IndexProps, IndexState> {
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
						<b>Pyrite</b> <img src="/static/images/logo.png" width="32" height="32"></img>
					</NavbarBrand>
					<NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
					<Collapse isOpen={!this.state.collapsed} navbar>
						<Nav className="ml-auto" navbar>
							<NavItem>
								<button className="btn btn-outline-secondary mr-2">Sign in</button>
							</NavItem>
							<NavItem>
								<button type="button" className="btn btn-outline-secondary" onClick={this.toggleModal}>Log in</button>
							</NavItem>
						</Nav>
					</Collapse>
				</Navbar>
				<div className="container mt-4">
					<CardColumns>
						{this.props.cards.map((e, k) => <CardComponent key={k} />)}
					</CardColumns>
				</div>
			</div>
		)
	}
}
