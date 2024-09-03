<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Landing Page Responsiva</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        header {
            background-color: #4CAF50;
            color: white;
            padding: 1rem;
            text-align: center;
        }
        .main {
            padding: 2rem;
            text-align: center;
        }
        footer {
            background-color: #333;
            color: white;
            padding: 1rem;
            text-align: center;
            position: fixed;
            width: 100%;
            bottom: 0;
        }
        @media (max-width: 600px) {
            .main {
                padding: 1rem;
            }
        }
    </style>
</head>
<body>
    <header>
        <h1>Bem-vindo à Nossa Landing Page</h1>
    </header>
    <div class="main">
        <h2>Sobre Nós</h2>
        <p>Esta é uma landing page responsiva criada com PHP e HTML.</p>
    </div>
    <footer>
        <p>&copy; 2023 Sua Empresa. Todos os direitos reservados.</p>
    </footer>
</body>
</html>