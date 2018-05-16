import { Card, CardBody, CardTitle, CardText, CardFooter, CardColumns } from 'reactstrap';
import { withComponents } from '@queries/component.query';

export const Components = withComponents(({loading, components}: any ) => {
	if (loading || !components) return (
		<div>
			<b>
				<span>Loading </span> <i className="fa fa-spinner fa-spin"></i>
			</b>
		</div>
	);
 
	return (
		<CardColumns>
			{components.map((component) => (
				<Card className="card bg-white" key={component._id}>
					<a href={"/component/" + component.tag}>
						<CardBody>
							<CardTitle className="text-muted">{component.tag}</CardTitle>
							<CardText className="text-muted">{component.description}</CardText>
						</CardBody>
					</a>
					<CardFooter>
						<button type="button" className="btn btn-outline-primary btn-sm">
							{component.username} <i className="fa fa-user"></i>
						</button>
						<button type="button" className="btn btn-outline-danger btn-sm float-right ml-1">
							{component.likes} <i className="fas fa-heart"></i>
						</button>
						<button type="button" className="btn btn-outline-primary btn-sm float-right">
							{component.views} <i className="fa fa-eye"></i>
						</button>	
					</CardFooter>
				</Card>
			))}
		</CardColumns>
	);
});
