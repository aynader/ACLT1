// #Task route solution
const express = require('express');
const router = express.Router();

const User = require("../Models/User");
const user_controller = require("./userController");



exports.index_get = (req, res) => {
    res.send("NOT IMPLEMENTED: index create GET");
  };


  /* router.post('/user/create', async (req, res) => {
    try {
        const user = new User({
            Name: req.body.Name,
            Email: req.body.Email,
            Age: req.body.Age,
            BornIn: req.body.BornIn,
            LivesIn: req.body.LivesIn,
            MartialStatus: req.body.MartialStatus,
            PhoneNumber: req.body.PhoneNumber,
            Job: req.body.Job
        });
        await user.save();
        res.status(200).send(user);
    } catch (error) {
        res.status(500).send(error);
    }
});
*/




exports.user_create_get = (req, res) => {
    res.send("NOT IMPLEMENTED: user create GET");
  };
exports.user_create_post = (req, res) => {
  try {
    const user = new User({
        Name: req.body.Name,
        Email: req.body.Email,
        Age: req.body.Age,
        BornIn: req.body.BornIn,
        LivesIn: req.body.LivesIn,
        MartialStatus: req.body.MartialStatus,
        PhoneNumber: req.body.PhoneNumber,
        Job: req.body.Job
    })
     user.save();
    res.status(200).send(req.body);
} catch (error) {
    res.status(500).send(error);
    console.log(error);
}
  };
exports.user_update_get = (req, res) => {
    res.send("NOT IMPLEMENTED: user update GET");
  };
exports.user_update_put = (req, res) => {
  try {
     User.updateOne({'id': req.params.id}, {$set: {
        Email: req.body.Email,
        Age: req.body.Age,
        BornIn: req.body.BornIn,
        LivesIn: req.body.LivesIn,
        MartialStatus: req.body.MartialStatus,
        PhoneNumber: req.body.PhoneNumber,
        Job: req.body.Job
    }}).then((err,data) => {
        if(err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(data);
        }
    });
} catch (error) {
    res.status(500).send(error);
}
  };
exports.user_delete_get = (req, res) => {
    res.send("NOT IMPLEMENTED: user delete GET");
  };
exports.user_delete_post = (req, res) => {
  try {
     User.deleteOne({'id': req.params.id}).then((err,data) => {
        if(err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(data);
        }
    });
} catch (error) {
    res.status(500).send(error);
}
  };

exports.user_view_get = (req, res) => {
  try {
     User.find({'id': req.params.id}).then((err,data) => {
       if(err) {
           res.status(500).send(err);
       } else {
           res.status(200).send(data);
       }
   });
   
} catch (error) {
   res.status(500).send(error);
}
};










  //-------------------------------------------
exports.user_get = (req, res) => {
    res.send("NOT IMPLEMENTED: user GET");
  };

exports.user_post = (req, res) => {
    res.send("NOT IMPLEMENTED: user POST");
  };
  
  

router.get('/' , user_controller.index_get); 

router.get('/user' , user_controller.user_get); 

router.post('/user' , user_controller.user_post); 

router.get('/user/create' , user_controller.user_create_get); 

router.post('/user/create' , user_controller.user_create_post); 

router.get('/user/:id' , user_controller.user_view_get); 

router.get('/user/:id/update' , user_controller.user_update_get); 

router.put('/user/:id/update' , user_controller.user_update_put); 

router.get('/user/:id/delete' ,user_controller.user_delete_get); 

router.post('/user/:id/delete' , user_controller.user_delete_post); 



module.exports = router;
