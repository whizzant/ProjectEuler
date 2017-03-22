var p4 = {
    title:"Largest palindrome product",
    desc:"A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99. <br />Find the largest palindrome made from the product of two 3-digit numbers.",
    answer: function() {
        var value = 0;

        for(i=99; i>0; i++) {
            for(j=98; j>0; j++) {
                var p = i*j;
                var ps = p.toString().split("");
                var l =  ps.length;
                if(l%2 == 0) {
                    var p1 = p.toString().substr(0, l/2);
                    var p2 = p.toString().substr((l/2));
                    var p3 = p2.split("");
                    p3.reverse();
                    var p4 = p3.join("");

                    if(Number(p1) == Number(p4)) value = p;
                }

                if(value > 0) break;
            }
            if(value > 0) break;
        }

        return value;
    }
};
