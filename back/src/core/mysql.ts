import mysql from 'mysql'

let conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'ingo123',
    database: 'notesgame'
})

conn.connect()

export default conn