import { LOGIN_URL, REGISTER_URL } from "../constants/apiRoutes";

export const loginUserApi = async (data) => {
    try {
        const response = await fetch(LOGIN_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify(data)
        });
        const content = await response.json();
        return content;
    } catch (error) {
        throw error;
    }
}

export const registerUserApi = async (data) => {

    try {
        const response = await fetch(REGISTER_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });

        // Check correct answer
        var content = await response.json();
        return content;
    } catch (error) {
        throw error;
    }
}