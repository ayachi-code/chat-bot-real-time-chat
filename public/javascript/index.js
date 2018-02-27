let input_waarden;
let bilal_assistent = new RiveScript();

bilal_assistent.loadFile("/bot/bot.rive",gelukt_bilal_assistent,fout_bilal_assistent);


function gelukt_bilal_assistent() {
    console.log("Yay de assistent is succesvol geladen")
}



let de_invoer = addEventListener("keyup",(event) => {
    event.preventDefault();
    //Als enter word geklikt
    if (event.keyCode === 13) {
            input_waarden = document.getElementById("de_invoer").value;
            console.log(input_waarden)
    }
});