let nSorteado = Math.floor(Math.random() * 10);
console.log(nSorteado);
function submitForm(event){
    event.preventDefault();
}

function valida () {
    let inp_number = document.getElementById("inp_number");

    if(inp_number.value == nSorteado) {
        alert("Você acertou!");
        location.reload();
    }else{
        alert("Você errou!")
        console.log(inp_number.value);
    }
}
