import { withComponents } from '@queries/component.query';
import { translation } from '@utils/i18n';
import Link from 'next/link';

export const Components = withComponents(({loading, components}: any ) => {
	if (loading || !components) return (
		<div>
			<b>
				<span>{translation('loading')}</span> <i className="fa fa-spinner fa-spin"></i>
			</b>
		</div>
	);
 
	return (
		<div className="row">
			{components.map((component) => (
				<div className="col-12 col-md-6 col-lg-4 mb-3" key={component._id}>
					<div className="card">
						<Link href={"/component/" + component.tag}>
							<a>
								<div className="card-body">
									<h5 className="text-muted card-title">{component.tag}</h5>
									<p className="text-muted card-text">{component.description}</p>
								</div>
							</a>
						</Link>
						<div className="card-footer">
							<button type="button" className="btn btn-primary btn-sm">
								{component.username} <i className="fa fa-user"></i>
							</button>
							<button type="button" className="btn btn-danger btn-sm float-right ml-1">
								{component.likes} <i className="fas fa-heart"></i>
							</button>
							<button type="button" className="btn btn-primary btn-sm float-right">
								{component.views} <i className="fa fa-eye"></i>
							</button>	
						</div>
					</div>
				</div>
			))}
		</div>
	);
});
