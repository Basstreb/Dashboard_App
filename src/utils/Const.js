// export const API_URL = 'http://localhost:5050';
export const API_URL = 'https://c4fc-185-188-11-193.eu.ngrok.io';

export const COLORS = {
    succes: '#38C359',
    merkinsio: '#0078B4',
    fail: '#FF0000',
}

export function showStatus(string) {
    switch (string) {
        case "PENDING":
            return '#EBD61A'
        case "APPROVED":
            return '#00C853'
        case "REJECTED":
            return '#FF2222'
        case "PAYMENT_PENDING":
            return '#00C853'
        case "PAYD":
            return '#00C853'
    }
}

export function trasnlateOfferStatus (string) {
    switch (string) {
        case "PENDING":
            return 'Pendiente'
        case "APPROVED":
            return 'Aprobado'
        case "REJECTED":
            return 'Rechazado'
        case "PAYMENT_PENDING":
            return 'Pendiente de pago'
        case "PAYD":
            return 'Cobrado'
    }
}