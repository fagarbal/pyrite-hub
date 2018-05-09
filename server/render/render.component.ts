import { Injectable } from '@nestjs/common';
import * as next from 'next';
import { ServerResponse, IncomingMessage } from 'http';

@Injectable()
export class RenderService {
    next: next.Server;
    handle: (req: IncomingMessage, res: ServerResponse, parsedUrl?: next.UrlLike) => Promise<void>;

    async onModuleInit() {
        this.next = next({
            dev: process.env.NODE_ENV !== 'production'
        });

        this.handle = this.next.getRequestHandler();

        await this.next.prepare();
    }
}