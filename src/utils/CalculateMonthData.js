export const calculateMonthData = (offersMonthData) => {
    const janTotal = offersMonthData && offersMonthData.find(price => price.month === 1) ? offersMonthData.find(price => price.month === 1).price : 0;
    const febTotal = offersMonthData && offersMonthData.find(price => price.month === 2) ? offersMonthData.find(price => price.month === 2).price : 0;
    const marTotal = offersMonthData && offersMonthData.find(price => price.month === 3) ? offersMonthData.find(price => price.month === 3).price : 0;
    const aprTotal = offersMonthData && offersMonthData.find(price => price.month === 4) ? offersMonthData.find(price => price.month === 4).price : 0;
    const mayTotal = offersMonthData && offersMonthData.find(price => price.month === 5) ? offersMonthData.find(price => price.month === 5).price : 0;
    const junTotal = offersMonthData && offersMonthData.find(price => price.month === 6) ? offersMonthData.find(price => price.month === 6).price : 0;
    const julyTotal = offersMonthData && offersMonthData.find(price => price.month === 7) ? offersMonthData.find(price => price.month === 7).price : 0;
    const augTotal = offersMonthData && offersMonthData.find(price => price.month === 8) ? offersMonthData.find(price => price.month === 8).price : 0;
    const septTotal = offersMonthData && offersMonthData.find(price => price.month === 9) ? offersMonthData.find(price => price.month === 9).price : 0;
    const octTotal = offersMonthData && offersMonthData.find(price => price.month === 10) ? offersMonthData.find(price => price.month === 10).price : 0;
    const novTotal = offersMonthData && offersMonthData.find(price => price.month === 11) ? offersMonthData.find(price => price.month === 11).price : 0;
    const dicTotal = offersMonthData && offersMonthData.find(price => price.month === 12) ? offersMonthData.find(price => price.month === 12).price : 0;

    return [janTotal, febTotal, marTotal, aprTotal, mayTotal, junTotal, julyTotal, augTotal, septTotal, octTotal, novTotal, dicTotal];
}

export const calculateMonthCostData = (offersMonthCostData) => {
    const janCost = offersMonthCostData && offersMonthCostData.find(price => price.month === 1) ? offersMonthCostData.find(price => price.month === 1).amount : 0;
    const febCost = offersMonthCostData && offersMonthCostData.find(price => price.month === 2) ? offersMonthCostData.find(price => price.month === 2).amount : 0;
    const marCost = offersMonthCostData && offersMonthCostData.find(price => price.month === 3) ? offersMonthCostData.find(price => price.month === 3).amount : 0;
    const aprCost = offersMonthCostData && offersMonthCostData.find(price => price.month === 4) ? offersMonthCostData.find(price => price.month === 4).amount : 0;
    const mayCost = offersMonthCostData && offersMonthCostData.find(price => price.month === 5) ? offersMonthCostData.find(price => price.month === 5).amount : 0;
    const junCost = offersMonthCostData && offersMonthCostData.find(price => price.month === 6) ? offersMonthCostData.find(price => price.month === 6).amount : 0;
    const julyCost = offersMonthCostData && offersMonthCostData.find(price => price.month === 7) ? offersMonthCostData.find(price => price.month === 7).amount : 0;
    const augCost = offersMonthCostData && offersMonthCostData.find(price => price.month === 8) ? offersMonthCostData.find(price => price.month === 8).amount : 0;
    const septCost = offersMonthCostData && offersMonthCostData.find(price => price.month === 9) ? offersMonthCostData.find(price => price.month === 9).amount : 0;
    const octCost = offersMonthCostData && offersMonthCostData.find(price => price.month === 10) ? offersMonthCostData.find(price => price.month === 10).amount : 0;
    const novCost = offersMonthCostData && offersMonthCostData.find(price => price.month === 11) ? offersMonthCostData.find(price => price.month === 11).amount : 0
    const dicCost = offersMonthCostData && offersMonthCostData.find(price => price.month === 12) ? offersMonthCostData.find(price => price.month === 12).amount : 0;

    return [janCost, febCost, marCost, aprCost, mayCost, junCost, julyCost, augCost, septCost, octCost, novCost, dicCost];
}

