import gql from 'graphql-tag';
import { graphql, compose } from 'react-apollo';

const SIGNIN_MUTATION = gql`
	mutation($username: String!, $password: String!) {
    signin(username: $username, password: $password) {
      logged
    }
  }
`;

const LOGOUT_MUTATION = gql`
	mutation {
    logout {
      logged
    }
  }
`;

export const withAuth = compose(
	graphql(SIGNIN_MUTATION, { name: 'signin' }),
	graphql(LOGOUT_MUTATION, { name: 'logout' }),
);