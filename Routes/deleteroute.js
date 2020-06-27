const express = require("express");
const router = express.Router();

var {reminderinfo} = require('../server/models/ReminderUpladModel');
var {pdffileinfo} = require('../server/models/PdfFileUploadModel');
var {docfileinfo} = require('../server/models/DocFileUploadModel');
var {photofileinfo} = require('../server/models/PhotoUploadModel');
var {videoinfo} = require('../server/models/VideoUploadModel');
var {audiofile} = require('../server/models/AudioUploadModel');
var {zipfileinfo} = require('../server/models/ZipUploadModel');
var {collectioninfo} = require('../server/models/NewCollectionModel');

var fs = require('fs');

router.post('/deletereminder',(req,res)=>{
    var data = req.body.data;
    console.log(req.body);
    var is_deleted = new Boolean(false);
    
    var jsonobject = JSON.parse(data);
    for(i = 0;i<jsonobject.length;i++){
        var id = jsonobject[i].id
        var query = {
            _id:id
        }
        console.log("ID == "+id);
            reminderinfo.deleteOne(query,function(err,response){
                console.log(response);
                if(err){
                    
                    console.log(err);
                   is_deleted = false;
                
                }
                else if(!response){
                    console.log("No User Found");
                    is_deleted = false;
                }
                else if(response==null){
                  is_deleted = false;
            
                }
              else{
                   is_deleted = true;
                }
            });


    }
    if(is_deleted){
        res.send({
            status:200,
            Message:"File deleted successfully",
            isResponse:true  
        });   
    
    }else{
        res.send({
            status:500,
            Message:"Server Error",
            isResponse:true  
        }); 
    }

    
});


router.post('/deletepdffiles',(req,res)=>{
    var data = req.body.data;
    var collectionname = req.body.collectionname;
    var username = req.body.username;
    var is_deleted = new Boolean(false);
    var jsonobject = JSON.parse(data);
    console.log(jsonobject);
        for(i = 0;i<jsonobject.length;i++){
            var fileTitle = jsonobject[i].filename;
            var filename = jsonobject[i].filetitle;
   
            var file_path ="./public/assets/PDfFiles/"+filename; 
            fs.unlink(file_path, function (err) {
                if (err) {
                    console.log(err);
                
                }else{
                    console.log('File deleted!');
                
                }
                // if no error, file has been deleted successfully
              
            }); 


            var query = {
                fileTitle:fileTitle,
                username:username,
                collectionname:collectionname
            }
            pdffileinfo.deleteOne(query,function(err,response){
                console.log(response);
                if(err){
                    
                    console.log(err);
                    is_deleted = false;
                }else{
                    is_deleted=true;
                     
                }
              
                
            });
        }
        if(is_deleted){
            res.send({
                status:200,
                Message:"File deleted successfully",
                isResponse:true  
            });   
        
        }else{
            res.send({
                status:500,
                Message:"Server Error",
                isResponse:true  
            }); 
        }

});

router.post('/deletedocfiles',(req,res)=>{
    var data = req.body.data;
    var collectionname = req.body.collectionname;
    var username = req.body.username;
    var is_deleted = new Boolean(false);
     var jsonobject = JSON.parse(data);
    console.log(jsonobject);
        for(i = 0;i<jsonobject.length;i++){
            var fileTitle = jsonobject[i].filename;
            var filename = jsonobject[i].filetitle;
            var file_path ="./public/assets/DocFiles/"+filename; 
            fs.unlink(file_path, function (err) {
                if (err) {
                    is_deleted = false;   
                }else{
                    console.log('File deleted!');
                   is_deleted= true;
                }
                // if no error, file has been deleted successfully
              
            }); 

            
            var query = {
                fileTitle:fileTitle,
                username:username,
                collectionname:collectionname
            }
            docfileinfo.deleteOne(query,function(err,response){
                console.log(response);
                if(err){
                    
                    console.log(err);
                    is_deleted = false;
                
                }else{
                   is_deleted=true;
                     
                }
              
                
            });
        }
        if(is_deleted){
            res.send({
                status:200,
                Message:"File deleted successfully",
                isResponse:true  
            });   
        
        }else{
            res.send({
                status:500,
                Message:"Server Error",
                isResponse:true  
            }); 
        }
     

});

