import { firebase, googleAuthProvider } from '../firebase/firebase-config';
import { type } from '../types/types';
import { startLoading, finishLoading } from './ui';

export const startLoginEmailWithPassword = (email, password) => {
    return (dispatch) => {

        dispatch(startLoading())

        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(({ user }) => {
            dispatch(login(user.uid, user.displayName));
            dispatch(finishLoading());
        })
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

export const startLogout = () => {
    return async (dispatch)=>{
        await firebase.auth().signOut();
        
        dispatch(logout());
    }
}

export const logout = ()=>{
    return {
        type: type.logout
    }   
}