export const calculateMonthStaffData = (offersMonthStaffData) => {
    const janStaff = offersMonthStaffData && offersMonthStaffData.find(price => price.month === 1) ? offersMonthStaffData.find(price => price.month === 1).amount : 0;
    const febStaff = offersMonthStaffData && offersMonthStaffData.find(price => price.month === 2) ? offersMonthStaffData.find(price => price.month === 2).amount : 0;
    const marStaff = offersMonthStaffData && offersMonthStaffData.find(price => price.month === 3) ? offersMonthStaffData.find(price => price.month === 3).amount : 0;
    const aprStaff = offersMonthStaffData && offersMonthStaffData.find(price => price.month === 4) ? offersMonthStaffData.find(price => price.month === 4).amount : 0;
    const mayStaff = offersMonthStaffData && offersMonthStaffData.find(price => price.month === 5) ? offersMonthStaffData.find(price => price.month === 5).amount : 0;
    const junStaff = offersMonthStaffData && offersMonthStaffData.find(price => price.month === 6) ? offersMonthStaffData.find(price => price.month === 6).amount : 0;
    const julyStaff = offersMonthStaffData && offersMonthStaffData.find(price => price.month === 7) ? offersMonthStaffData.find(price => price.month === 7).amount : 0;
    const augStaff = offersMonthStaffData && offersMonthStaffData.find(price => price.month === 8) ? offersMonthStaffData.find(price => price.month === 8).amount : 0;
    const septStaff = offersMonthStaffData && offersMonthStaffData.find(price => price.month === 9) ? offersMonthStaffData.find(price => price.month === 9).amount : 0;
    const octStaff = offersMonthStaffData && offersMonthStaffData.find(price => price.month === 10) ? offersMonthStaffData.find(price => price.month === 10).amount : 0;
    const novStaff = offersMonthStaffData && offersMonthStaffData.find(price => price.month === 11) ? offersMonthStaffData.find(price => price.month === 11).amount : 0;
    const dicStaff = offersMonthStaffData && offersMonthStaffData.find(price => price.month === 12) ? offersMonthStaffData.find(price => price.month === 12).amount : 0;

    return [janStaff, febStaff, marStaff, aprStaff, mayStaff, junStaff, julyStaff, augStaff, septStaff, octStaff, novStaff, dicStaff];
}

export const calculateMonthIvaSupportedData = (ivaSupported) => {
    const janIvaSupp = ivaSupported && ivaSupported.find(price => price.month === 1) ? ivaSupported.find(price => price.month === 1).amount : 0;
    const febIvaSupp = ivaSupported && ivaSupported.find(price => price.month === 2) ? ivaSupported.find(price => price.month === 2).amount : 0;
    const marIvaSupp = ivaSupported && ivaSupported.find(price => price.month === 3) ? ivaSupported.find(price => price.month === 3).amount : 0;
    const aprIvaSupp = ivaSupported && ivaSupported.find(price => price.month === 4) ? ivaSupported.find(price => price.month === 4).amount : 0;
    const mayIvaSupp = ivaSupported && ivaSupported.find(price => price.month === 5) ? ivaSupported.find(price => price.month === 5).amount : 0;
    const junIvaSupp = ivaSupported && ivaSupported.find(price => price.month === 6) ? ivaSupported.find(price => price.month === 6).amount : 0;
    const julyIvaSupp = ivaSupported && ivaSupported.find(price => price.month === 7) ? ivaSupported.find(price => price.month === 7).amount : 0;
    const augIvaSupp = ivaSupported && ivaSupported.find(price => price.month === 8) ? ivaSupported.find(price => price.month === 8).amount : 0;
    const septIvaSupp = ivaSupported && ivaSupported.find(price => price.month === 9) ? ivaSupported.find(price => price.month === 9).amount : 0;
    const octIvaSupp = ivaSupported && ivaSupported.find(price => price.month === 10) ? ivaSupported.find(price => price.month === 10).amount : 0;
    const novIvaSupp = ivaSupported && ivaSupported.find(price => price.month === 11) ? ivaSupported.find(price => price.month === 11).amount : 0;
    const dicIvaSupp = ivaSupported && ivaSupported.find(price => price.month === 12) ? ivaSupported.find(price => price.month === 12).amount : 0;

    return [janIvaSupp, febIvaSupp, marIvaSupp, aprIvaSupp, mayIvaSupp, junIvaSupp, julyIvaSupp, augIvaSupp, septIvaSupp, octIvaSupp, novIvaSupp, dicIvaSupp];
}

