import { BRING_MONTF_STAFF_DATA_API, BRING_MONTH_COST_DATA_API, BRING_MONTH_DATA_API, BRING_MONTH_IVA_PAID_DATA_API, BRING_MONTH_IVA_REPERCUTED_DATA_API, BRING_MONTH_IVA_SUPPORTED_DATA_API } from "../constants/apiRoutes";

export const bringMonthData = async () => {
    try {
        const response = await fetch(BRING_MONTH_DATA_API, {
            method: 'GET',
        });
        const content = await response.json();
        return content;
    } catch (error) {
        throw error;
    }
}

export const bringMonthCostData = async () => {
    try {
        const response = await fetch(BRING_MONTH_COST_DATA_API, {
            method: 'GET',
        });
        const content = await response.json();
        return content;
    } catch (error) {
        throw error;
    }
}

export const bringMonthStaffData = async () => {
    try {
        const response = await fetch(BRING_MONTF_STAFF_DATA_API, {
            method: 'GET',
        });
        const content = await response.json();
        return content;
    } catch (error) {
        throw error;
    }
}

export const bringMonthIvaSupported = async () => {
    try {
        const response = await fetch(BRING_MONTH_IVA_SUPPORTED_DATA_API, {
            method: 'GET',
        });
        const content = await response.json();
        return content;
    } catch (error) {
        throw error;
    }
}

export const bringMonthIvaRepercuted = async () => {
    try {
        const response = await fetch(BRING_MONTH_IVA_REPERCUTED_DATA_API, {
            method: 'GET',
        });
        const content = await response.json();
        return content;
    } catch (error) {
        throw error;
    }
}

export const bringMonthIvaPaid = async () => {
    try {
        const response = await fetch(BRING_MONTH_IVA_PAID_DATA_API, {
            method: 'GET',
        });
        const content = await response.json();
        return content;
    } catch (error) {
        throw error;
    }
}