import {
    BRING_IVA_PAID_API,
    BRING_IVA_REPERCUTED_API,
    BRING_IVA_SUPPORTED_API,
    BRING_IVA_TOTAL_API,
    CREATE_IVA_PAYMENT_API
} from "../constants/apiRoutes";

export const bringIvaSupported = async () => {
    try {
        const response = await fetch(BRING_IVA_SUPPORTED_API, {
            method: 'GET',
        });
        const content = await response.json();
        return content;
    } catch (error) {
        throw error;
    }
}

export const bringIvaRepercuted = async () => {
    try {
        const response = await fetch(BRING_IVA_REPERCUTED_API, {
            method: 'GET',
        });
        const content = await response.json();
        return content;
    } catch (error) {
        throw error;
    }
}

export const bringIvaPaid = async () => {
    try {
        const response = await fetch(BRING_IVA_PAID_API, {
            method: 'GET',
        });
        const content = await response.json();
        return content;
    } catch (error) {
        throw error;
    }
}

export const bringIvaTotal = async () => {
    try {
        const response = await fetch(BRING_IVA_TOTAL_API, {
            method: 'GET',
        });
        const content = await response.json();
        return content;
    } catch (error) {
        throw error;
    }
}

export const createIvaPayment = async (data) => {
    try {
        const response = await fetch(CREATE_IVA_PAYMENT_API, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const content = await response.json();
        return content;
    } catch (error) {
        throw error;
    }
}