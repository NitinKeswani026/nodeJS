module.exports = {
    development: {
        client: 'pg',
        connection: 'postgres://localhost/student',
        migrations: {
            directory: __dirname + '/db/migrations'
        },
        seeds: {
            directory: __dirname + '/db/seeds/dev'
        },
        useNullAsDefault: true
    },
    production: {
        client: 'pg',
        connection: process.env.DATABASE_URL,
        migrations: {
            directory: __dirname + '/db/migrations'
        },
        seeds: {
            directory: __dirname + '/db/seeds/production'
        },
        useNullAsDefault: true
    },
};