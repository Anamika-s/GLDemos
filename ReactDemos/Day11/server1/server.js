import express from "express";
import  cors from "cors";
import cookieParser from "cookie-parser";
import session from  "express-session"
const app  = express()
 
const port = '8000'
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors());
app.use(cookieParser());
app.use(session(
  {
     secret:"thisismykey" ,
     name:"SessionId" ,
     resave:false

  })
)
// We have to add endpoints 
// get put post delete
app.get("/createcookies", (req,res)=>
{
  res.cookie("name" , "anamika");
  res.cookie("pass" , "123" , {maxAge:1000});
  res.send("Cookies will be set here")
   
})
app.get("/getcookies", (req,res)=>
{
   
    console.log(req.cookies.name)
   
  res.send("Cookies will be retreived from here")
   
})

app.get("/deletecookies", (req,res)=>
{
  res.send("Cookies will be deleted from here")
   
})

 
app.get("/countusers", (req,res)=>
{
   
  req.session.mobile="IPhone";
  res.locals.data = req.session.mobile;
  if(req.session.count)
  {
    req.session.count++;


  }
  else
  req.session.count = 1;
  res.send(`Count of req.session :  ${req.session.count}`)
})
app.get("/createsession", (req,res)=>
{ 
  if(req.session.mobile)
  {
    console.log("true")
  // console.log(ssn.mobile)
    // res.send("true")
    res.send(`Mobile Name is ${req.session.mobile}`)
  }
  // console.log(res.session.mobile)
  // console.log(req.session)

  // console.log(req.session.id)
  // console.log(req.session.cookie)
  // res.send(req.session)
})
app.get("/getsession", (req,res)=>
{
   
    console.log(req.cookies.name)
   
  res.send("Cookies will be retreived from here")
   
})

app.get("/deletesession", (req,res)=>
{
  req.session.destroy(()=>{
  console.log("Sessiom Deleted")
})
  res.send("Session will be destroyed from here")
   
})

 
app.listen(port ,()=> {console.log("sever is lisetniening at 8000")})