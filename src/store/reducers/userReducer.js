const USER = 'USER';
const SET_USER = 'SET_USER';

const defaultState = {
    username: '',
    userId: '',
    userRole: USER,
};

export default function userReducer(state = defaultState, action) {
    switch (action.type){
        case SET_USER:
            return{
                ...state,
                username: action.payload.username,
                userId: action.payload.userId,
                userRole: action.payload.userRole,
            };
        default:
            return state;
    }
}
export const setUser = (user) => ({type: SET_USER, payload: user})