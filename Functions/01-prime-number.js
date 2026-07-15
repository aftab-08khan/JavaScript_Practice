function findPrimeNumber(number) {
    if (number < 2) {
        if (number === 1) {
            console.log("Neither Prime nor Composite");
        } else {
            console.log("Number must be greater than 1");
        }
        return false;
    }

    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            console.log("Not Prime");
            return false;
        }
    }

    console.log("Prime");
    return true;
}

console.log(findPrimeNumber(6));