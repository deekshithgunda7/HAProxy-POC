const app1=require("express")()

require('dotenv').config()
const port1=process.env.PORT_1 || 3000
app1.get("/*",(req,res)=>{
   res.send(`Served  by ${port1}`)
})
app1.listen(port1,console.log(`Listening on ${port1}`))
