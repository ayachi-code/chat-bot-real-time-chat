let input_waarden;
let bilal_assistent = new RiveScript();

bilal_assistent.loadFile("/bot/bot.rive",gelukt_bilal_assistent,fout_bilal_assistent);


function gelukt_bilal_assistent() {
    console.log("Yay de assistent is succesvol geladen")
}

function fout_bilal_assistent(error) {
    console.log("Oeps er is een fout opgetreden, fout melding " + error)
}



let de_invoer = addEventListener("keyup",(event) => {
    event.preventDefault();
    //Als enter word geklikt
    if (event.keyCode === 13) {
            input_waarden = document.getElementById("de_invoer").value;


            let ellement_p = document.createElement("p");
            let ellement_p_text = document.createTextNode("Gebruiker: " + input_waarden)
            ellement_p.appendChild(ellement_p_text)

            let chat_node = document.getElementById("chat");
            chat_node.appendChild(ellement_p);

            console.log(input_waarden)
    }
});