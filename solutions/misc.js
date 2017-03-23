SieveOfEratosthenes: function(listOfPrimeNumbers, startingNumber) {
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
