const app=require("express")()
require('dotenv').config()
const port=process.env.PORT || 3000


app.get("/*",(req,res)=>{
   res.send(`Served  by ${port}`)
})

app.listen(port,console.log(`Listening on ${port}`))
