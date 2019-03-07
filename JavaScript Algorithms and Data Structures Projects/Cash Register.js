function checkCashRegister(price, cash, cid) {
    let currency = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100].reverse();
    var change = cash - price;
    let moneyInRegister = 0;
    for (let e of cid) {
        moneyInRegister += e[1];
    }
    var totalChangePaid = 0;

    // console.log(allMoney);
    // console.log(cid.reduce((a, c) => a + c[1]));
    // var allMoney = cid.reduce((a, c) => a + c[1]);
    cid.reverse().map(function (e, i) {
        e[1] = (Math.min((Math.floor(change / currency[i])) * currency[i], e[1]))
        change = (change - e[1]).toFixed(2);
        totalChangePaid += e[1];
    })
    console.log(change);
    if ((change > 0.001)) {
        return {
            status: "INSUFFICIENT_FUNDS",
            change: []
        };
    }
    if (moneyInRegister == totalChangePaid) {
        return {
            status: "CLOSED",
            change: cid.reverse()
        };
    }
    return {
        status: "OPEN",
        change: cid.filter(e => e[1])
    };
}

// console.log(checkCashRegister(19.5, 20, [
//     ["PENNY", 0.5],
//     ["NICKEL", 0],
//     ["DIME", 0],
//     ["QUARTER", 0],
//     ["ONE", 0],
//     ["FIVE", 0],
//     ["TEN", 0],
//     ["TWENTY", 0],
//     ["ONE HUNDRED", 0]
// ]));
console.log(checkCashRegister(19.5, 20, [
    ["PENNY", 0.49],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0]
]));
// console.log(checkCashRegister(19.5, 20, [
//     ["PENNY", 1.01],
//     ["NICKEL", 2.05],
//     ["DIME", 3.1],
//     ["QUARTER", 4.25],
//     ["ONE", 90],
//     ["FIVE", 55],
//     ["TEN", 20],
//     ["TWENTY", 60],
//     ["ONE HUNDRED", 100]
// ]));
// console.log(checkCashRegister(3.26, 100, [
//     ["PENNY", 1.01],
//     ["NICKEL", 2.05],
//     ["DIME", 3.1],
//     ["QUARTER", 4.25],
//     ["ONE", 90],
//     ["FIVE", 55],
//     ["TEN", 20],
//     ["TWENTY", 60],
//     ["ONE HUNDRED", 100]
// ]));