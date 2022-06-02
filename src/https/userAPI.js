const baseURL = 'http://localhost:1234';

export const logIn = async (username, password) => {
    const body = JSON.stringify({username, password});
    const response = await fetch(`${baseURL}/auth/login`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body,
        });
    const data = await response.json();
    return data;
};

export const signUp = async (
    username, name, lastname, password,
) => {
    const body = JSON.stringify({
        username, name, lastname, password,
    });
    const response = await fetch(`${baseURL}/auth/registration`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body,
    });
    const data = await response.json();
    return data;
};

export const auth = async () => {
    const response = await fetch(`${baseURL}/auth`,
        {method: 'GET', headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }});
    return response.json();
};

export const getAllUsers = async () => {
    const response = await  fetch(`${baseURL}/user`,
        {method: 'GET', headers: {
        'Content-Type': 'application/json-patch+json',
    },})
    return response.json();
}

export const deleteUser = async (id) => {
    await fetch(`${baseURL}/user/delete/${id}`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json-patch+json',
            }},
        )
}
