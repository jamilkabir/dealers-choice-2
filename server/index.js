const express = require('express')
const volleyball = require('volleyball')
const path = require('path')
const { env } = require('process')
const PORT = process.env.PORT || 3000

const app = express()
app.use(express.static(path.join(__dirname,"./public")))



app.use(volleyball)

app.get('/',async(req,res,next)=>{
    try {
        res.sendFile(path.join(__dirname,'./public/index.html'))
    } catch (error) {
        console.log(error)
        next(error)
    }
    
})


const init = ()=>{
    app.listen(PORT,()=>{
        console.log(`Listening on PORT ${PORT}`)
    })
}

init();

