import { InferActionsTypes } from "./redux-store";



type DialogType = {
id: number
image: string
altname: string
name: string
}
type MessageType = {
id: number
message: string
}
export type InitialStateType = typeof initialState

// interface InitalInterfaceStateType {
//     dialogsData: [{
//         id: number
//         image: string
//         altname: string
//         name: string
//     }]
//     messagesData: [{
//         id: number
//         message: string
//     }]
// }

let initialState = {
    dialogsData: [
        { id: 1, image: 'https://www.film.ru/sites/default/files/filefield_paths/maxresdefault_1_24.jpg', altname: 'img', name: 'Dimych' },
        { id: 2, image: 'https://www.film.ru/sites/default/files/filefield_paths/maxresdefault_1_24.jpg', altname: 'img', name: 'Andrey' },
        { id: 3, image: 'https://www.film.ru/sites/default/files/filefield_paths/maxresdefault_1_24.jpg', altname: 'img', name: 'Sveta' },
        { id: 4, image: 'https://www.film.ru/sites/default/files/filefield_paths/maxresdefault_1_24.jpg', altname: 'img', name: 'Sasha' },
        { id: 5, image: 'https://www.film.ru/sites/default/files/filefield_paths/maxresdefault_1_24.jpg', altname: 'img', name: 'Viktor' },
        { id: 6, image: 'https://www.film.ru/sites/default/files/filefield_paths/maxresdefault_1_24.jpg', altname: 'img', name: 'Valera' },
    ] as Array<DialogType>,  // это к Dialogs елементам  1 часть

    messagesData: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How is your it-kamasutra?' },
        { id: 3, message: 'Yo' },
        { id: 4, message: 'Yo' },
        { id: 5, message: 'Yo' },
    ] as Array<MessageType>,// это к Dialogs елементам  2 часть    
}



const dialogsReduser = (state = initialState, action: ActionsType): InitialStateType => {

    switch (action.type) {
        case 'SEND_MESSAGE':
            let body = action.newMessageBody;
            return {
                ...state,
                messagesData: [...state.messagesData, { id: 6, message: body }]
            };
        default:
            return state;
    }

}


export type ActionsType = InferActionsTypes<typeof action>

export const action = {
    sendMessageCreator:(newMessageBody: string) => ({ type: 'SEND_MESSAGE', newMessageBody } as const) 
}

export default dialogsReduser;
