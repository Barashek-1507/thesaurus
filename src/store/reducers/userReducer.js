const USER = 'USER';
const SET_USER = 'SET_USER';

const defaultState = {
    username: '',
    name: '',
    lastname: '',
    id: '',
    role: USER,
    isAuth: false,
    isAdmin: false,
};

export default function userReducer(state = defaultState, action) {
    switch (action.type){
        case SET_USER:
            return{
                ...state,
                username: action.payload.username,
                name: action.payload.name,
                lastname: action.payload.lastname,
                id: action.payload.id,
                role: action.payload.role,
                isAuth: true,
                isAdmin: action.payload.role === "ADMIN",
            };
        default:
            return state;
    }
}
export const setUser = (user) => ({type: SET_USER, payload: user})
export const setDefaultUser = () => ({type: SET_USER, payload: defaultState})