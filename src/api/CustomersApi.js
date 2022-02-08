import { API_URL } from "../utils/Const";

export const bringAllCustomersApi = async () => {
    try {
        const response = await fetch(API_URL + "/list_client", {
            method: 'GET',
        });
        const content = await response.json();
        return content;
    } catch (error) {
        throw error;
    }
}

export const createCustomerApi = async (data) => {
    try {
        const response = await fetch(API_URL + "/create_client", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        const content = await response.json();
        return content;
    } catch (error) {
        throw error;
    }
}

export const updateCustomerApi = async (data, id) => {
    const clientId = String(id)
    const companyName = data.companyName
    const managerName = data.managerName
    const managerCharge = data.managerCharge
    const phoneNumber = data.phoneNumber
    const cif = data.cif
    const direction = data.direction

    try {
        const responseCLientOffers = await fetch(API_URL + "/update_client_offers", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                clientId,
                companyName,
            })
        });

        const responseClient = await fetch(API_URL + "/update_client", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id,
                companyName,
                managerName,
                managerCharge,
                phoneNumber,
                cif,
                direction,
            })
        });
        const contentClient = await responseClient.json();
        const contentClientOffers = await responseCLientOffers.json();
        return contentClient, contentClientOffers;
    } catch (error) {
        throw error;
    }
}

export const deleteCustomerApi = async (id) => {
    const clientId = String(id)

    try {
        const responseDeleteClientOffers = await fetch(API_URL + "/delete_client_offers", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ clientId })
        })

        const response = await fetch(API_URL + "/delete_client", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id })
        })
        const content = await response.json();
        const contentDeleteClientOffers = await responseDeleteClientOffers.json();
        return content, contentDeleteClientOffers;
    } catch (error) {
        throw error;
    }
}