function myf(a) {
    function innerf(b) {
        function innerf2(c) {
            return " wellcome " + a + " to " + b + " web page" + " " + "created by" + " " + c ;
        }
        return innerf2("ADO");
    }
    return innerf("My");
}
document.getElementById("unknown").innerHTML = myf();