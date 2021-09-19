const sequelize = require('../config/connection');

const {User, Post} = require('../models');

const userData = [
    {
        username: 'testuser1',
        email: 'testuser1@test.com',
        password: 'Password123'
    },

    {
        username: 'testuser2',
        email: 'testuser2@test.com',
        password: 'Password123'
    },

    {
        username: 'testuser3',
        email: 'testuser3@test.com',
        password: 'Password123'
    },

    {
        username: 'testuser4',
        email: 'testuser4@test.com',
        password: 'Password123'
    },
    
    {
        username: 'testuser5',
        email: 'testuser5@test.com',
        password: 'Password123'
    },
    
    {
        username: 'testuser6',
        email: 'testuser6@test.com',
        password: 'Password123'
    },
    
    {
        username: 'testuser7',
        email: 'testuser7@test.com',
        password: 'Password123'
    }
];

const userSeeds = () => User.bullkCreate(userData, {individualHooks: true});

module.exports = userSeeds;