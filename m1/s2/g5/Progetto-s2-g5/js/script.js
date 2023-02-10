

function aggiungiTasto(elemento){
    let simbolo = elemento.getAttribute('data-simbolo');
    
    let display = document.querySelector('#display');
    display.value += simbolo
}

function total(){
    let display = document.querySelector('#display');

    if(display.value = eval(display.value)){
        display.value = eval(display.value);
    } else {
        display.textContent = 'error'
    }
}

function cancella(){
    let display = document.querySelector('#display');

    display.value = '';

}

function aggiungiTasto1(elemento){
    let simbolo = elemento.getAttribute('data-simbolo');
    
    let display = document.querySelector('#display');
    display.value += simbolo
}

function radiceQuadrata(){
    let display = document.querySelector('#display');

    display.value = math.sqrt(display.value);

}
