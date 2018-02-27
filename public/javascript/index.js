let input_waarden;
let bilal_assistent = new RiveScript();


let de_invoer = addEventListener("keyup",(event) => {
    event.preventDefault();
    //Als enter word geklikt
    if (event.keyCode === 13) {
            input_waarden = document.getElementById("de_invoer").value;
            console.log(input_waarden)
    }
});