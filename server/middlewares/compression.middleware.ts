import * as compression from 'compression';
import { NestMiddleware, Injectable } from '@nestjs/common';
import { RequestHandler } from 'express';

@Injectable()
export class ExpressCompressionMiddleware implements NestMiddleware {
    public resolve(): RequestHandler {
        return compression({
            filter(req, res) {
                if (req.headers.compression) return false;
                return compression.filter(req, res);
            }
        });
    }
}