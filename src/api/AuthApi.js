import { API_URL } from "../utils/Const";

//Funcion para traer todos los pokemones
export const loginUserApi = async (data) => {
    try {
        const response = await fetch(API_URL + "/login", {
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
        const response = await fetch(API_URL + "/register", {
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