function isPrime(numberToTest) {
    if((numberToTest == 2) || (numberToTest == 5)) return true;
    if((numberToTest%2 == 0) || (numberToTest%5 == 0)) return false;

    var _isPrime = true;

    var sqrt = Math.ceil(Math.sqrt(numberToTest));
    for(var i=2; i<=sqrt; i++) {
        if(numberToTest%i == 0) {
            _isPrime = false;
            break;
        }
    }

    return _isPrime;
}


function SieveOfEratosthenes(listOfPrimeNumbers, startingNumber) {
    var l = listOfPrimeNumbers.length;

    for(i=startingNumber;i<=l; i+=startingNumber) {
        if(i<=startingNumber) continue;
        listOfPrimeNumbers[i] = false;
    }

    for(i=startingNumber+1;i<=l; i++) {
        if(listOfPrimeNumbers[i]) {
            startingNumber = i;
            break;
        } else {
            startingNumber = 0;
        }
    }

    var newListOfPrimeNumbers = listOfPrimeNumbers;
    if(startingNumber > 0) {
        if(startingNumber <= l) {
            newListOfPrimeNumbers = this.SieveOfEratosthenes(listOfPrimeNumbers, startingNumber);
        }
    }
    return newListOfPrimeNumbers;
}
