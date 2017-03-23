var p7 = {
    title:"10001st prime",
    desc:'By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.<br />'
        + '<br />'
        + 'What is the 10,001st prime number?',
    answer: function() {
        var bigListOfPrimes = [];
        var numberOfPrimesToFind = 10001;
        var numberToTest = 2;

        do {
            if((numberToTest == 2) || (numberToTest == 5)) {
                bigListOfPrimes.push(numberToTest);
                numberToTest++;
                continue;
            }

            if((numberToTest%2 == 0) || (numberToTest%5 == 0)) {
                numberToTest++;
                continue;
            }

            var isPrime = true;

            var sqrt = Math.ceil(Math.sqrt(numberToTest));
            for(var i=2; i<=sqrt; i++) {
                if(numberToTest%i == 0) {
                    isPrime = false;
                    break;
                }
            }

            if(isPrime) bigListOfPrimes.push(numberToTest);

            numberToTest++;

        } while(bigListOfPrimes.length < numberOfPrimesToFind)

        return bigListOfPrimes[numberOfPrimesToFind-1]; //104743
    }
};
