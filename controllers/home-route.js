const router = require('express').Router();
const sequelize = require('../config/connection');
const {Post, Comment, User} = require('../models/');

router.get('/', (req, res) => {
    Post.findAll({
        attributes: ['id', 'title', 'content', 'created_at'],

        include: [{
            model: Comment,
            attributes: ['id', 'comment_entry', 'post_id', 'user_id', 'created_at'],
            include: {
                model: User,
                attributes: ['username']
            }
        },

        {
            model: User,
            attributes: ['username']
        }
        ]
    })
    
    .then(dbPostData => {
        const posts = dbPostData.map(post => post.get({plain:true}));
        res.render('homepage', {posts, loggedIn: req.session.loggedIn});
    })

    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/login', (req, res) => {
    if(req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

router.get('/signup', (req, res) => {
    res.render('signup');
});

router.get('/post/:id', (req, res) => {
    Post.findOne(
        {
            where: {
                id: req.params.id
            },

            attributes: ['id', 'title', 'content', 'created_at'],

            include: [{
                model: Comment,
                attributes: ['id', 'comment_entry', 'post_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },

            {
                model: User,
                attributes: ['username']
            }
            ]
    })
    
    .then(dbPostData => {
        if(!dbPostData) {
            res.status(404).json({message: 'There is no post associated with this id.'});
            return;
        }
        const posts = dbPostData.get({plain:true});
        res.render('singlepost', {posts, loggedIn: req.session.loggedIn});
    })

    .catch(err => {
        console.log(err);
        res.status(500).json(err)
    });
});

module.exports = router;