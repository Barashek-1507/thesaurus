import { setUser } from '../reducers/userReducer';
import { auth, logIn, signUp } from '../../https/userAPI';

export const signIn = (
    username, firstname, lastname, password,
) => async (dispatch) => {
    await signUp(username, firstname, lastname, password);
};

export const authentication = () => async (dispatch) => {
    const response = await auth();
    await dispatch(setUser(response.value));
};

export const login = (email, password) => async (dispatch) => {
    const data = await logIn(email, password);
    localStorage.setItem('token', data.value.token);
    const response = await auth();
    dispatch(setUser(response.value));
};
