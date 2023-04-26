document.getElementById("submit").addEventListener("click", calc)
function val(element) { // Sets value to 0 if none entered
    if(!element.value) { // If no value is entered, default is 0
        return 0
    }
    return parseInt(element.value)
}
function calc() {
    document.getElementById("err").style.display = "none"
    document.getElementById("output").style.visibility = "hidden"
    // Get input values
    let initial = val(document.getElementById("invest"));
    let interest = val(document.getElementById("interest")); 
    let unTime = val(document.getElementById("time"));
    let toYears = val(document.getElementById("years"));
    let toMonths = val(document.getElementById("months"));
    // Calculations
    if(unTime == 0) {
        document.getElementById("error").innerHTML="Divide by 0 error: Interest cannot be calculated for 0 or null value of compounds per year."
        document.getElementById("err").style.display = "block"
    } else {
        const unInterest = interest/(unTime*100);
        const toTime = toYears+toMonths/12;
        const balance = (initial*(1+unInterest)**(toTime*unTime)).toFixed(2)
        // Set output values
        document.getElementById("calc").innerHTML=""+initial+"(1+"+unInterest+")<sup>"+toTime+"*"+unTime+"</sup>"
        document.getElementById("initial").innerHTML="$"+initial.toFixed(2)
        document.getElementById("balance").innerHTML="$"+balance
        document.getElementById("rev").innerHTML="$"+(balance-initial).toFixed(2)
        document.getElementById("output").style.visibility = "visible"

    }
    
}