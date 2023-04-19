document.getElementById("submit").addEventListener("click", calc)
function validate(raw) { // error checking logic
    for(let i = 0; i<raw.length; i++) {
    if((/[0-9\(\)\*\/+-]/).test(raw.charAt(i)) == false) {

    }
    }
}
function calc() {
    let raw = document.getElementById("ex").value;

}