export const calculateMonthIvaRepercutedData = (ivaRepercuted) => {
    const janIvaRep = ivaRepercuted && ivaRepercuted.find(price => price.month === 1) ? ivaRepercuted.find(price => price.month === 1).amount : 0;
    const febIvaRep = ivaRepercuted && ivaRepercuted.find(price => price.month === 2) ? ivaRepercuted.find(price => price.month === 2).amount : 0;
    const marIvaRep = ivaRepercuted && ivaRepercuted.find(price => price.month === 3) ? ivaRepercuted.find(price => price.month === 3).amount : 0;
    const aprIvaRep = ivaRepercuted && ivaRepercuted.find(price => price.month === 4) ? ivaRepercuted.find(price => price.month === 4).amount : 0;
    const mayIvaRep = ivaRepercuted && ivaRepercuted.find(price => price.month === 5) ? ivaRepercuted.find(price => price.month === 5).amount : 0;
    const junIvaRep = ivaRepercuted && ivaRepercuted.find(price => price.month === 6) ? ivaRepercuted.find(price => price.month === 6).amount : 0;
    const julyIvaRep = ivaRepercuted && ivaRepercuted.find(price => price.month === 7) ? ivaRepercuted.find(price => price.month === 7).amount : 0;
    const augIvaRep = ivaRepercuted && ivaRepercuted.find(price => price.month === 8) ? ivaRepercuted.find(price => price.month === 8).amount : 0;
    const septIvaRep = ivaRepercuted && ivaRepercuted.find(price => price.month === 9) ? ivaRepercuted.find(price => price.month === 9).amount : 0;
    const octIvaRep = ivaRepercuted && ivaRepercuted.find(price => price.month === 10) ? ivaRepercuted.find(price => price.month === 10).amount : 0;
    const novIvaRep = ivaRepercuted && ivaRepercuted.find(price => price.month === 11) ? ivaRepercuted.find(price => price.month === 11).amount : 0;
    const dicIvaRep = ivaRepercuted && ivaRepercuted.find(price => price.month === 12) ? ivaRepercuted.find(price => price.month === 12).amount : 0;

    return [janIvaRep, febIvaRep, marIvaRep, aprIvaRep, mayIvaRep, junIvaRep, julyIvaRep, augIvaRep, septIvaRep, octIvaRep, novIvaRep, dicIvaRep];
}

