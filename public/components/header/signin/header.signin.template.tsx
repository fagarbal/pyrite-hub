import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Alert } from 'reactstrap';
import { translation } from '@utils/i18n';
import { SignIn } from './header.signin.component';

export default function (this: SignIn) {
    return (
        <Modal isOpen={this.props.show} centered={true} backdrop="static" fade={false}>
            <ModalHeader>{translation('header.signinTitle')}</ModalHeader>
            <ModalBody className="ml-4 mr-4">
                <form>
                    {this.state.error ? 
                        <Alert color="danger" isOpen={this.state.error} toggle={this.removeError}>
                            {translation('header.errorPassword')}
                        </Alert> : null
                    }
                    <div className="form-group">
                        <label><b>{translation('header.username')}</b></label>
                        <input type="email" className="form-control" required onInput={(event: any) => this.setState({ username: event.target.value })}/>
                    </div>
                    <div className="form-group">
                        <label><b>{translation('header.password')}</b></label>
                        <a className="float-right" href="">{translation('header.forgot')}</a>
                        <input type="password" className="form-control" required onInput={(event: any) => this.setState({ password: event.target.value })}/>
                    </div>

                    <div className="col-sm-4 offset-sm-4">
                        <button className="btn btn-primary btn-block" onClick={this.signin}>{translation('header.signin')}</button>
                    </div>

                    <hr/>
                    <p className="text-center">{translation('header.or')}</p>
                    <hr/>

                    <a className="btn btn-outline-dark btn-block" href="/auth/github">
                        <i className="fab fa-github"></i><span> {translation('header.signinWith')} Github</span>
                    </a>
                    <a className="btn btn-outline-dark btn-block" href="/auth/gitlab">
                        <i className="fab fa-gitlab"></i><span> {translation('header.signinWith')} Gitlab</span>
                    </a>
                    <a className="btn btn-outline-dark btn-block" href="/auth/bitbucket">
                        <i className="fab fa-bitbucket"></i><span> {translation('header.signinWith')} Bitbucket</span>
                    </a>
                </form>
            </ModalBody>
            <ModalFooter>
                <button className="btn btn-danger" onClick={this.props.toggle}>{translation('cancel')}</button>
            </ModalFooter>
        </Modal>
    );
};