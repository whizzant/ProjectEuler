var p6 = {
    title: "Sum square difference",
    desc: 'The sum of the squares of the first ten natural numbers is,<br />'
            + '12 + 22 + ... + 102 = 385<br />'
            + '<br />'
            + 'The square of the sum of the first ten natural numbers is,<br />'
            + '(1 + 2 + ... + 10)2 = 552 = 3025<br />'
            + '<br />'
            + 'Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.<br />'
            + '<br />'
            + 'Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.<br />',
    answer: function () {
        var s1 = 0;
        var s2 = 0;

        for(var i=1; i<=100; i++) {
            s1 += Math.pow(i, 2);
            s2 += i;
        }

        return Math.pow(s2, 2) - s1;
    }
};