export const calculateMonthIvaPaidData = (ivaPaid) => {
    const janIvaPaid = ivaPaid && ivaPaid.find(price => price.month === 1) ? ivaPaid.find(price => price.month === 1).amount : 0;
    const febIvaPaid = ivaPaid && ivaPaid.find(price => price.month === 2) ? ivaPaid.find(price => price.month === 2).amount : 0;
    const marIvaPaid = ivaPaid && ivaPaid.find(price => price.month === 3) ? ivaPaid.find(price => price.month === 3).amount : 0;
    const aprIvaPaid = ivaPaid && ivaPaid.find(price => price.month === 4) ? ivaPaid.find(price => price.month === 4).amount : 0;
    const mayIvaPaid = ivaPaid && ivaPaid.find(price => price.month === 5) ? ivaPaid.find(price => price.month === 5).amount : 0;
    const junIvaPaid = ivaPaid && ivaPaid.find(price => price.month === 6) ? ivaPaid.find(price => price.month === 6).amount : 0;
    const julyIvaPaid = ivaPaid && ivaPaid.find(price => price.month === 7) ? ivaPaid.find(price => price.month === 7).amount : 0;
    const augIvaPaid = ivaPaid && ivaPaid.find(price => price.month === 8) ? ivaPaid.find(price => price.month === 8).amount : 0;
    const septIvaPaid = ivaPaid && ivaPaid.find(price => price.month === 9) ? ivaPaid.find(price => price.month === 9).amount : 0;
    const octIvaPaid = ivaPaid && ivaPaid.find(price => price.month === 10) ? ivaPaid.find(price => price.month === 10).amount : 0;
    const novIvaPaid = ivaPaid && ivaPaid.find(price => price.month === 11) ? ivaPaid.find(price => price.month === 6).amount : 0;
    const dicIvaPaid = ivaPaid && ivaPaid.find(price => price.month === 12) ? ivaPaid.find(price => price.month === 12).amount : 0;

    return [janIvaPaid, febIvaPaid, marIvaPaid, aprIvaPaid, mayIvaPaid, junIvaPaid, julyIvaPaid, augIvaPaid, septIvaPaid, octIvaPaid, novIvaPaid, dicIvaPaid];
}

