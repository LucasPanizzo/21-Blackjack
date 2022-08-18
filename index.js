alert("Ve tirando las cartas e introduce los números")

let suma=0
let numero = parseInt (prompt("Ingresa el número"));

while(suma<21){
    suma = suma + numero;
    alert("Tienes "+suma)
    if(suma<21)
    numero = parseInt (prompt("Ingresa el nuevo número"));
    else if(suma>21)
    alert("Te pasaste, tienes "+suma)  
    else if(suma===21)
    alert("¡Blackjack!")
}