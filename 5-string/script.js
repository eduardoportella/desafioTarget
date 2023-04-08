function verificaFib(){
   let valor = document.getElementById('valor').value;
   let resDiv = document.getElementById('res');

   resDiv.innerHTML = ''; //limpa a pag

   const resultadoP = document.createElement('p');
   resDiv.appendChild(resultadoP);

   let valorDividido = valor.split("");
   
}