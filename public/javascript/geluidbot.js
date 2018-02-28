const geluid = new p5.Speech();
const geluid_luister = new p5.SpeechRec();
geluid_luister.onResult = bilalprat;
let text_boven = document.getElementById("welkoma");
let waar_ben_ik = false;
let begin = true


if (begin) {
    $(document).ready(() => {
        $("#chat-mic").hide();
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
            $("#chat-mic").show();
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
            $("#chat-mic").hide();
        });
    }
});


$(document).ready(() => {
    $("#chat-mic").on('mousedown mouseup',(e) => {
        if (e.type == "mousedown") {
            geluid_luister.start(true,false);
        } 
    })
})

function bilalprat() {
    if (geluid_luister.resultValue) {
        let input = geluid_luister.resultString;
        geluid.speak(input)
        console.log(input);
    }
}