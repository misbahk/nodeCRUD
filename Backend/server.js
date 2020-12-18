const express = require("express");
const mongoose = require("mongoose");
const mongodb = require("./mongoconnec").mongoUrlName;
const bodyParser = require("body-parser")
const studentdata = require('./schema')
const student = express();
const cors = require('cors')



student.use(bodyParser.urlencoded({extended: false}))


student.use(bodyParser.json())


student.use(cors());

mongoose.connect(
    mongodb,{
        useNewUrlParser: true,
        dbName: 'studentInfo'
    },
)
.then(() => console.log("mongoDB succesfully connected!"))
.catch(err => console.log(err));

student.post("/studentINFOpost", (req, res) =>{

let saveStudentdata = new studentdata(req.body);
saveStudentdata.save()
.then(thenyes=>{
    res.send(thenyes)
    console.log("fifiifi", res)
}
    )


.catch(err=>console.log(err));

})

student.get("/studentgetInfo", (req, res)=>{
    studentdata.find()
    .then(thenyes=>res.send(thenyes))
    .catch(err=>res.send(err))

})

student.post("/filtereddname", (req, res)=>{
    studentdata.findOne({Name:req.body.Name})
    .then(thenfiltrrd=>res.send(thenfiltrrd))
    .catch(err=>res.send(err))
})


function addition(){
    var a = 10;
    var b = 20;
    var c = a + b;
    console.log("addition", c)
}

 addition();


const port = process.env.PORT || 5000;
student.listen(port, () => console.log(`Server is up and running on port ${port} !`));
