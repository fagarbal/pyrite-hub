import { Connection, Repository } from 'typeorm';
import { User, Component } from './login.entity';

export const userProviders = [{
    provide: 'UserRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(User),
    inject: ['DbConnectionToken']
}];

export const componentProviders = [{
    provide: 'ComponentRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(Component),
    inject: ['DbConnectionToken']
}];