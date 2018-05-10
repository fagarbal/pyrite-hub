import { Component } from 'react';
import dashboardTemplate from './dashboard.template';

interface IndexProps {
	cards: Array<any>;
	modal?: boolean;
}

interface IndexState {
	modal?: boolean;
	collapsed?: boolean;
}

class Dashboard extends Component<IndexProps, IndexState> {
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
        this.render = dashboardTemplate.bind(this);
	}

	componentDidMount() {
		this.setState({
			modal: this.props.modal || false
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
}

export default Dashboard;