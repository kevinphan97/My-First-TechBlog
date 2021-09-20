const {Post} = require('../models');

const postData = [
    {
        title: 'Test',
        content: 'Labore sunt voluptate anim sint. Esse nisi do id in et Lorem veniam nisi est Lorem Lorem labore labore dolor. Cillum velit ex ipsum adipisicing et excepteur velit excepteur esse aliqua ipsum ea pariatur.',
        user_id: 1
    },

    {
        title: 'Test',
        content: 'Cupidatat nisi ipsum do anim aute. Tempor nostrud proident eiusmod voluptate culpa Lorem officia dolore pariatur incididunt ullamco cupidatat aute quis. Aliquip amet labore exercitation excepteur labore.',
        user_id: 2
    },

    {
        title: 'Test',
        content: 'Amet esse commodo fugiat ullamco officia voluptate esse consectetur incididunt tempor esse. Adipisicing laboris officia in eu dolore incididunt sunt dolor sint minim ullamco incididunt nostrud ipsum. Aliqua ullamco amet ipsum officia esse occaecat velit. Consectetur reprehenderit et ipsum laboris cillum commodo dolore nostrud anim sint.',
        user_id: 3
    },

    {
        title: 'Test',
        content: 'In Lorem enim consequat eu est pariatur non duis non. Commodo aliqua occaecat nisi nostrud Lorem ex. Qui magna in elit ipsum veniam sint deserunt. Deserunt adipisicing in ullamco reprehenderit fugiat sint veniam dolor. Nulla ullamco ad ad cillum minim. Occaecat officia cillum excepteur duis duis velit pariatur in dolore consequat esse culpa. Magna deserunt amet cillum incididunt magna consequat amet exercitation esse.',
        user_id: 4
    },

    {
        title: 'Test2',
        content: 'Excepteur aliqua aliquip occaecat ut excepteur ad velit esse. Anim irure ullamco consectetur ex laborum et esse officia. Veniam minim magna cillum aliquip cillum minim sit. Qui ad culpa voluptate sit. Fugiat ut sunt amet duis commodo Lorem sit in irure aliqua enim.',
        user_id: 5
    },

    {
        title: 'Test',
        content: 'Labore deserunt mollit ut adipisicing ea amet velit in enim deserunt exercitation qui eu amet. Cupidatat cillum reprehenderit deserunt veniam culpa. Labore fugiat in labore cillum in aliquip. Ut est incididunt dolore in voluptate mollit sit. Duis dolore qui irure laborum culpa ullamco. Veniam ad ea aute velit minim exercitation laboris. Mollit dolore deserunt tempor enim aliquip est magna esse aute incididunt.',
        user_id: 6
    },

    {
        title: 'Test',
        content: 'Occaecat minim magna ad et est adipisicing ex. Adipisicing occaecat esse eiusmod ut cupidatat consectetur aliqua sunt consectetur id ullamco qui irure. Aute et pariatur exercitation id esse reprehenderit. Deserunt irure proident eiusmod est irure dolor proident. Exercitation consequat nostrud amet nisi commodo eu duis eiusmod pariatur consequat minim cillum aute. Duis exercitation cupidatat ullamco veniam officia. Cillum dolor laborum minim incididunt laboris qui cupidatat velit excepteur labore.',
        user_id: 7
    },

    {
        title: 'Test',
        content: 'Ipsum est amet Lorem aliquip magna. Esse nulla in aliquip aute commodo anim. Proident mollit eiusmod reprehenderit officia qui eiusmod. Amet et ad elit nisi. Ipsum ad id aliquip commodo anim laboris ipsum labore. Sit non nulla commodo sit adipisicing sit aliquip dolore officia reprehenderit amet.',
        user_id: 1
    },

    {
        title: 'Test2',
        content: 'Elit do aliquip amet elit non labore qui amet nulla veniam aliquip. Mollit laborum incididunt ullamco amet proident aliqua aliqua. Ut mollit aliquip id in aute quis ex. Laboris proident consectetur id non. Nulla nostrud ad occaecat ea nulla voluptate voluptate Lorem occaecat sit non ea. Deserunt eiusmod deserunt eu Lorem in est nostrud. Qui nostrud cillum consequat in reprehenderit anim aute pariatur.',
        user_id: 2
    },

    {
        title: 'Test2',
        content: 'Irure quis deserunt culpa fugiat cupidatat aute ex duis ipsum sit amet fugiat Lorem sunt. Id excepteur culpa aute dolor ad cupidatat ipsum sit cillum fugiat. Veniam minim adipisicing labore magna non elit. Esse cupidatat duis et irure veniam deserunt labore culpa voluptate nulla commodo. Fugiat ut officia cupidatat dolor eiusmod do magna nulla laboris excepteur veniam. Exercitation eiusmod exercitation occaecat mollit aliqua occaecat voluptate veniam sint.',
        user_id: 3
    }
];

const postSeeds = () => Post.bulkCreate(postData);

module.exports = postSeeds;