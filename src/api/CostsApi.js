import { BRING_COMMON_COSTS_API, BRING_STAFF_COSTS_API, CREATE_COMMON_COST_API } from "../constants/apiRoutes";


export const bringCommonCosts = async () => {
    try {
        const response = await fetch(BRING_COMMON_COSTS_API, {
            method: 'GET',
        });
        const content = await response.json();
        return content;
    } catch (error) {
        throw error;
    }
}

export const bringStaffCosts = async () => {
    try {
        const response = await fetch(BRING_STAFF_COSTS_API, {
            method: 'GET',
        });
        const content = await response.json();
        return content;
    } catch (error) {
        throw error;
    }
}

export const createCommonCost = async (data) => {
    const commonCostsName = data.commonCostsName;
    const offerId = String(data.offerId);
    const offerName = data.offerName;
    const amount = data.amount;
    const costDate = data.costDate;
    const typo = data.typo;
    const iva = data.iva;

    try {
        const response = await fetch(CREATE_COMMON_COST_API, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                commonCostsName,
                offerId,
                offerName,
                amount,
                costDate,
                typo,
                iva
            })
        });
        const content = await response.json();
        return content;
    } catch (error) {
        throw error;
    }
}