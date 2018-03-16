const mongoose = require('../db.js');

// TODO: bcrypt password
const coachSchema = new mongoose.Schema({
  username: {type: String, unique: true},
  email: {type: String, unique: true},
  password: String,
  picture: String,
  datesAvail: String,

})


const CachModel = mongoose.model('msc-users', userSchema)




CoachModel.createCoach = (userData) => {
  const coach = new CoachModel({
    username: userData.username,
    email: userData.email,
    password: userData.password,
    picture: userData.picture
  })
  return coach.save();
}


module.exports = CoachModel;
