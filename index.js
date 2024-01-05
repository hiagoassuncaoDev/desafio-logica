
var nomeDoHeroi = "Halley";
var xpDoHeroi = 3005;


if (xpDoHeroi < 1000) {
    console.log(nomeDoHeroi + " é de nível Ferro.");
} else if (xpDoHeroi >= 1001 && xpDoHeroi <= 2000) {
    console.log(nomeDoHeroi + " é de nível Bronze.");
} else if (xpDoHeroi >= 2001 && xpDoHeroi <= 5000) {
    console.log(nomeDoHeroi + " é de nível Prata.");
} else if (xpDoHeroi >= 5001 && xpDoHeroi <= 7000) {
    console.log(nomeDoHeroi + " é de nível Ouro.");
} else if (xpDoHeroi >= 7001 && xpDoHeroi <= 8000) {
    console.log(nomeDoHeroi + " é de nível Platina.");
} else if (xpDoHeroi >= 8001 && xpDoHeroi <= 9000) {
    console.log(nomeDoHeroi + " é de nível Ascendente.");
} else if (xpDoHeroi >= 9001 && xpDoHeroi <= 10000) {
    console.log(nomeDoHeroi + " é de nível Imortal.");
} else {
    console.log(nomeDoHeroi + " é de nível Radiante.");
}