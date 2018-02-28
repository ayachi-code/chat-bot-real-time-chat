const geluid = new p5.Speech();
let waar = 0;


let geluid_knop = document.getElementById("geluid-m").addEventListener('click',() => {
    waar += 1;
    console.log(waar)



    if (waar > 1) {
        waar = 0;
    } else if(waar == 0) {
        //Normal mode
    } else if (waar == 1) {
        //Geluid mode
    }
})