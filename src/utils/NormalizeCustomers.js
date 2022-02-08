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