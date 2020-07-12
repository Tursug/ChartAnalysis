function calculate(){
        p = document.getElementById("amount").value;
        n = document.getElementById("times").value;
        t = document.getElementById("years").value;
        r = document.getElementById("rate").value;
        s = document.getElementById("result");

        var A = (p* Math.pow((1 + (r/(n*100))), (n*t)));
        s.innerHTML = "The total amount is : " + A.toFixed(2);
        s.innerHTML += "<br> The interest is  : " + (A.toFixed(2) - p).toFixed(2);
}
function calculate2(){
        p = document.getElementById("amount2").value;
        n = document.getElementById("years2").value;
        r = document.getElementById("rate2").value;
        s = document.getElementById("result2");

        var A = p*n*r/100;
        var B = parseInt(A) + parseInt(p) ;
        s.innerHTML = "The interest is : " + A;
        s.innerHTML += "<br> The total amount is : " + B;
}
