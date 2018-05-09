import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Card, CardHeader, CardBody, CardTitle, CardText, CardFooter, CardColumns } from 'reactstrap';

const CardComponent = () => (
	<Card>
        <CardBody>
          <CardTitle>Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Go somewhere</Button>
        </CardBody>
        <CardFooter>Footer</CardFooter>
      </Card>
);

interface IndexProps {
	cards: Array<any>;
	modal?: boolean;
}

interface IndexState {
    modal?: boolean;
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
			modal: false
		};

		this.toggle = this.toggle.bind(this);
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

	toggle() {
		this.setState({
			modal: !this.state.modal
		});
	}

	render() {
		return (
			<div>
				<Modal isOpen={this.state.modal} toggle={this.toggle} centered={true} backdrop="static">
					<ModalHeader toggle={this.toggle}>Login Method</ModalHeader>
					<ModalBody>
						<button className="btn btn-outline-secondary" onClick={() => this.openSocialPopUp('github')}>
							Github <i className="fab fa-github"></i>
						</button> <button className="btn btn-outline-secondary" onClick={() => this.openSocialPopUp('gitlab')}>
							Gitlab <i className="fab fa-gitlab"></i>
						</button> <button className="btn btn-outline-secondary" onClick={() => this.openSocialPopUp('bitbucket')}>
							Bitbucket <i className="fab fa-bitbucket"></i>
						</button>
					</ModalBody>
					<ModalFooter>
						<Button color="secondary" onClick={this.toggle}>Cancel</Button>
					</ModalFooter>
				</Modal>
				<nav className="navbar navbar-expand-lg navbar-light">
					<a className="navbar-brand" href="#">
						<b>Pyrite</b>
						<img src="/static/images/logo.png" width="32" height="32"></img>
					</a>

					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
						aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>

					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav mr-auto"></ul>
						<form className="form-inline my-2 my-lg-0">
							<input className="form-control mr-0 mr-sm-2 mb-2 mb-sm-0" type="search" placeholder="Search" aria-label="Search"></input>
							<button className="btn btn-outline-success mr-2" type="submit">Search</button>
							<button className="btn btn-outline-primary mr-2">Sign in</button>
							<button type="button" className="btn btn-outline-primary" onClick={this.toggle}>Log in</button>
						</form>
					</div>
				</nav>
				<div className="container mt-4">
					<CardColumns>
						{this.props.cards.map((e, k) => <CardComponent key={k} />)}
					</CardColumns>
				</div>
			</div>
		)
	}
}
