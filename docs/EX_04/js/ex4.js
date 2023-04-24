
function calcularMedia() {
	// Obtém as notas e o nome do aluno
	let nota1 = parseFloat(document.getElementById("nota1").value);
	let nota2 = parseFloat(document.getElementById("nota2").value);
	let nota3 = parseFloat(document.getElementById("nota3").value);
	let nota4 = parseFloat(document.getElementById("nota4").value);
	let nome = document.getElementById("nome").value;

	// Calcula a média
	let media = (nota1 + nota2 + nota3 + nota4) / 4;

	// Define a situação do aluno
	let situacao;
	if (media >= 6.0) {
	situacao = "Aprovado";
	document.getElementById("resultado").className = "aprovado";
	} else if (media < 2.0) {
	situacao = "Reprovado";
	document.getElementById("resultado").className = "reprovado";
	} else {
	situacao = "Recuperação";
	document.getElementById("resultado").className = "recuperacao";
	}

	// Exibe a média e a situação do aluno
	document.getElementById("resultado").innerHTML = "Aluno: " + nome + "<br>Média: " + media.toFixed(2) + "<br>Situação: " + situacao;
}
