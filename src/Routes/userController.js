// #Task route solution
const express = require('express');
const router = express.Router();

const User = require("../Models/User");
const user_controller = require("./userController");

exports.index_get = (req, res) => {
    res.send("NOT IMPLEMENTED: index create GET");
  };

exports.user_create_get = (req, res) => {
    res.send("NOT IMPLEMENTED: user create GET");
  };
exports.user_create_post = (req, res) => {
    res.send("NOT IMPLEMENTED: user create POST");
  };
exports.user_update_get = (req, res) => {
    res.send("NOT IMPLEMENTED: user update GET");
  };
exports.user_update_post = (req, res) => {
    res.send("NOT IMPLEMENTED: user update POST");
  };
exports.user_delete_get = (req, res) => {
    res.send("NOT IMPLEMENTED: user delete GET");
  };
exports.user_delete_post = (req, res) => {
    res.send("NOT IMPLEMENTED: user delete POST");
  };

exports.user_view_get = (req, res) => {
    res.send("NOT IMPLEMENTED: user view GET");
  };
  

router.get('/' , user_controller.index_get); 

router.get('/user/create' , user_controller.user_create_get); 

router.post('/user/create' , user_controller.user_create_post); 

router.get('/user/:id' , user_controller.user_view_get); 

router.get('/user/:id/update' , user_controller.user_update_get); 

router.post('/user/:id/update' , user_controller.user_update_post); 

router.get('/user/:id/delete' ,user_controller.user_delete_get); 

router.post('/user/:id/delete' , user_controller.user_delete_post); 

//_________________________________________
/*
router.post('/user', function(req, res){

    const user = new User({

        Name: req.Name,
        Email: req.Email,
        Age: req.Age,
        BornIn: req.BornIn,
        LivesIn: req.LivesIn,
        MartialStatus: req.MartialStatus,
        PhoneNumber: req.PhoneNumber,
        Job: req.Job,
       
        
    });

    //user.save()
    return res.status(200).json({msg: user });

    /*
    Name : "Ahmed",
        Email : "a.tarek@guc.edu.eg",
        Age : 21,
        BornIn :  "Cairo",
        LivesIn : "Berlin",
        MartialStatus : "Single",
        PhoneNumber : "01000000000",
        Job : "Student"
      
    
});

router.get('/user', (req, res) =>{
    //res.send('id: ' + req.params.id);
    // User.findById(req.params.id).then((result) => {
    //     console.log(result);
    // })
    User.findOne({Name: req.params.Name}, (err,users) => {
        if (err) return  res.status(200).send("error ya basha");
        else{
            res.status(200).send(users[0]);
        }
    })
    // User.find({_id: req.params.id}, "name age", (err, users) => {
    //     if (err) return  res.status(200).send("error ya basha");
    //     else{
    //         res.status(200).send(users[0]);
        // }
    });

  

  
*/

module.exports = router;