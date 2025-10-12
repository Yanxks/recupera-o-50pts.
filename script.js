document.addEventListener('DOMContentLoaded', () => {
const form = document.getElementById('imc-form');
const pesoEl = document.getElementById('peso');
const alturaEl = document.getElementById('altura');
const resultadoEl = document.getElementById('resultado');

const calcularIMC = (peso, altura) => peso / (altura ** 2);

const obterClassificacao = (imc) => {
if (imc < 18.5) return { texto: 'Abaixo do peso', classe: 'abaixo' };
if (imc < 25) return { texto: 'Peso normal', classe: 'normal' };
if (imc < 30) return { texto: 'Sobrepeso', classe: 'sobrepeso' };
return { texto: 'Obesidade', classe: 'obesidade' };
};

const exibirMensagem = (mensagem, classe) => {
resultadoEl.textContent = mensagem;
resultadoEl.className = classe;
};

form.addEventListener('submit', (e) => {
e.preventDefault();

const peso = parseFloat(pesoEl.value.replace(',', '.'));
const altura = parseFloat(alturaEl.value.replace(',', '.'));

if (!peso || !altura || peso <= 0 || altura <= 0) {
  exibirMensagem('Por favor, insira valores válidos para peso e altura.', 'error');
  return;
}

const imc = calcularIMC(peso, altura);
const { texto, classe } = obterClassificacao(imc);

const mensagem = `Seu IMC é ${imc.toFixed(2).replace('.', ',')} — ${texto}`;
exibirMensagem(mensagem, classe);
})
})