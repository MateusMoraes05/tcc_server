import express from "express"
import mysql from "mysql"
 
const app = express()
 
app.use(express.json())

 
const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database: 'tcc_db'
  });

app.post("/animal", (req, res)=>{
    const {raca} = req.body
    connection.query(
        "SELECT * FROM `animal` WHERE `raca` = ?",
        [raca],
        (error, result)=>{
            if(error) {
                console.log(error)
            }
            res.json(result)
        }
    )
})


app.listen(3000, "10.0.3.247")