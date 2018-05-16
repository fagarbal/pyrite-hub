import { Component } from 'react';
import overviewTemplate from './overview.template';

interface OverviewProps {
	name?: string;
}

interface OverviewState {}

export class Overview extends Component<OverviewProps, OverviewState> {
	content: string;

	constructor(props) {
		super(props);
		this.render = overviewTemplate.bind(this);
		this.content = this.exampleContent();
	}

	exampleContent() {
		return `
			<html>
				<head>
					<script src="http://www.pyritehub.com/components/`+ this.props.name + `"></script>
				</head>
				<body>
					<`+ this.props.name + `></` + this.props.name + `>
				</body>
			</html>
		`;
	}
}
