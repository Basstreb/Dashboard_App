import dayjs from 'dayjs';
import {
    BRING_OFFERS_API,
    CREATE_OFFER_API,
    CREATE_OFFER_REG_API,
    DELETE_OFFER_API,
    UPDATE_OFFER_API
} from "../constants/apiRoutes";

export const bringAllOffersApi = async () => {
    try {
        const response = await fetch(BRING_OFFERS_API, {
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

        const response = await fetch(CREATE_OFFER_API, {
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
        responseOfferReg = await fetch(CREATE_OFFER_REG_API, {
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

    if (parseInt(percent) + parseInt(percentN) === 100) {
        status = "PAYD";
        responseOfferUpd = await fetch(UPDATE_OFFER_API, {
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
        responseOfferUpd = await fetch(UPDATE_OFFER_API, {
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
    return contentOfferUpd;
}

export const deleteOfferApi = async (id) => {
    try {
        const response = await fetch(DELETE_OFFER_API, {
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