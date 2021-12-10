
let rerenderEntireTree = () =>{
    console.log('State changed')
}


type PostsType = {
    id: number
    massage: string
    likesCount: number
}

type MassagesType = {
    id: number
    massage: string
}

type DialogType = {
    id: number
    name: string
}

type sidebar = {}

type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
}

type DialogsPageType = {
    massages: Array<MassagesType>
    dialogs: Array<DialogType>
}

type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: sidebar
}


let state: RootStateType = {
    profilePage: {
        posts: [
            {id: 1, massage: 'Hi, how are you?', likesCount: 12},
            {id: 2, massage: 'Its my 1st post', likesCount: 10},
            {id: 2, massage: 'Lol', likesCount: 777},
            {id: 2, massage: 'Ho are you?', likesCount: 5},
        ],
        newPostText: "New Text"
    },
    dialogsPage: {
        massages: [
            {id: 1, massage: "HI"},
            {id: 2, massage: "Hawatb budesh?"},
            {id: 3, massage: "Yeah bitch"},
            {id: 4, massage: 'Yo'},
        ],
        dialogs: [
            {id: 1, name: 'Anton'},
            {id: 2, name: 'Dinara'},
            {id: 3, name: 'Miha'},
            {id: 4, name: 'Andrew'},
            {id: 5, name: 'Nikolay'},
            {id: 6, name: 'Valera'}
        ]
    },
    sidebar: {}
}

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = "";
    rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export const subscribe= (observer) => {
    rerenderEntireTree = observer; // Наблюдатель паттерн(observer)
}

export default state;