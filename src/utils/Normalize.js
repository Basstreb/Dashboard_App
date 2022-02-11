export const normalizeCustomers = (customers) => {
    let items = [];
    if (customers) {
        customers.map(customer => {
            items.push({
                label: customer.companyName,
                value: {
                    id: customer.id,
                    companyName: customer.companyName
                }
            })
        })
    }
    return items;
}

export const normalizeOffers = (offers) => {
    let items = [];
    if (offers) {
        offers.map(offer => {
            items.push({
                label: offer.offerName,
                value: {
                    id: offer.id,
                    offerName: offer.offerName
                }
            })
        })
    }
    return items;
}

export const normalizeStaffCostOffers = (offers) => {
    let items = [];
    if (offers) {
        offers.map(offer => {
            items.push({
                label: offer.offerName,
                value: offer.id,
            })
        })
    }
    return items;
}