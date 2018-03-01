let input_waarden;
let bilal_assistent = new RiveScript();
const geluid2 = new p5.Speech();
let vandaag_datum;
let ellement_p_text;

bilal_assistent.loadFile("/bot/bot.rive",gelukt_bilal_assistent,fout_bilal_assistent);


function gelukt_bilal_assistent() {
    console.log("Yay de assistent is succesvol geladen")
    bilal_assistent.sortReplies();
    vandaag_datum = Date();
    bilal_assistent.reply('local-user','set ' + vandaag_datum)

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
            ellement_p_text = document.createTextNode("jij: " + input_waarden)
            ellement_p.appendChild(ellement_p_text)

            let chat_node = document.getElementById("chat");
            chat_node.appendChild(ellement_p);

            let antwoord = bilal_assistent.reply("local-user", input_waarden);
            geluid2.speak(antwoord);
            

            let ellement_p_bot = document.createElement("p");
            let ellement_p_bot_text = document.createTextNode("Bot: " + antwoord);
            ellement_p_bot.appendChild(ellement_p_bot_text);

            let chat_node_bot = document.getElementById("chat");
            chat_node_bot.appendChild(ellement_p_bot);

            console.log(input_waarden)
            //console.log(input_bot_praat);
            input_waarden = document.getElementById("de_invoer").value = "";

    }
});



let schoon = document.getElementById("schoon").addEventListener('click',() => {
    
});