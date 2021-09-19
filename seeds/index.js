const userSeeds = require('./user-seed');
const commSeeds = require('./comment-seed');
const postSeeds = require('./post-seed');

const sequelize = require('../config/connection');

const seedData = async => {
    await sequelize.sync({force: true});
    console.log('Waiting for data to seed...');
    await userSeeds();
    console.log('User data seeded...');
    await postSeeds();
    console.log('Posts data seeded...');
    await commSeeds();
    console.log('Comment data seeded...');
    console.log('All data has been seeded!');

    process.exit(0);

};

seedData();