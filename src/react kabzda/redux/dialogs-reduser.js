const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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
}


const dialogsReduser = (state = initialState, action) => {

    switch (action.type) {        
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,                
                messagesData: [...state.messagesData, { id: 6, message: body }]
            };
        default:
            return state;
    }

}

export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody})


export default dialogsReduser;
