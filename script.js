function verificarIdade() {
  // 1. captura o valor digitado no campo de input
  const elementoInputNome = document.getElementById("campoNome");
  const nomeDigitado = elementoInputNome.value;
  const elementoInput = document.getElementById("campoIdade");
  const idadeDigitada = parseInt(elementoInput.value);

  // 2. acha o elemento onde o texto de resultado será exibido
  const elementoResultado = document.getElementById("mensagemResultado");
  const elementoResultado2 = document.getElementById("mensagemResultado2");

  // 3. impede processamento se o campo estiver em branco
  if (isNaN(idadeDigitada)) {
    elementoResultado.innerText = "Por favor, digite uma idade numérica válida."
    elementoResultado.style.color = "#dc2626";
    return
  }

  //4. bifurcação entre fluxo entre maio e menor de idade
  if(idadeDigitada >= 18) {
    elementoResultado.innerText = `Olá, ${nomeDigitado}! Você tem ${idadeDigitada} ano(s) e seu acesso foi liberado com sucesso.`;
    elementoResultado.style.color = "#16a34a";
    console.log(`verificação aprovada: ${idadeDigitada} anos(maior de idade)`);
  }
    else {
    const elementoInput = document.getElementById("campoIdade");
  const idadeDigitada = parseInt(elementoInput.value);
    const aFal = 18 - idadeDigitada;
    elementoResultado.innerText = `Olá, ${nomeDigitado}! Você tem ${idadeDigitada} ano(s) e ainda é menor de idade. Faltam ${aFal} ano(s) para atingir a maioridade.`;

    elementoResultado.style.color = "#d97706"
    console.log(`Verificação informativa: ${idadeDigitada} anos(Menor de idade)`);
  }
}
