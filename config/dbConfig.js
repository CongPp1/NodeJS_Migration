const DB = require('pg').Pool;

const db = new DB({
    host: 'localhost',
    user: 'postgres',
    port: 5433,
    password: 'giathinh1996',
    database: 'postgres_migration'
})

module.exports = db;