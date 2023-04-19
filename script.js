// BILLEDEGALLERI AF BØGER //
// Variable:
const bog1 = document.getElementById("bog1");
const bog2 = document.getElementById("bog2");
const bog3 = document.getElementById("bog3");
const bog4 = document.getElementById("bog4");
const bog5 = document.getElementById("bog5");
const bog6 = document.getElementById("bog6");
const hoejrePil = document.getElementById("hoejrePil");
const venstrePil = document.getElementById("venstrePil");

// Arrayet:
const carousel = [bog1, bog2, bog3, bog4, bog5, bog6];

carousel[0].style.display = "block";
carousel[1].style.display = "none";
carousel[2].style.display = "none";
carousel[3].style.display = "none";
carousel[4].style.display = "none";
carousel[5].style.display = "none";

// Knapper:
hoejrePil.addEventListener("click", naesteBillede);
venstrePil.addEventListener("click", forrigeBillede);

// Funktioner:
function naesteBillede(){
    carousel[0].style.display = "none"; // Skjul den viste
    carousel.push(carousel[0]); // Put den første ind til sidst
    carousel.shift(); // Fjern den første og flyt alle en ned
    carousel[0].style.display = "block"; // Vis den der nu er først
}

function forrigeBillede(){
    carousel[0].style.display = "none";
    carousel.unshift(carousel[5]);
    carousel.pop();
    carousel[0].style.display = "block";
}







// ANIMATIONER //
AOS.init(); 






// AFSPILNING AF LYDKLIP //
function playSound(barn) {
    document.getElementById(barn).play();
};


