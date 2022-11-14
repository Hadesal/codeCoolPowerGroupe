
function main(){


    let coinHeads = document.getElementById("coin-heads");
    let coinTails = document.getElementById("coin-tails");
    let message = document.getElementById("message");
    const images = [coinHeads,coinTails];
    const texts= ["You have chosen heads","You have chosen tails"];
    coinHeads.style.display = "none";
    coinTails.style.display = "none";

    window.onload =function(){
        let x = Math.floor(Math.random() * 2);
        images[x].style.display = "flex";
        message.innerHTML= texts[x];
    }
}
main();