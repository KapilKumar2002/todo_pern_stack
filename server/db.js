import pg from 'pg';
const Pool = pg.Pool;

const pool = new Pool({
    user: "kapilkumar",
    password: "postgreskeps2002",
    host: "localhost",
    port: 5432,
    database: "perntodo",
})

export default pool;