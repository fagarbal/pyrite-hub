import React, { Component } from 'react';
import Highlight from 'react-highlight.js'
import PyriteHead from '../public/components/dashboard/pyriteHead/pyriteHead.component';
import "./componentDetail.style.scss";

export default class extends Component<any> {
	static async getInitialProps({ query: { name } }) {
		return { name: name }
	}
	render() {
		return (
			<section className="component-detail">
			<PyriteHead></PyriteHead>
			<div className="container card over-header">
			<div className="row">
				<div className="col-md-8 col-sm-8">
					<h1 className="centered">{this.props.name}</h1>
					<pre className="centered mb-4">
						<b><a href={"http://www.pyritehub.com/components/" +this.props.name}>
						http://www.pyritehub.com/components/{this.props.name}
						</a></b>
					</pre>
					<br />
					<h2 className="centered">Component Demo</h2>
					<script src={`http://www.pyritehub.com/components/${this.props.name}`}></script>
					<pre className="card">
						<this.props.name></this.props.name>
					</pre>
				</div>
				<div className="col-md-4 col-sm-4">
					<div className="card component-infocard">
						<h3><i className="fas fa-user-circle user-image"></i>by FerranMrg</h3>
						<hr />
						<div className="row">
							<button type="button" className="btn btn-outline-danger col-md-5 col-sm-5 float-right mr-4">
								220 <i className="fas fa-heart"></i>
							</button>

							<button type="button" className="btn btn-outline-primary col-md-5 col-sm-5 float-right">
								10K <i className="fa fa-eye"></i>
							</button>
						</div>
						<br />
						<h5>Component version</h5> 2.4.2
					</div>
				</div>
			</div>
				<hr />

				<br/>

				<b>Example Usage</b>
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
		</section>
		)
	}
}
