import { firebase, googleAuthProvider } from '../firebase/firebase-config';
import { type } from '../types/types';

export const startLoginEmailWithPassword = (email, password) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(login(123, 'Wilmer'));
        }, 3500);
    }
};

export const startRegisterWithEmailPassword = (email, password, name) => {
    return (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(async ({ user }) => {
                await user.updateProfile({
                    displayName: name
                });
                dispatch(login(user.uid, user.displayName));
            })
            .catch(err => {
                console.log(err);
            });
    };
}


export const startGoogleLogin = () => {
    return (dispatch) => {
        firebase.auth().signInWithPopup(googleAuthProvider)
            .then(({ user }) => {
                dispatch(login(user.uid, user.displayName));
            })
    }
}

export const login = (uid, displayName) => {
    return {
        type: type.login,
        payload: {
            uid,
            displayName
        }
    }
}