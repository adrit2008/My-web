function myf(a) {
    function innerf(b) {
        function innerf2(c) {
            return a + " wellcome to " + b + " web page" + " " + "created by" + " " + c ;
        }
        return innerf2("adrit");
    }
    return innerf("my");
}
document.getElementById("unknown").innerHTML = myf();