<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>replit</title>
  <link href="style.css" rel="stylesheet" type="text/css" />
</head>

<body>

  <p>
    A combinação de <span id="numero"></span> com <span id="amostras"></span> amostras é:  <span id="resultado"></span>    
  </p>

  <script src="script.js"></script>
</body>

</html>

  combinacao()

  function fatorial(fatorial){

   let resultado = fatorial;

    for(let controle = 1; controle <  fatorial; controle++){
      resultado = resultado * controle
    }

     return Number(resultado);
  }

  function combinacao(){

     let n = Number(prompt("Qual o numero "));
     let k = Number(prompt("Qual a amostra "));

     let resultado = fatorial(n) / fatorial(k) * fatorial(n-k)

    document.getElementById("numero").innerHTML= n;
    document.getElementById("amostras").innerHTML= k;
    document.getElementById("resultado").innerHTML= Number(resultado); 

  }