var p10 = {
    title:"Summation of primes",
    desc:"The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.<br />"
        + "Find the sum of all the primes below two million.",
    answer: function() {
        var value = 0;

        var upperLimit = 2000000;
        for(var i=2; i<upperLimit; i++) {
            if(isPrime(i)) value += i;
        }

        return value; //142913828922
    }
};
