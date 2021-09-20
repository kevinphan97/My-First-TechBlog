const router = require('express').Router();
const sequelize = require('../config/connection');
const {Post, Comment, User} = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => {
    Post.findAll({
        where: {
            user_id: req.session.user.id
        },

        attributes: ['id', 'title', 'content', 'created_at'],

        include: [{
            model: Comment,
            attributes: ['id', 'comment_entry', 'post_id', 'user_id', 'created_at'],
            include: {
                model: User,
                attributes: ['username']
            }
        }]
    })

    .then(dbPostData => {
        const posts = dbPostData.map(post => post.get({plain:true}));
        res.render('dashboard', {posts, loggedIn: true});
    })

    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/edit/:id', withAuth, (req, res) => {
    Post.findOne({
        where: {
            user_id: req.session.user.id
        },

        attributes: ['id', 'title', 'content', 'created_at'],

        include: [{
            model: Comment,
            attributes: ['id', 'comment_entry', 'post_id', 'user_id', 'created_at'],
            include: {
                model: User,
                attributes: ['username']
            }
        }]
    })

    .then(dbPostData => {
        if(!dbPostData) {
            res.status(404).json({message: 'There is no post associated with this id.'});
            return;
        }
        const posts = dbPostData.get({plain: true});
        res.render('editpost', {posts, loggedIn: true});
    })

    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/new', (req, res) => {
    res.render('addpost');
});

module.exports = router;