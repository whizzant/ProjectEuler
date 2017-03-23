var p4 = {
    title:"Largest palindrome product",
    desc:"A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99. <br />Find the largest palindrome made from the product of two 3-digit numbers.",
    answer: function() {
        var value = 0;

        for(var i=999; i>99; i--) {
            for(var j=999; j>99; j--) {
                var p1 = i*j;
                if(p1 < value) continue;

                var p2 = p1.toString().split("").reverse().join("");
                if(String(p1) == String(p2)) {
                    if(p1 > value) value = p1;
                }
            }
        }

        return value;
    }
};
