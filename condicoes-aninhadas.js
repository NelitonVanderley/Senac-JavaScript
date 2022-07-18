
var calculo = document.getElementById('botao');
calculo.addEventListener('click', media)

function media (){
	var nota = Number(document.getElementById('texto-nota').value)
	var resultado = document.getElementById('res');
	var cor = document.getElementsByTagName('body')[0]
	resultado.innerHTML =`Sua nota final é <strong> ${nota} </strong> !`
	var img = document.querySelector('#imagem');
	cor.style.background = 'lavenderblush';
	

	if (nota> 10 ||nota < 0 ){
		resultado.innerHTML +=`<br>ERRO! <br> Valor informado é  <strong>
		inválido</strong>! informe uma nota entre 0 e 10.<br>` 
		img.setAttribute('src', 'erro.png')
		img.setAttribute('width', '200px')
	}
	else if (nota >= 7 && nota <= 10) {
		resultado.innerHTML +=`<br>Parabéns!<br>Você foi  <strong>
		Aprovado!</strong>` 
		cor.style.background = 'lightgreen'
		img.setAttribute('src', 'aprovado.png')
		img.setAttribute('width', '300px')
	} 
	else if (nota >=5 && nota < 7){
		resultado.innerHTML =`<br>Você foi precisará fazer uma  <strong> Recuperação </strong>!!`
		cor.style.background = 'goldenrod'
		img.setAttribute('src', 'recuperacao.png')
		resultado.innerHTML +=`<br><br><br><strong>Estude mais um pouco!</strong>!!`
		img.setAttribute('width', '300px')
	}
	else {
		resultado.innerHTML = `<br>Infelizmente você  <strong> NÃO </strong>foi  aprovado!`
		cor.style.background = 'tomato'
		img.setAttribute('src', 'reprovado.png')
		img.setAttribute('width', '300px')
	}
}