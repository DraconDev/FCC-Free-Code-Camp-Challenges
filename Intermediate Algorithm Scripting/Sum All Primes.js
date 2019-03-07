function sumPrimes(num) {
    let it = 2;
    let primeSum = 2;
    while (it <= num) {
        for (let i = 2; i <= it - 1; i++) {
            if (it % i == 0) {
                i = it;
            }
            if (i == it - 1) {
                primeSum += it;
            }


        }
        console.log(primeSum);
        it++;
    }
    return primeSum;
}

// console.log(sumPrimes(10));
console.log(sumPrimes(977));