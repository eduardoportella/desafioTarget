function verificaFib(){
   let valor = document.getElementById('valor').value;
   let resDiv = document.getElementById('res');
   let fib = [0, 1];

   resDiv.innerHTML = ''; //limpa a pag

   const resultadoP = document.createElement('p');
   resDiv.appendChild(resultadoP);

   for (let i = 2; fib[fib.length-1] < valor; i++){
      fib.push(fib[i-1] + fib[i-2]);
      resultadoP.innerHTML += `${fib[i]} `
   }

   if (fib[fib.length-1] == valor){
      resultadoP.innerHTML += `<p>true</p>`   
   } else {
      resultadoP.innerHTML += `<p>false</p>`
   }
}