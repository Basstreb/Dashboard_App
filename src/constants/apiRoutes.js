// export const API_URL = 'http://localhost:5050';
export const API_URL = 'https://3c8a-185-188-11-193.eu.ngrok.io';

export const LOGIN_URL = API_URL + '/login';
export const REGISTER_URL = API_URL + '/register';

export const BRING_CUSTOMERS_API = `${API_URL}/list_client`;
export const CREATE_CUSTOMER_API = `${API_URL}/create_client`;
export const UPDATE_CUSTOMER_API = `${API_URL}/update_client`;
export const UPDATE_CUSTOMER_OFFERS_API = `${API_URL}/update_client_offers`;
export const DELETE_CUSTOMER_API = `${API_URL}/delete_client`;
export const DELETE_CUSTOMER_OFFERS_API = `${API_URL}/delete_client_offers`;

export const BRING_OFFERS_API = `${API_URL}/list_offer`;
export const CREATE_OFFER_API = `${API_URL}/create_offer`;
export const CREATE_OFFER_REG_API = `${API_URL}/create_offer_reg`;
export const UPDATE_OFFER_API = `${API_URL}/update_offer`;
export const DELETE_OFFER_API = `${API_URL}/delete_offer`;

export const BRING_IVA_SUPPORTED_PRICE_API = `${API_URL}/list_iva_supported_price`;
export const BRING_IVA_REPERCUTED_PRICE_API = `${API_URL}/list_iva_repercuted_price`;
export const BRING_IVA_SUPPORTED_API = `${API_URL}/list_iva_supported`;
export const BRING_IVA_REPERCUTED_API = `${API_URL}/list_iva_repercuted`;
export const BRING_IVA_PAID_API = `${API_URL}/list_iva_paid`;
export const BRING_IVA_TOTAL_API = `${API_URL}/list_iva_total`;
export const CREATE_IVA_PAYMENT_API = `${API_URL}/create_iva_paid`;
export const BRING_IVA_PAID_PRICE_API = `${API_URL}/list_iva_paid_price`;

export const BRING_COMMON_COSTS_API = `${API_URL}/list_common`;
export const CREATE_COMMON_COST_API = `${API_URL}/create_common`
export const DELETE_COMMON_COST_API = `${API_URL}/delete_common`;
export const UPDATE_COMMON_COST_API = `${API_URL}/update_common`;
export const BRING_STAFF_COSTS_API = `${API_URL}/list_staff`;
export const CREATE_STAFF_COST_API = `${API_URL}/create_staff`;
export const CREATE_STAFF_COST_PR_API = `${API_URL}/create_staff_pr`;
export const DELETE_STAFF_COST_API = `${API_URL}/delete_staff`;
export const DELETE_STAFF_COST_PR_API = `${API_URL}/delete_staff_pr`;
export const UPDATE_STAFF_COST_API = `${API_URL}/update_staff`;
export const UPDATE_STAFF_COST_PR_API = `${API_URL}/update_staff_pr`;