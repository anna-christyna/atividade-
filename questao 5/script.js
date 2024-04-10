<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculadora de Datas</title>
</head>
<body>
    <label for="dataInput">Digite a data (dd mm aaaa):</label>
    <input type="text" id="dataInput">
    <button onclick="calcularDiferenca()">Calcular</button>
    <p id="resultado"></p>

    <script src="script.js"></script>
</body>
</html>

      function calcularDiferenca() {
          const dataInput = document.getElementById('dataInput').value;
          const partesData = dataInput.split(' ');

          if (partesData.length !== 3) {
              alert('Formato incorreto! Digite a data no formato dd mm aaaa.');
              return;
          }

          const dia = parseInt(partesData[0]);
          const mes = parseInt(partesData[1]) - 1; // Mês em JavaScript começa em 0 (janeiro = 0)
          const ano = parseInt(partesData[2]);

          const dataDigitada = new Date(ano, mes, dia);
          const dataAtual = new Date();

          const diferencaEmMilissegundos = dataDigitada - dataAtual;
          const diferencaEmDias = Math.floor(diferencaEmMilissegundos / (1000 * 60 * 60 * 24));

          const anosFaltantes = Math.floor(diferencaEmDias / 365);
          const mesesFaltantes = Math.floor((diferencaEmDias % 365) / 30);
          const diasFaltantes = diferencaEmDias % 30;

          const resultado = `Faltam ${anosFaltantes} anos, ${mesesFaltantes} meses e ${diasFaltantes} dias para a data digitada.`;
          document.getElementById('resultado').textContent = resultado;
      }


      <!DOCTYPE html>
      <html lang="pt-br">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Alteração de Aparência</title>
          <link rel="stylesheet" href="styles.css">
      </head>
      <body>
          <h1>Alteração de Aparência</h1>
          <p id="mensagem"></p>

          <script src="script.js"></script>
      </body>
      </html>



            function mudarAparencia() {
              let agora = new Date();
              let hora = agora.getHours();

              if (hora >= 6 && hora < 12) {
                document.bgColor = "white";
                document.body.style.color = "black";
              } else if (hora >= 12 && hora < 18) {
                document.bgColor = "yellow";
                document.body.style.color = "black";
              } else if (hora >= 18 && hora < 24) {
                document.bgColor = "dark";
                document.body.style.color = "white";
              } else {
                document.bgColor = "blue";
                document.body.style.color = "white";
              }
            }

            // Chamar a função para mudar a aparência imediatamente ao carregar a página
            mudarAparencia();

