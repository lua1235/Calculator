document.getElementById("submit").addEventListener("click", calc)
function val(element) { // Sets value to 0 if none entered
    if(!element.value) { // If no value is entered, default is 0
        return 0
    }
    return element.value
}
function calc() {
    // Get input values
    let initial = val(document.getElementById("invest"));
    let interest = val(document.getElementById("interest")); 
    let unTime = val(document.getElementById("time"));
    let toYears = val(document.getElementById("years"));
    let toMonths = val(document.getElementById("months"));
    // Calculations
    const unInterest = 1+interest*unTime/(1200);
    const toTime = toYears*12+toMonths;
    // Set output values
    document.getElementById("calc").innerHTML=""+initial+"("+unInterest+")<sup><sup>"+toTime+"</sup>/<sub>"+unTime+"</sub></sup>"
    document.getElementById("output").style.visibility = "visible"
}