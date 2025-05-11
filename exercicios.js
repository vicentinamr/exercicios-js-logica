// Exercício 1 - Verifica se número é par ou ímpar
function verificarParOuImpar(numero) {
    if (numero % 2 === 0) {
      console.log("O número é par.");
    } else {
      console.log("O número é ímpar.");
    }
  }
  
  // Exercício 2 - Classificação de idade
  function classificarIdade(idade) {
    if (idade < 12) {
      console.log("Criança");
    } else if (idade < 18) {
      console.log("Adolescente");
    } else if (idade < 60) {
      console.log("Adulto");
    } else {
      console.log("Idoso");
    }
  }
  
  // Exercício 3 - Classificação de nota
  function classificarNota(nota) {
    if (nota >= 7) {
      console.log("Aprovado");
    } else if (nota >= 5) {
      console.log("Recuperação");
    } else {
      console.log("Reprovado");
    }
  }
  
  // Exercício 4 - Menu com switch
  function menu(opcao) {
    switch (opcao) {
      case 1:
        console.log("Opção 1 selecionada.");
        break;
      case 2:
        console.log("Opção 2 selecionada.");
        break;
      case 3:
        console.log("Opção 3 selecionada.");
        break;
      default:
        console.log("Opção inválida.");
    }
  }
  
  // Exercício 5 - Cálculo do IMC
  function calcularIMC(peso, altura) {
    let imc = peso / (altura * altura);
    if (imc < 18.5) {
      console.log("Abaixo do peso");
    } else if (imc < 25) {
      console.log("Peso normal");
    } else if (imc < 30) {
      console.log("Sobrepeso");
    } else {
      console.log("Obesidade");
    }
  }
  
  // Exercício 6 - Tipo de triângulo
  function tipoTriangulo(a, b, c) {
    if (a < b + c && b < a + c && c < a + b) {
      if (a === b && b === c) {
        console.log("Triângulo equilátero");
      } else if (a === b || a === c || b === c) {
        console.log("Triângulo isósceles");
      } else {
        console.log("Triângulo escaleno");
      }
    } else {
      console.log("Não é um triângulo");
    }
  }
  
  // Exercício 7 - Cálculo do preço das maçãs
  function calcularPrecoMacas(quantidade) {
    let preco = quantidade < 12 ? 0.30 : 0.25;
    console.log("Total: R$" + (quantidade * preco).toFixed(2));
  }
  
  // Exercício 8 - Ordem crescente
  function ordemCrescente(a, b) {
    if (a < b) {
      console.log(a, b);
    } else {
      console.log(b, a);
    }
  }
  
  // Exercício 9 - Contagem regressiva de 10 a 1
  function contagemRegressiva() {
    for (let i = 10; i >= 1; i--) {
      console.log(i);
    }
  }
  
  // Exercício 10 - Imprimir número 10 vezes
  function imprimir10Vezes(numero) {
    for (let i = 0; i < 10; i++) {
      console.log(numero);
    }
  }
  
  // Exercício 11 - Soma de 5 números
  function somaDeCincoNumeros(numeros) {
    let soma = 0;
    for (let i = 0; i < 5; i++) {
      soma += numeros[i];
    }
    console.log("Soma total:", soma);
  }
  
  // Exercício 12 - Tabuada
  function tabuada(numero) {
    for (let i = 1; i <= 10; i++) {
      console.log(`${numero} x ${i} = ${numero * i}`);
    }
  }
  
  // Exercício 13 - Média até digitar 0
  function mediaNumeros(lista) {
    let soma = 0;
    let count = 0;
    for (let i = 0; i < lista.length; i++) {
      if (lista[i] === 0) break;
      soma += lista[i];
      count++;
    }
    if (count > 0) {
      console.log("Média:", (soma / count).toFixed(2));
    } else {
      console.log("Nenhum número válido inserido.");
    }
  }
  
  // Exercício 14 - Fatorial
  function fatorial(n) {
    let fat = 1;
    for (let i = 1; i <= n; i++) {
      fat *= i;
    }
    console.log(`Fatorial de ${n} é ${fat}`);
  }
  
  // Exercício 15 - Fibonacci
  function fibonacci() {
    let a = 0, b = 1;
    for (let i = 0; i < 10; i++) {
      console.log(a);
      let temp = a + b;
      a = b;
      b = temp;
    }
  }