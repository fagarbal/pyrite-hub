import React, {Component} from 'react'
import Link from 'next/link'

export default class extends Component {
  static getInitialProps ({ query: { cards } }) {
    return { cards: cards }
  }

  render () {
    return (
      <div>
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
              <button className="btn btn-outline-primary">Log in</button>
            </form>
          </div>
        </nav>
        <div className="container mt-4">
          <div className="row">
            {this.props.cards.map((e, k) =>
              <div className="col-sm-6 col-md-4 col-lg-3 mb-4" key={k}>
                <a href="#">
                  <div className="card">
                    <img className="card-img-top" src="/static/images/example.png" alt="Card image cap"></img>
                    <div className="card-body">
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                  </div>
                </a>
              </div>
            )}
          </div>
          <button className="btn btn-outline-secondary" id="github-button">
            Github
              <i className="fab fa-github"></i>
          </button>
          <button className="btn btn-outline-secondary" id="gitlab-button">
            Gitlab
              <i className="fab fa-gitlab"></i>
          </button>
          <button className="btn btn-outline-secondary" id="bitbucket-button">
            Bitbucket
              <i className="fab fa-bitbucket"></i>
          </button>
        </div>
      </div>
    )
  }
}
