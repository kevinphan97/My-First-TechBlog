const router = require('express').Router();
const {Post, Comment, User} = require('../../models');

router.get('/', (req, res) => {
    User.findAll(
        {
            attributes: {exclude: ['password']}
        }
    )

    .then(dbUserData => res.json(dbUserData))

    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
    User.findOne(
        {
            attributes: {exclude: ['password']},
            
            where: {
                id: req.params.id
            },
            
            include: [
                {
                    model: Post,
                    attributes: ['id', 'title', 'post_content', 'created_at']
                },

                {
                    model: Comment,
                    attributes: ['id', 'comment_entry', 'created_at'],
                    include: {
                        model: Post,
                        attributes: ['title']
                    }
                },

                {
                    model: Post,
                    attributes: ['title'],
                }
            ]
        }
    )
    .then(dbUserData => {
        if (!dbUserData) {
            res.status(404).json({message: 'There is no user associated with this ID.'});
            return;
        }
        res.json(dbUserData);
    })
    
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
    User.create(
        {
            email: req.body.email,
            username: req.body.username,
            password: req.body.password
        }
    )
    
    .then(dbUserData => {
        req.session.save(() => {
            req.session.user_id = dbUserData.id;
            req.session.username = dbUserData.username;
            req.session.loggedIn = true;
            res.json(dbUserData);
        });
    })

    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/login', (req, res) => {
    User.findOne(
        {
            where: {
                username: req.body.username
            }
        }
    )

    .then(dbUserData => {
        if(!dbUserData) {
            res.status(400).json({message: 'User not found!'});
            return;
        }

        const validPass = dbUserData.checkPassword(req.body.password);

        if(!validPass) {
            res.status(400).json({message: 'Incorrect password!'});
            return;
        }

        req.session.save(() => {
            req.session.user_id = dbUserData.id;
            req.session.username = dbUserData.username;
            req.session.loggedIn = true;
            res.json({message: 'You have been logged in!'});
        });
    })

    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/logout', (req, res) => {
    if(req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    }

    else {
        res.status(404).end();
    };
});

module.exports = router;