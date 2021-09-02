import { type } from '../types/types';

// const initialState = {
//     uid: 123123,
//     name: 'Wilmer',
//     dir: {
//         b: 12
//     }
// }

export const authReducer = (state = {}, action) => {
    switch (action.type) {
        case type.login:
            return {
                uid: action.payload.uid,
                name: action.payload.displayName
            };
        case type.logout:
            return {};
        default:
            return state;
    }
}