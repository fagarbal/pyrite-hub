import gql from 'graphql-tag';
import { graphql, compose } from 'react-apollo';

const SIGIN_MUTATION = gql`
	mutation($username: String!, $password: String!) {
    signin(username: $username, password: $password) {
      logged
    }
  }
`;

export const withAuth = compose(
	graphql(SIGIN_MUTATION, { name: 'signin' }),
);