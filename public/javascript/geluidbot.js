const geluid = new p5.Speech();
const geluid_luister = new p5.SpeechRec();
geluid_luister.onResult = bilalprat;
let text_boven = document.getElementById("welkoma");
let waar_ben_ik = false;
let begin = true
let input_bot_praat;



if (begin) {
    $(document).ready(() => {
        $("#micro").hide();
    });
}



let geluid_knop = document.getElementById("geluid-m").addEventListener('click',() => {
    waar_ben_ik = true;
    text_boven.innerText = "Mr bilal,al je vragen beantwoorden over chat-bilal.nl 'GELUID MODE' ";
    if (waar_ben_ik) {
    $(document).ready(() => {
        $("#de_invoer").hide();
    });    
    } 
    if(waar_ben_ik) {
        $(document).ready(() => {
            $("#micro").show();
        });
    }

})

//Normal mode
let normaal_knop = document.getElementById("geluid-normal").addEventListener('click',() => {
    waar_ben_ik = false;
    text_boven.innerText = "Mr bilal,al je vragen beantwoorden over chat-bilal.nl 'text mode' ";
    if (!waar_ben_ik) {
    $(document).ready(() => {
        $("#de_invoer").show();
    });
    } 
    if(!waar_ben_ik) {
        $(document).ready(() => {
            $("#micro").hide();
        });
    }
});


$(document).ready(() => {
    $("#micro").on('mousedown mouseup',(e) => {
        if (e.type == "mousedown") {
            geluid_luister.start(true,false);
        } else if(e.type == "mouseup") {
            console.log("Hij laat los :) ");
        }
    })
})

function bilalprat() {
    if (geluid_luister.resultValue) {
        input_bot_praat = geluid_luister.resultString;
        let antwoord = bilal_assistent.reply("local-user", input_bot_praat);
        geluid.speak(antwoord);
        //Maakt een P tag
        let ellement_p2 = document.createElement("p");
        let ellement_p_text2 = document.createTextNode("jij: " + input_bot_praat)
        ellement_p2.appendChild(ellement_p_text2)
        //Zet een P in een DIV
        let chat_node2 = document.getElementById("chat");
        chat_node2.appendChild(ellement_p2);
        //console.log(input_bot_praat)
        //Maakt een P tag voor de Bot
        let ellement_p_bot2 = document.createElement("p");
        //Set de text gelijk antwoord
        let ellement_p_bot_text2 = document.createTextNode("Bot: " + antwoord);
        //Combineerd het
        ellement_p_bot2.appendChild(ellement_p_bot_text2);
        //Zet het in de chat div
        let chat_node_bot2 = document.getElementById("chat");
        chat_node_bot2.appendChild(ellement_p_bot2);
        return input_bot_praat;

    }
}