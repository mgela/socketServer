'use strict';
const userModel = require('../models/userModels');

//TODO bcrypt password

exports.auth = async (req, res) => {
   try{
     //meaning custom login
     if (req.body.password){
       let userData = {
         username: req.body.name,
         email: req.body.email,
         password: req.body.password,
         picture: req.body.picture
       }
       console.log(userData, 'userdata');
       const userz = await userModel.checkUser(userData.email)
       if (userz === null) await userModel.createUser(userData)
     } else {
       let userData = {
         username: req.body.name,
         email: req.body.email,
         password: null,
         picture: req.body.picture
       }
       const userz = await userModel.checkUser(userData.email)
       if (userz === null) await userModel.createUser(userData)
     }
     res.sendStatus(200);
   } catch (e){
     res.sendStatus(500);
   }
}
exports.listCoaches = async (req, res)=> {
  try {
    console.log(23);
    const coaches = await userModel.getCoaches()
    res.send(coaches)
  } catch (e) {
    console.log(e);
  }

}

exports.signUp = async (req, res) => {
   try{
     console.log(req.body, 'req body');
     const user = await userModel.checkUserLogin(req.body.username, req.body.password)
     if (!user){
       res.sendStatus(400);
     } else {
       await res.send(JSON.stringify(user))
     }

   } catch (e){
     res.sendStatus(500);
   }
}

exports.checkBackendForUser =  async (req, res) => {
  try {
    const user = await userModel.findOrCreate(req.body);
    if (user !== undefined) {
      console.log(user);
      res.status(200).json(user);
    }
  } catch (e) {
    res.status(400).json({
      errors: [e.message]
    });
  }
}
