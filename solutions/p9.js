var p9 = {
    title:"Special Pythagorean triplet",
    desc:"A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,<br />"
        + "a2 + b2 = c2<br />"
        + "For example, 32 + 42 = 9 + 16 = 25 = 52.<br />"
        + "<br />"
        + "There exists exactly one Pythagorean triplet for which a + b + c = 1000.<br/>"
        + "Find the product abc.",
    answer: function() {
        var value = 0;

        //Known rule:   a<b<c

        for(var c=1000; c>0; c--) {
            for(var b=(c-1); b>0; b--) {
                for(var a=(b-1); a>0; a--) {
                    if(a+b+c == 1000) {
                        var a2 = Math.pow(a, 2);
                        var b2 = Math.pow(b, 2);
                        var c2 = Math.pow(c, 2);

                        if((a2+b2) == c2) {
                            value = a*b*c;
                        }
                    }
                }
            }
        }

        return value;  //31875000
    }
};
