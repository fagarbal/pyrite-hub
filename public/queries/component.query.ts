import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const query = gql`
	query {
		components {
			_id
			tag
			username
			description
			likes
			views
		}
	}
`;

export const withComponents = graphql(query, {
	props: ({ data }) => {
		return { ...data };
	},
});
