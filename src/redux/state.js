let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you ?', likesCount: 11},
            {id: 2, message: 'It\'s my first post', likesCount: 24},
            {id: 3, message: 'It\'s my first post', likesCount: 7},
            {id: 4, message: 'It\'s my first post', likesCount: 3}
        ],
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Maria'},
            {id: 4, name: 'Kolay'},
            {id: 5, name: 'Sveta'},
            {id: 6, name: 'Victor'}
        ],
        meMessages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How is your it-kamasutra ?'},
            {id: 3, message: 'What stage are you at ?'},
            {id: 4, message: 'Wonderful.\n' +
                    'Traveling by plane now'},
            {id: 5, message: 'Yo'}
        ],
        usersMessages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'Excellent. Learning )'},
            {id: 3, message: 'I got acquainted with the base.' +
                    '\n' +
                    'And how are you doing ?'},
            {id: 4, message: 'Yo'},
            {id: 5, message: 'Hi'}
        ]
    },
    sidebar: {}
}

export default state;