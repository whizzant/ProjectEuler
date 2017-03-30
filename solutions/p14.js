
 var p14 = {
 title:"Longest Collatz sequence",
 desc:"The following iterative sequence is defined for the set of positive integers:<br />"
 + "<br />"
 + "n → n/2 (n is even)<br/>"
 + "n → 3n + 1 (n is odd)<br/>"
 + "<br/>"
 + "Using the rule above and starting with 13, we generate the following sequence:<br />"
 +"<br/>"
 + "13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1<br />"
 + "It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.<br />"
 +"<br/>"
 + "Which starting number, under one million, produces the longest chain?<br />"
 +"<br/>"
 + "NOTE: Once the chain starts the terms are allowed to go above one million.",
 answer: function() {
    var upperLimit = 999999;
    var largestChain = 0;
    var tempChain = 0;
    var chainValue = 0;

    for(var i=upperLimit; i>0; i--) {
        tempChain = 1;

        var temp = i;

        do {
            if(temp%2 == 0) {
                temp = temp/2;
            }  else {
                temp = (3 * temp) + 1;
            }
            tempChain ++;
        } while (temp > 1);

        if(tempChain > largestChain) {
            largestChain = tempChain;
            chainValue = i;
        }
    }

     return chainValue; //837799
 }
 };

