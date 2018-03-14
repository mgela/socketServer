'use strict';
const userModel = require('../models/userModels');

exports.auth = async (req, res) => {
   try{
     const userz = await userModel.checkUser(req.body.email)
     await console.log(userz, 'userz');
     if (userz === undefined) userModel.createUser(req.body)
     res.sendStatus(200);
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
