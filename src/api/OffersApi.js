import { API_URL } from "../utils/Const";
import dayjs from 'dayjs';

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
        const clientId = String(data.clientId);
        const companyName = data.companyName
        const decisionDate = dayjs(data.decisionDate).format('YYYY-MM-DD')
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

export const updateOfferApi = async (data, percent) => {

    const id = String(data.id)
    const offer = data.offer
    const offerName = data.offerName
    const decisionDate = dayjs(data.decisionDate).format('YYYY-MM-DD')
    let status = data.status
    const price = data.price
    const percentN = data.percent

    let responseOfferReg;
    let contentOfferReg;
    let responseOfferUpd;
    let contentOfferUpd;

    if (percentN !== "0") {
        responseOfferReg = await fetch(API_URL + "/create_offer_reg", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id,
                price,
                percentN,
            })
        })
        contentOfferReg = await responseOfferReg.json();
    }

    console.log();

    if (parseInt(percent) + parseInt(percentN) === 100) {
        status = "PAYD";
        responseOfferUpd = await fetch(API_URL + "/update_offer", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id,
                offer,
                offerName,
                decisionDate,
                status,
                price,
                percentN,
            })
        })
        contentOfferUpd = await responseOfferUpd.json();
    } else {
        responseOfferUpd = await fetch(API_URL + "/update_offer", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id,
                offer,
                offerName,
                decisionDate,
                status,
                price,
                percentN,
            })
        })
        contentOfferUpd = await responseOfferUpd.json();
    }

    console.log(contentOfferUpd);

    return contentOfferUpd;
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