function perfectNumber(num) {
    let perfect = [];
    let sum = 0;
    for (let i = 0; i < num; i++) {
        if (num % i === 0) {
            perfect.push(i);
        }
    }
    for (let j = 0; j < perfect.length; j++) {
        let digit = Number(perfect[j]);
        sum += digit;
    }
    if (sum === num) {
        console.log(`We have a perfect number!`);
    } else {
        console.log(`It's not so perfect.`);
    }
}
perfectNumber(3431);
