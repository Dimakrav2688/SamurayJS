import profileReduser from "./profile-reduser";
import dialogsReduser from "./dialogs-reduser";
import sidebarReduser from "./sidebar-reduser";


let store = {
    _state: {
        profilePage: {
            postsData: [
                { id: 1, message: 'Hi, how are you?', likesCount: 12 },
                { id: 2, message: "It's my first post", likesCount: 57 },
                { id: 3, message: "bla bla", likesCount: 57 },
                { id: 4, message: "Dadada", likesCount: 57 },
            ], // это к MyPosts елементам
            newPostText: ''
        },
        dialogsPage: {
            dialogsData: [
                { id: 1, image: 'https://www.film.ru/sites/default/files/filefield_paths/maxresdefault_1_24.jpg', altname: 'suchka', name: 'Dimych' },
                { id: 2, image: 'https://www.film.ru/sites/default/files/filefield_paths/maxresdefault_1_24.jpg', altname: 'suchka', name: 'Andrey' },
                { id: 3, image: 'https://www.film.ru/sites/default/files/filefield_paths/maxresdefault_1_24.jpg', altname: 'suchka', name: 'Sveta' },
                { id: 4, image: 'https://www.film.ru/sites/default/files/filefield_paths/maxresdefault_1_24.jpg', altname: 'suchka', name: 'Sasha' },
                { id: 5, image: 'https://www.film.ru/sites/default/files/filefield_paths/maxresdefault_1_24.jpg', altname: 'suchka', name: 'Viktor' },
                { id: 6, image: 'https://www.film.ru/sites/default/files/filefield_paths/maxresdefault_1_24.jpg', altname: 'suchka', name: 'Valera' },
            ], // это к Dialogs елементам  1 часть


            messagesData: [
                { id: 1, message: 'Hi' },
                { id: 2, message: 'How is your it-kamasutra?' },
                { id: 3, message: 'Yo' },
                { id: 4, message: 'Yo' },
                { id: 5, message: 'Yo' },
            ],// это к Dialogs елементам  2 часть 

            newMessageBody: ''
        },

        sidebar: {

        }
    },


    _callSubscriber() {
        console.log('State changed');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },


    dispatch(action) {

        this._state.profilePage = profileReduser(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReduser(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReduser(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}



export default store;
window.store = store;




