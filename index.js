const express=require('express')
const cors=require('cors')

const server=express()

const PORT =3000 || process.env.PORT

server.use(cors())
server.use(express.json())
// app.use(express.json())


server.listen(PORT,()=>{
    console.log(`login server started at ${PORT}`);
})

server.post('/api/login',(req,res)=>{
    // handle post request
    console.log(req.body);
    res.redirect('https://google-login-frontend.vercel.app/dashboard')
})