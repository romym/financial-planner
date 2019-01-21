module.exports = {
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: `${process.env.USERNAME}`,
    password: `${process.env.PASSWORD}`,
    database: `${process.env.DATABASE}`,
    entities: [
        `${process.env.ENTITIES}/**/**.entity{.ts,.js}`
    ],
    synchronize: true
}