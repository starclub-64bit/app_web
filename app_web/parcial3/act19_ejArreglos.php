<html>
    <head>
        <title>Saludo con PHP</title>
        <meta charset="UTF-8">
    </head>
    <body>
        <header>
            <h1>Actividad 19 - Arreglos en PHP</h1>
        </header>
        <?php
            $dia = array("domingo","lunes","martes","miercoles",
            "jueves","viernes","sábado");
            $dia_numero =date("w");
            echo "Hoy es $dia[$dia_numero]";
            
        ?>
        <footer>
            <p>Renata Rodríguez Martínez | 189363</p>
        </footer>
    </body>
</html>