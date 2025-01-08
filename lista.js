const bottoneAggiungi = document.getElementById('bottone-aggiungi');
const lista = document.getElementById('lista');
const bottoneTogli = document.getElementById("bottone-togli")


console.log(lista.children.length);


//al click del mouse attiva la funzione anonima
bottoneAggiungi.addEventListener('click', function() {

     //creo un nuovo elemento list item
     const nuovoElemento = document.createElement('li');

     
     nuovoElemento.textContent = 'mio nuovo Elemento' + (lista.children.length + 1);
     lista.appendChild(nuovoElemento);

}

)