export const calculateMonthIvaAcumlatedData = (ivaSupportedData, ivaRepercutedData, ivaPaidData) => {

    const ivaSupported = calculateMonthIvaSupportedData(ivaSupportedData);
    const ivaRepercuted = calculateMonthIvaRepercutedData(ivaRepercutedData);
    const ivaPaid = calculateMonthIvaPaidData(ivaPaidData);

    const ivaAcu = [
        ivaSupported[0] + ivaRepercuted[0] - ivaPaid[0],
        ivaSupported[1] + ivaRepercuted[1] - ivaPaid[1] + ivaSupported[0] + ivaRepercuted[0] - ivaPaid[0],
        ivaSupported[2] + ivaRepercuted[2] - ivaPaid[2] + ivaSupported[1] + ivaRepercuted[1] - ivaPaid[1] + ivaSupported[0] + ivaRepercuted[0] - ivaPaid[0],
        ivaSupported[3] + ivaRepercuted[3] - ivaPaid[3] + ivaSupported[2] + ivaRepercuted[2] - ivaPaid[2] + ivaSupported[1] + ivaRepercuted[1] - ivaPaid[1] + ivaSupported[0] + ivaRepercuted[0] - ivaPaid[0],
        ivaSupported[4] + ivaRepercuted[4] - ivaPaid[4] + ivaSupported[3] + ivaRepercuted[3] - ivaPaid[3] + ivaSupported[2] + ivaRepercuted[2] - ivaPaid[2] + ivaSupported[1] + ivaRepercuted[1] - ivaPaid[1] + ivaSupported[0] + ivaRepercuted[0] - ivaPaid[0],
        ivaSupported[5] + ivaRepercuted[5] - ivaPaid[5] + ivaSupported[4] + ivaRepercuted[4] - ivaPaid[4] + ivaSupported[3] + ivaRepercuted[3] - ivaPaid[3] + ivaSupported[2] + ivaRepercuted[2] - ivaPaid[2] + ivaSupported[1] + ivaRepercuted[1] - ivaPaid[1] + ivaSupported[0] + ivaRepercuted[0] - ivaPaid[0],
        ivaSupported[6] + ivaRepercuted[6] - ivaPaid[6] + ivaSupported[5] + ivaRepercuted[5] - ivaPaid[5] + ivaSupported[4] + ivaRepercuted[4] - ivaPaid[4] + ivaSupported[3] + ivaRepercuted[3] - ivaPaid[3] + ivaSupported[2] + ivaRepercuted[2] - ivaPaid[2] + ivaSupported[1] + ivaRepercuted[1] - ivaPaid[1] + ivaSupported[0] + ivaRepercuted[0] - ivaPaid[0],
        ivaSupported[7] + ivaRepercuted[7] - ivaPaid[7] + ivaSupported[6] + ivaRepercuted[6] - ivaPaid[6] + ivaSupported[5] + ivaRepercuted[5] - ivaPaid[5] + ivaSupported[4] + ivaRepercuted[4] - ivaPaid[4] + ivaSupported[3] + ivaRepercuted[3] - ivaPaid[3] + ivaSupported[2] + ivaRepercuted[2] - ivaPaid[2] + ivaSupported[1] + ivaRepercuted[1] - ivaPaid[1] + ivaSupported[0] + ivaRepercuted[0] - ivaPaid[0],
        ivaSupported[8] + ivaRepercuted[8] - ivaPaid[8] + ivaSupported[7] + ivaRepercuted[7] - ivaPaid[7] + ivaSupported[6] + ivaRepercuted[6] - ivaPaid[6] + ivaSupported[5] + ivaRepercuted[5] - ivaPaid[5] + ivaSupported[4] + ivaRepercuted[4] - ivaPaid[4] + ivaSupported[3] + ivaRepercuted[3] - ivaPaid[3] + ivaSupported[2] + ivaRepercuted[2] - ivaPaid[2] + ivaSupported[1] + ivaRepercuted[1] - ivaPaid[1] + ivaSupported[0] + ivaRepercuted[0] - ivaPaid[0],
        ivaSupported[9] + ivaRepercuted[9] - ivaPaid[9] + ivaSupported[8] + ivaRepercuted[8] - ivaPaid[8] + ivaSupported[7] + ivaRepercuted[7] - ivaPaid[7] + ivaSupported[6] + ivaRepercuted[6] - ivaPaid[6] + ivaSupported[5] + ivaRepercuted[5] - ivaPaid[5] + ivaSupported[4] + ivaRepercuted[4] - ivaPaid[4] + ivaSupported[3] + ivaRepercuted[3] - ivaPaid[3] + ivaSupported[2] + ivaRepercuted[2] - ivaPaid[2] + ivaSupported[1] + ivaRepercuted[1] - ivaPaid[1] + ivaSupported[0] + ivaRepercuted[0] - ivaPaid[0],
        ivaSupported[10] + ivaRepercuted[10] - ivaPaid[10] + ivaSupported[9] + ivaRepercuted[9] - ivaPaid[9] + ivaSupported[8] + ivaRepercuted[8] - ivaPaid[8] + ivaSupported[7] + ivaRepercuted[7] - ivaPaid[7] + ivaSupported[6] + ivaRepercuted[6] - ivaPaid[6] + ivaSupported[5] + ivaRepercuted[5] - ivaPaid[5] + ivaSupported[4] + ivaRepercuted[4] - ivaPaid[4] + ivaSupported[3] + ivaRepercuted[3] - ivaPaid[3] + ivaSupported[2] + ivaRepercuted[2] - ivaPaid[2] + ivaSupported[1] + ivaRepercuted[1] - ivaPaid[1] + ivaSupported[0] + ivaRepercuted[0] - ivaPaid[0],
        ivaSupported[11] + ivaRepercuted[11] - ivaPaid[11] + ivaSupported[10] + ivaRepercuted[10] - ivaPaid[10] + ivaSupported[9] + ivaRepercuted[9] - ivaPaid[9] + ivaSupported[8] + ivaRepercuted[8] - ivaPaid[8] + ivaSupported[7] + ivaRepercuted[7] - ivaPaid[7] + ivaSupported[6] + ivaRepercuted[6] - ivaPaid[6] + ivaSupported[5] + ivaRepercuted[5] - ivaPaid[5] + ivaSupported[4] + ivaRepercuted[4] - ivaPaid[4] + ivaSupported[3] + ivaRepercuted[3] - ivaPaid[3] + ivaSupported[2] + ivaRepercuted[2] - ivaPaid[2] + ivaSupported[1] + ivaRepercuted[1] - ivaPaid[1] + ivaSupported[0] + ivaRepercuted[0] - ivaPaid[0],
    ]

    return ivaAcu;
}