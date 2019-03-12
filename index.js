const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const jsonfile = require('jsonfile');
const file = './data.json';

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post('/post',(req,res)=>{
  let obj = req.body;
  jsonfile.writeFile(file, obj)
  .then(res=>{
    console.log("write complete");
  })
  .catch(error=>{
    console.log(error);
  })

  res.send("data has been successfully written");
});

app.get('/', (req, res)=>{

  jsonfile.readFile(file)
  .then(obj=>res.json(obj))
  .catch(error=>console.error(error))
});



app.listen(5000);