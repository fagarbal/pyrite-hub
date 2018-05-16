import React from 'react';
import Highlight from 'react-highlight.js'
import { Overview } from "./overview.component";

export default function (this: Overview) {
    return (
        <section className="overview">
            <div className="title"></div>
            <div className="container card over-header">
                <div className="row">
                    <div className="col-md-12 col-lg-8">
                        <h1 className="centered">{this.props.name}</h1>
                        <pre className="centered mb-4">
                            <b><a href={"http://www.pyritehub.com/components/" + this.props.name}>
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
                    <div className="col-md-12 col-lg-4">
                        <div className="card component-infocard">
                            <h3><i className="fas fa-user-circle user-image"></i>by FerranMrg</h3>
                            <hr />
                            <div className="row">
                                <div className="col-6">
                                    <button type="button" className="btn btn-outline-danger col-12">
                                        220 <i className="fas fa-heart"></i>
                                    </button>
                                </div>
                                <div className="col-6">
                                    <button type="button" className="btn btn-outline-primary col-12">
                                        10K <i className="fa fa-eye"></i>
                                    </button>
                                </div>
                            </div>
                            <br />
                            <h5>Component version</h5> 2.4.2
					</div>
                    </div>
                </div>
                <hr />
                <b>Example Usage</b>
                <Highlight language='html'>{
`<html>
	<head>
		<script src="http://www.pyritehub.com/components/`+ this.props.name + `"></script>
	</head>
	<body>
		<`+ this.props.name + `></` + this.props.name + `>
	</body>
</html>`
                }</Highlight>
            </div>
        </section>
    );
}