let rangeMin=1;
let rangeMax=11;
let numSorteado; 
let apostas = document.getElementById("apostas");
let btnApostar = document.getElementById("btnApostar");
let resposta="";

btnApostar.addEventListener( "click" , function() {
	var lstApostas = apostas.selectedOptions;

	if(lstApostas!=null && lstApostas!=""){
		if(lstApostas.length != 3){
			document.getElementById("resposta").innerText="Você deve selecionar apenas três números por aposta!";
		}else{
			
			let numSorteado = Math.floor( Math.random() * (rangeMax-rangeMin) ) + rangeMin;
						
			for (let i=0; i<lstApostas.length; i++) {

				resposta += lstApostas[i].label;
				
				if(numSorteado==parseInt(lstApostas[i].label)){
					resposta+= " Parabéns você encontrou o número sorteado! " + lstApostas[i].label;
					break;
					
				}else if (numSorteado>parseInt(lstApostas[i].label)){
					resposta+= " O número sorteado é maior que " + lstApostas[i].label;
			
				}else if( numSorteado < parseInt(lstApostas[i].label)){
					resposta+= " O número sorteado é menor que " + lstApostas[i].label;
					
				}
			}
			//console.log(" resposta " + resposta);
			
			document.getElementById("resposta").innerText="O número sorteado foi " + numSorteado + " ,continue tentando!";
		}
		
	}
});
		
	
	
