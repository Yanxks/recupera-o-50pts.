document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('imc-form');
  const pesoInput = document.getElementById('peso');
  const alturaInput = document.getElementById('altura');
  const resultado = document.getElementById('resultado');

  function classifica(imc){
    if (imc < 18.5) return 'Abaixo do peso';
    if (imc < 25) return 'Peso normal';
    if (imc < 30) return 'Sobrepeso';
    return 'Obesidade';
  }

  function classeCss(imc){
    if (imc < 18.5) return 'abaixo';
    if (imc < 25) return 'normal';
    if (imc < 30) return 'sobrepeso';
    return 'obesidade';
  }

  form.addEventListener('submit', (ev) => {
    ev.preventDefault();
    resultado.className = '';
    const peso = parseFloat(pesoInput.value.replace(',', '.'));
    const altura = parseFloat(alturaInput.value.replace(',', '.'));

    if (!peso || peso <= 0 || !altura || altura <= 0) {
      resultado.textContent = 'Por favor preencha peso e altura válidos.';
      resultado.classList.add('error');
      return;
    }

    const imc = peso / (altura * altura);
    const imcStr = imc.toFixed(2).replace('.', ',');

    const classificacao = classifica(imc);
    resultado.innerHTML = Seu IMC é <strong>${imcStr}</strong> — ${classificacao};
    resultado.classList.add(classeCss(imc));
  });
});