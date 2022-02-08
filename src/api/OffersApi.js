import { API_URL } from "../utils/Const";

export const bringAllOffersApi = async () => {
    try {
        const response = await fetch(API_URL + "/list_offer", {
            method: 'GET',
        });
        const content = await response.json();
        return content;
    } catch (error) {
        throw error;
    }
}

export const createOfferApi = async (data) => {
    try {
        const clientId = data.clientId
        const companyName = data.companyName
        const decisionDate = data.decisionDate
        const offer = data.offer
        const offerName = data.offerName
        const price = data.price

        const response = await fetch(API_URL + "/create_offer", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                clientId,
                companyName,
                decisionDate,
                offer,
                offerName,
                price
            })
        });
        const content = await response.json();
        return content;
    } catch (error) {
        throw error;
    }
}

export const deleteOfferApi = async (id) => {
    try {
        const response = await fetch(API_URL + "/delete_offer", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id })
        });

        const content = await response.json();
        return content;
    } catch (error) {
        throw error;
    }
}