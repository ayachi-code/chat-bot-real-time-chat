const geluid = new p5.Speech();
let text_boven = document.getElementById("welkoma");


let geluid_knop = document.getElementById("geluid-m").addEventListener('click',() => {
    text_boven.innerText = "Mr bilal,al je vragen beantwoorden over chat-bilal.nl 'GELUID MODE' ";
    $(document).ready(() => {
        $("#de_invoer").hide();
    });    
    

})


let normaal_knop = document.getElementById("geluid-normal").addEventListener('click',() => {
    text_boven.innerText = "Mr bilal,al je vragen beantwoorden over chat-bilal.nl 'text mode' ";
    $(document).ready(() => {
        $("#de_invoer").show();
    });
});