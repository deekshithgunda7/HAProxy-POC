const app2=require("express")()
require('dotenv').config()

const port2=process.env.PORT_2 || 3000
app2.get("/*",(req,res)=>{
    res.send(`Served  by ${port2}`)
 })

app2.listen(port2,()=>console.log(`Listening on ${port2}`))