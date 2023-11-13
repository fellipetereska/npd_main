import mysql from "mysql";

export const db = mysql.createConnection({
    host: 'db4free.net', port: 3306,
    user: 'npd_ldn',
    password: 'npd@#ldn!$',
    database: 'db_npd'
})
