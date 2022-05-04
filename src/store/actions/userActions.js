import {setDefaultUser, setUser} from '../reducers/userReducer';
import { auth, logIn, signUp } from '../../https/userAPI';

export const signIn = (
    username, firstname, lastname, password,
) => async (dispatch) => {
    await signUp(username, firstname, lastname, password);
};

export const authentication = () => async (dispatch) => {
    const response = await auth();
    await dispatch(setUser(response));
};

export const login = (username, password) => async (dispatch) => {
    const data = await logIn(username, password);
    localStorage.setItem('token', data.token);
    const response = await auth();
    dispatch(setUser(response));
};

export const signOut = () => async (dispatch) => {
    localStorage.removeItem('token')
    dispatch(setDefaultUser())
}
