import { Injectable } from '@nestjs/common';
import { Component } from './component.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ComponentService {
    constructor(@InjectRepository(Component) private readonly componentRepository: Repository<Component>) {}

    findAll() {
        return this.componentRepository.find();
    }
}