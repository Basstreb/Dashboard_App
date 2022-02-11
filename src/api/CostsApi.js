import {
    BRING_COMMON_COSTS_API,
    BRING_STAFF_COSTS_API,
    CREATE_COMMON_COST_API,
    CREATE_STAFF_COST_API,
    CREATE_STAFF_COST_PR_API,
    DELETE_COMMON_COST_API,
    DELETE_STAFF_COST_API,
    DELETE_STAFF_COST_PR_API,
    UPDATE_COMMON_COST_API,
    UPDATE_STAFF_COST_API,
    UPDATE_STAFF_COST_PR_API
} from "../constants/apiRoutes";

//COMMON COSTS API FUNCTIONS
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

export const deleteCommonCost = async (id) => {
    try {
        const response = await fetch(DELETE_COMMON_COST_API, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id })
        });
        const content = await response.json();
        return content;
    } catch (error) {
        throw error;
    }
}

export const updateCommonCost = async (data, idData) => {

    const id = String(idData);
    const commonCostsName = data.commonCostsName;
    const offerId = String(data.offerId);
    const offerName = data.offerName;
    const amount = data.amount;
    const costDate = data.costDate.split('T')[0];
    const typo = data.typo;
    const iva = String(data.iva);

    try {
        const response = await fetch(UPDATE_COMMON_COST_API, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id,
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

//STAFF COSTS API FUNCTIONS
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

export const createStaffCost = async (data) => {

    const staffName = data.staffName
    const amount = data.amount
    const cost = data.cost
    const project1 = String(data.project1)
    const per1 = data.per1
    const project2 = String(data.project2) || " "
    const per2 = data.per2 !== '' ? data.per2 : "0"
    const project3 = String(data.project3) || " "
    const per3 = data.per3 !== '' ? data.per3 : "0"
    const project4 = String(data.project4) || " "
    const per4 = data.per4 !== '' ? data.per4 : "0"
    const payDate = data.payDate.split('T')[0]

    try {
        const responseStaff = await fetch(CREATE_STAFF_COST_API, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                staffName,
                amount,
                cost,
                payDate,
                project1,
                per1,
                project2,
                per2,
                project3,
                per3,
                project4,
                per4
            })
        });
        console.log(responseStaff);
        const responseStaffPr = await fetch(CREATE_STAFF_COST_PR_API, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                amount,
                project1,
                per1,
                project2,
                per2,
                project3,
                per3,
                project4,
                per4
            })
        });
        const contentStaff = await responseStaff.json();
        const contentStaffPr = await responseStaffPr.json();
        return contentStaff, contentStaffPr;
    } catch (error) {
        throw error;
    }
}

export const updateStaffCost = async (data, idStaff) => {

    const send = {
        id: String(idStaff),
        staffName: data.staffName,
        amount: data.amount,
        cost: data.cost,
        payDate: data.payDate.split('T')[0],
        project1: String(data.project1),
        per1: data.per1,
        project2: String(data.project2) || " ",
        per2: data.per2 !== '' ? data.per2 : "0",
        project3: String(data.project3) || " ",
        per3: data.per3 !== '' ? data.per3 : "0",
        project4: String(data.project4) || " ",
        per4: data.per4 !== '' ? data.per4 : "0",
    }

    console.log(send);

    try {
        const responseStaff = await fetch(UPDATE_STAFF_COST_API, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: String(idStaff),
                staffName: data.staffName,
                amount: data.amount,
                cost: data.cost,
                payDate: data.payDate.split('T')[0],
                project1: String(data.project1),
                per1: data.per1,
                project2: String(data.project2) || " ",
                per2: data.per2 !== '' ? data.per2 : "0",
                project3: String(data.project3) || " ",
                per3: data.per3 !== '' ? data.per3 : "0",
                project4: String(data.project4) || " ",
                per4: data.per4 !== '' ? data.per4 : "0",
            })
        });
        const responseStaffPr = await fetch(UPDATE_STAFF_COST_PR_API, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: String(idStaff),
                staffName: data.staffName,
                amount: data.amount,
                cost: data.cost,
                payDate: data.payDate.split('T')[0],
                project1: String(data.project1),
                per1: data.per1,
                project2: String(data.project2) || " ",
                per2: data.per2 !== '' ? data.per2 : "0",
                project3: String(data.project3) || " ",
                per3: data.per3 !== '' ? data.per3 : "0",
                project4: String(data.project4) || " ",
                per4: data.per4 !== '' ? data.per4 : "0",
            })
        });
        const contentStaff = await responseStaff.json();
        const contentStaffPr = await responseStaffPr.json();
        return contentStaff, contentStaffPr;
    } catch (error) {
        throw error;
    }
}

export const deleteStaffCost = async (id) => {
    const prId = String(id)
    try {
        const responseStaffPr = await fetch(DELETE_STAFF_COST_PR_API, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ prId })
        });

        const responseStaff = await fetch(DELETE_STAFF_COST_API, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id })
        });

        const contentStaff = await responseStaff.json();
        const contentStaffPr = await responseStaffPr.json();
        return contentStaff, contentStaffPr;
    } catch (error) {
        throw error;
    }
}