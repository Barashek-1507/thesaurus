const baseURL = 'http://localhost:5433';

export const logIn = async (username, password) => {
    const body = JSON.stringify({username, password});
    const response = await fetch(`${baseURL}/auth/login`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json-patch+json',
            },
            body,
        });
    const data = await response.json();
    return data;
};

export const signUp = async (
    username, firstname, lastname, password,
) => {
    const body = JSON.stringify({
        username, firstname, lastname, password,
    });
    const response = await fetch(`${baseURL}/auth/registration`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json-patch+json',
        },
        body,
    });
    const data = await response.json();
    return data;
};

export const auth = async () => {
    const response = await fetch(`${baseURL}/auth`,
        {method: 'GET', headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}});
    return response.json();
};