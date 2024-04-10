<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inverter Texto</title>
</head>
<body>
    <h1>Inverter Texto</h1>
    <textarea id="inputText" rows="5" cols="50" placeholder="Digite um texto..."></textarea>
    <br>
    <button onclick="inverterTexto()">Inverter</button>
    <br>
    <textarea id="outputText" rows="5" cols="50" readonly></textarea>

    <script src="script.js"></script>
</body>
</html>

  function inverterTexto() {
      const inputText = document.getElementById('inputText').value;
      const words = inputText.split(' '); // Divide o texto em palavras
      const reversedWords = words.map(word => word.split('').reverse().join('')); // Inverte a ordem das letras dentro de cada palavra
      const outputText = reversedWords.join(' '); // Junta as palavras novamente

      document.getElementById('outputText').value = outputText;
  }
