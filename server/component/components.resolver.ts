import { Query, Resolver } from '@nestjs/graphql';
import { ComponentService } from './components.service';

@Resolver('Component')
export class ComponentResolver {
	constructor(private readonly componentsService: ComponentService) { }

	@Query()
	components() {
		return this.componentsService.findAll();
	}
}