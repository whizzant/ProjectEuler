var p5 = {
    title:"Smallest multiple",
    desc:"2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.<br />What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?",
    answer: function() {
        var value = 0;
        var counter = 20;


        do {
            for(var i=20;i>0;i--) {
                if(counter%i == 0) {
                    value = counter;
                } else {
                    value = 0;
                    break;
                }
            }
//232792560
            counter += 20;
            if(counter >= 500000000) value = 100;
        } while (value == 0);

        return value;
    }
};
