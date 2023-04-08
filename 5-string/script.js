function inverteStr(){
   let valor = document.getElementById('valor').value;
   let resDiv = document.getElementById('res');

   resDiv.innerHTML = ''; //limpa a pag

   const resultadoP = document.createElement('p');
   resDiv.appendChild(resultadoP);

   let valorDividido = valor.split("");

   for (let i = (valorDividido.length-1); i >= 0; i--) {
      resultadoP.innerHTML += valorDividido[i];
   }

}