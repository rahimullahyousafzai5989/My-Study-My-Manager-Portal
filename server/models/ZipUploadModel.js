var mongoose = require('mongoose');
  
var zipfileinfo = mongoose.model('zipfileinfo',{
    fileTitle:{
        type:String,
        required:true,
        minlength:1,
        trim:true
    },
   
    username:{
        type:String,
        required:true,
        minlength:1,
        trim:true
    },
    filename:{
        type:String,
        required:true,
        minlength:1,
        trim:true
    },
    collectionname:{
        type:String,
        required:true,
        minlength:1,
        trim:true
    }
    

});
module.exports = {
    zipfileinfo
}