const faker = require('faker');
const db = require('../config/connection');
const {User, Review} = require('../models');


db.once('open', async () => {
    await User.deleteMany();
  
    // create user data
    const userData = [];
    const reviewData = [];
  
    for (let i = 0; i < 50; i += 1) {

      const username = faker.internet.userName();
      const email = faker.internet.email(username);
      const password = faker.internet.password();
      const review_text = "This is a great review";
      const stars = 5;
  
      userData.push({ username, email, password });
      reviewData.push({  })

    }
  
    const createdUsers = await User.collection.insertMany(userData);


    console.log('users created');
    process.exit(0);
});