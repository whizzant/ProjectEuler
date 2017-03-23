var p7 = {
    title:"10001st prime",
    desc:'By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.<br />'
        + '<br />'
        + 'What is the 10,001st prime number?',
    answer: function() {
        var arr = [];

        var l = 79;
        var u = 100;


/*
        var bigListOfPrimes = [];



        do {
            var arr = [];
            for(var i=l; i<=u; i++) {
                arr[i] = true;
            }
            arr = this.SieveOfEratosthenes(arr, 2);

            for(i=0;i<arr.length;i++) {
                if(arr[i]) {
                    bigListOfPrimes.push(i);
                    l = i;
                }
            }
            u = l*2;


        } while(bigListOfPrimes.length < 10);
*/


        for(var i=0; i<=u; i++) {
            arr[i] = true;
        }

        arr = this.SieveOfEratosthenes(arr, 2);


        var v = "<br />";
        for(var i=1; i<=arr.length; i++) {
            if(arr[i]) v += ', ' + i;
        }

        return v;
        //return arr[10001];
    },

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
};
