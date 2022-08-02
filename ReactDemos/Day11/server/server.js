import express from "express";
import  cors from "cors";
const app  = express()
const port = '8000'
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors());

// We have to add endpoints 
// get put post delete
app.get("/", (req,res)=>
{
  res.send("Hello")
  console.log("Get method called")
})

app.post("/", (req,res)=>
{
  console.log("Post id called")
  res.send("Post")
})


app.post("/login", (req,res)=>
{
  console.log("Inside  login")
  const {username,password} =req.body;
  console.log(username)
  console.log(password)
   
  res.send(
    {
      token :'testtoken'
    }
  )
})

app.listen(port ,()=> {console.log("sever is lisetniening at 8000")})