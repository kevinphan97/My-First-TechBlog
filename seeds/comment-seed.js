const {Comment} = require('../models');

const commData = [
    {
        comment_entry: 'Velit elit id sint in et tempor sunt occaecat irure ut et.',
        user_id: '1',
        post_id: '10'
    },

    {
        comment_entry: 'Enim incididunt elit tempor occaecat mollit anim laboris et laboris labore fugiat id ad duis.',
        user_id: '2',
        post_id: '9'
    },

    {
        comment_entry: 'Labore nisi irure anim eiusmod ea cupidatat eiusmod.',
        user_id: '3',
        post_id: '8'
    },

    {
        comment_entry: 'Ut incididunt pariatur commodo incididunt ipsum.',
        user_id: '4',
        post_id: '7'
    },

    {
        comment_entry: 'Officia ut Lorem deserunt pariatur enim eiusmod ipsum.',
        user_id: '5',
        post_id: '6'
    },

    {
        comment_entry: 'Aliquip reprehenderit commodo consequat aute ut nulla ea deserunt ullamco elit.',
        user_id: '6',
        post_id: '5'
    },

    {
        comment_entry: 'Ad Lorem excepteur officia nulla reprehenderit.',
        user_id: '7',
        post_id: '4'
    },

    {
        comment_entry: 'Eu ullamco ad ut proident ea dolor sit.',
        user_id: '1',
        post_id: '3'
    },

    {
        comment_entry: 'Veniam voluptate pariatur nulla incididunt dolor.',
        user_id: '2',
        post_id: '2'
    },

    {
        comment_entry: 'Tempor minim minim nulla consectetur ea velit consequat adipisicing proident aliqua officia duis voluptate.',
        user_id: '3',
        post_id: '1'
    },

    {
        comment_entry: 'Aliqua irure duis dolore in magna duis mollit laborum consequat ea nostrud.',
        user_id: '4',
        post_id: '10'
    },

    {
        comment_entry: 'Laboris anim incididunt incididunt aute voluptate anim do qui eiusmod.',
        user_id: '5',
        post_id: '9'
    },

    {
        comment_entry: 'Culpa irure laborum aliqua elit non nulla veniam exercitation pariatur labore cillum ex.',
        user_id: '6',
        post_id: '8'
    },

    {
        comment_entry: 'Sunt sit id ex occaecat Lorem.',
        user_id: '7',
        post_id: '5'
    }
];

const commSeeds = () => Comment.bulkCreate(commData);

module.exports = commSeeds;