const faker = require('faker');
const db = require('../config/connection');
const {User, Review} = require('../models');


db.once('open', async () => {
    await User.deleteMany();
  
    // create user data
    const userData = [];
    let _idNum = '626a013f56608fa165'
    for (let i = 0; i < 50; i += 1) {

      let _id = _idNum + JSON.stringify(Math.floor(Math.random()*(999999-100000+1)+100000));
      const username = faker.internet.userName();
      const email = faker.internet.email(username);
      const password = faker.internet.password();
      const reviewText = faker.random.words();
      const rating = 5;
      //const _id = faker.datatype.uuid();
  
      userData.push({ username, email, password, _id, savedReviews: {reviewText, rating, username, _id} });

    }
  
    const createdUsers = await User.collection.insertMany(userData);


    console.log('users created');
    process.exit(0);
});