"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const constants_1 = require("../constants");
exports.databaseProviders = [
    {
        provide: constants_1.DB_CONECTION,
        useFactory: async () => await typeorm_1.createConnection({
            type: 'mariadb',
            host: process.env.DB_HOST,
            port: parseInt(process.env.DB_PORT),
            username: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE,
            entities: [
                __dirname + '/../**/*.entity{.ts,.js}',
            ],
            synchronize: true
        }),
    },
];
//# sourceMappingURL=database.providers.js.map