router.post('/deletephotos',(req,res)=>{
    var data = req.body.data;
    var collectionname = req.body.collectionname;
    var username = req.body.username;
    var is_deleted = new Boolean(false);
    
    var filename = "";
     var jsonobject = JSON.parse(data);
    console.log(jsonobject);
        for(i = 0;i<jsonobject.length;i++){
           
            filename =  jsonobject[i].image_name;
            var file_path ="./public/assets/photos/"+filename; 
            fs.unlink(file_path, function (err) {
                if (err) {
                   is_deleted = false;  
                }else{
                    console.log('File deleted!');
                   is_deleted = true;
                }
                // if no error, file has been deleted successfully
                 
            }); 
             
      
            var query = {
                filename:filename,
                username:username,
                collectionname:collectionname
            }
            photofileinfo.deleteOne(query,function(err,response){
                console.log(response);
                if(err){
                    
                    console.log(err);
                   is_deleted = false;
                
                }else{
                    is_deleted = true;
                     }
              
                
            });
        }
        if(is_deleted){

            res.send({
                status:200,
                Message:"File deleted successfully",
                isResponse:true  
            });   
        
        }else{
            res.send({
                status:500,
                Message:"Server Error",
                isResponse:true  
            }); 
        }

});
router.post('/deletevideos',(req,res)=>{
    var data = req.body.data;
    var collectionname = req.body.collectionname;
    var username = req.body.username;
    var is_deleted = new Boolean(false);
     var jsonobject = JSON.parse(data);
    console.log(jsonobject);
        for(i = 0;i<jsonobject.length;i++){
           
            var filename = jsonobject[i].filename;
            var file_path ="./public/assets/Videos/"+filename; 
            fs.unlink(file_path, function (err) {
                if (err) {
                    console.log("Error = "+err);
                   is_deleted=false;
                }else{
                    console.log('File deleted!');
                   is_deleted = true;
                }
                // if no error, file has been deleted successfully
                 
            }); 
            var query = {
                filename:filename,
                username:username,
                collectionname:collectionname
            }
            videoinfo.deleteOne(query,function(err,response){
                console.log(response);
                if(err){
                    
                    console.log(err);
                    res.send({
                        status:500,
                        Message:"Server Error",
                        isResponse:true  
                    }); 
                
                }else{
                   
                     
                }
              
                
            });
        }
        if(is_deleted){
            res.send({
                status:200,
                Message:"File deleted successfully",
                isResponse:true  
            });   
        
        }else{
            res.send({
                status:500,
                Message:"Server Error",
                isResponse:true  
            }); 
        }

});
router.post('/deleteaudios',(req,res)=>{
    var data = req.body.data;
    var collectionname = req.body.collectionname;
    var username = req.body.username;
    var is_deleted = false;
     var jsonobject = JSON.parse(data);
    console.log(jsonobject);
        for(i = 0;i<jsonobject.length;i++){
           
            var filename = jsonobject[i].filename;
            var file_path ="./public/assets/audios/"+filename; 
            fs.unlink(file_path, function (err) {
                if (err) {
                    console.log("Error = "+err);
                   is_deleted = false;
                }else{
                    console.log('File deleted!');
                   is_deleted = true;
                }
                // if no error, file has been deleted successfully
                 
            }); 
            var query = {
                filename:filename,
                username:username,
                collectionname:collectionname
            }
            audiofile.deleteOne(query,function(err,response){
                console.log(response);
                if(err){
                    
                    console.log(err);
                   is_deleted = false;
                
                }else{
                   is_deleted = true;
                     
                }
              
                
            });
        }
        if(is_deleted){
            res.send({
                status:200,
                Message:"File deleted successfully",
                isResponse:true  
            });   
        
        }else{
            res.send({
                status:500,
                Message:"Server Error",
                isResponse:true  
            }); 
        }

});
router.post('/deletezipfiles',(req,res)=>{
    var data = req.body.data;
    var collectionname = req.body.collectionname;
    var username = req.body.username;
    var is_deleted = new Boolean(false);
    var jsonobject = JSON.parse(data);
    console.log(jsonobject);
        for(i = 0;i<jsonobject.length;i++){
            var fileTitle = jsonobject[i].filename;
            var filename = jsonobject[i].filetitle;
   
            var file_path ="./public/assets/ZipFiles/"+filename; 
            fs.unlink(file_path, function (err) {
                if (err) {
                    console.log(err);
                
                }else{
                    console.log('File deleted!');
                
                }
                // if no error, file has been deleted successfully
              
            }); 


            var query = {
                fileTitle:fileTitle,
                username:username,
                collectionname:collectionname
            }
            zipfileinfo.deleteOne(query,function(err,response){
                console.log(response);
                if(err){
                    
                    console.log(err);
                    is_deleted = false;
                }else{
                    is_deleted=true;
                     
                }
              
                
            });
        }
        if(is_deleted){
            res.send({
                status:200,
                Message:"File deleted successfully",
                isResponse:true  
            });   
        
        }else{
            res.send({
                status:500,
                Message:"Server Error",
                isResponse:true  
            }); 
        }

});

router.post('/deleteCollection',(req,res)=>{
    var data = req.body.data;
    var username = req.body.username;
    var is_deleted = new Boolean(false);
    var jsonobject = JSON.parse(data);
    console.log(jsonobject);
        for(i = 0;i<jsonobject.length;i++){
            var collectionname = jsonobject[i].collectionname;

            var query = {
              
                collectionname:collectionname
            }
            collectioninfo.deleteOne(query,function(err,response){
                console.log(response);
                if(err){
                    
                    console.log(err);
                    is_deleted = false;
                }else{
                    is_deleted=true;
                     
                }
              
                
            });
        }
        if(is_deleted){
            res.send({
                status:200,
                Message:"Collection deleted successfully",
                isResponse:true  
            });   
        
        }else{
            res.send({
                status:500,
                Message:"Server Error",
                isResponse:true  
            }); 
        }

});


module.exports = router;