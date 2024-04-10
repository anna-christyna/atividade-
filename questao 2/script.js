<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Message Scroller</title>
</head>
<body>
    <input type="text" id="messageInput" value="corinthians e flamengo">
    <button onclick="startScroll()">Start</button>
    <button onclick="stopScroll()">Stop</button>

    <script src="script.js"></script>
</body>
</html>

      // script.js

      let message = document.getElementById('messageInput').value;
      let intervalId;

      function scrollMessage() {
          // Extrai o primeiro caractere
          const firstChar = message.substring(0, 1);
          // Remove o primeiro caractere da mensagem
          message = message.substring(1) + firstChar;
          // Atualiza o valor do campo de texto
          document.getElementById('messageInput').value = message;
      }

      function startScroll() {
          // Inicia o rolamento da mensagem a cada 200 milissegundos
          intervalId = setInterval(scrollMessage, 200);
      }

      function stopScroll() {
          // Interrompe o rolamento
          clearInterval(intervalId);
      }
