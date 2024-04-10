<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <title>Calculadora Científica</title>
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f0f0f0;
        }
        #calculator {
            width: 300px;
            background-color: #ffffff;
            border-radius: 5px;
            padding: 10px;
        }
        #display {
            width: 100%;
            height: 50px;
            margin-bottom: 10px;
            text-align: right;
            font-size: 20px;
        }
        #buttons {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 5px;
        }
        button {
            height: 50px;
            font-size: 18px;
        }
    </style>
</head>
<body>
<div id="calculator">
    <input type="text" id="display" readonly>
    <div id="buttons">
        <!-- Botões de números -->
        <button onclick="appendNumber(1)">1</button>
        <button onclick="appendNumber(2)">2</button>
        <button onclick="appendNumber(3)">3</button>
        <button onclick="appendNumber(4)">4</button>
        <button onclick="appendNumber(5)">5</button>
        <button onclick="appendNumber(6)">6</button>
        <button onclick="appendNumber(7)">7</button>
        <button onclick="appendNumber(8)">8</button>
        <button onclick="appendNumber(9)">9</button>
        <button onclick="appendNumber(0)">0</button>
        <!-- Botões de operações matemáticas -->
        <button onclick="setOperation('+')">+</button>
        <button onclick="setOperation('-')">-</button>
        <button onclick="setOperation('')"></button>
        <button onclick="setOperation('/')">/</button>
        <button onclick="calculatePercentage()">%</button>
    </div>
</div>
</body>
</html>
