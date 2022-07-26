const express = require('express');
const cors = require('cors')
const app = express();
app.use(express.json())

app.use(express.urlencoded({extended:true}))
app.use(cors());

app.post('/login', (req, res) => {
  console.log("INSIDE LOGIN")
  console.log("REQ IS " + req)
  const {username,password} =  req.body; 
  console.log(username)
  console.log(password)
  res.send({
    token: 'test123'
  });
});

app.listen(8082, () => console.log('API is running on http://localhost:8082/login'));