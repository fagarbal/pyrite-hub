import React, { Component } from 'react';
import Highlight from 'react-highlight.js'

export default class extends Component<any> {
	static async getInitialProps({ query: { name } }) {
		return { name: name }
	}
	render() {
		return (
			<div className="container">
                <h1>{this.props.name}</h1>
				<br/>

				<b><a href={"http://www.pyritehub.com/components/" +this.props.name}>
				http://www.pyritehub.com/components/{this.props.name}
				</a></b>
				<br/>
				<br/>

				<b>Example</b>
				<br/>

				<Highlight language='html'>
				{
`<html>
	<head>
		<script src="http://www.pyritehub.com/components/`+this.props.name+`"></script>
	</head>
	<body>
		<`+this.props.name+`></`+this.props.name+`>
	</body>
</html>`}
				</Highlight>
			</div>
		)
	}
}
