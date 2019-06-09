import {Router} from 'express'
import conn from '../core/mysql'

const Api = Router()
.post('/submit-score', async (req, res) => {
    const {score, nick} = req.body
    conn.query(
        'INSERT INTO score VALUES (default, ?, ?)', 
        [nick, score],
        (err, result) => {
            if (err) {
                return res.json(false)
            }

            return res.json(true)
        })
})

export default Api