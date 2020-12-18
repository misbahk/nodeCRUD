const mongoose = require("mongoose");

const studentcollection = mongoose.Schema;


const studentDetails = new studentcollection({

Name :{
    type:String
},
className:{
    type:String
},
studentNumber:{
    type:Number
}

})

module.exports = mongoose.model("studentinfocollection", studentDetails);