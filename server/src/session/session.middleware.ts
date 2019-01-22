import { Middleware, NestMiddleware, ExpressMiddleware } from '@nestjs/common';
import * as expressSession from 'express-session';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TypeormStore } from 'connect-typeorm';

import { Session } from './session.entity';

@Middleware()
export class SessionMiddleware implements NestMiddleware {
    constructor(
        @InjectRepository(Session)
        private readonly sessionRepository: Repository<Session>
    ) { }

    resolve(): ExpressMiddleware {
        return expressSession({
            store: new TypeormStore({ ttl: 86400 }).connect(this.sessionRepository),
            secret: 'secret'
        });
    }
}