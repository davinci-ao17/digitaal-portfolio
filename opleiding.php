<!DOCTYPE html>
<html lang="nl">
<head>
<?php $h1='mijn portfolio';$h2='codepage';?>
    <?php
    date_default_timezone_set("UTC");
    $age = date('Y') - 2000;
    if(date('nj') < 316){
        $age - 1;
    }


    ?>
    <?php include 'code/headinfo.php'?>
    <title>welkom!</title>
    <link rel="stylesheet" type="text/css" href="css/ecss.css">
</head>
<body>
<?php include 'code/menu1.php'?>
    <div id="mainblock">
    <?php include 'code/menu2.php'?>
        <main>
            <h1> school projecten</h1>
            <h2>hier staan alle projecten op github van school die ik gemaakt heb</h2>
            <h3 class="top">html opdrachten</h3>
            <content id="schoolitems">
                <a href="https://github.com/oga-sven/wie-ben-ik" target="_blank"><section class="opleiding">
                    <h3>Wie ben ik (versie 1)</h3>
                    <img class="imgsection" alt="img" src="media/HTML5.png">
                    <p>opdracht 1: de eerste versie van wie ben ik.<a href="item1.php"><i>recepten</i></a></p>
                </section></a>

                <a href="https://github.com/oga-sven/recepten" target="_blank"><section class="opleiding">
                    <h3>recepten</h3>
                    <img class="imgsection" alt="img" src="media/HTML5.png">
                    <p>opdracht 2: de recepten opdracht. <a href="item1.php"><i>recepten</i></a>
                </section></a>

                <a href="https://github.com/oga-sven/de-vloot" target="_blank"><section class="opleiding">
                    <h3>vloot</h3>
                    <img class="imgsection" alt="img" src="media/HTML5.png">
                    <p>opdracht 3: de vloot opdracht. <a href="item1.php"><i>bekijk hier</i></a>
                </section></a>
    
                <a href="https://github.com/oga-sven/layout" target="_blank"><section class="opleiding">
                    <h3>layout</h3>
                    <img class="imgsection" alt="img" src="media/HTML5.png">
                    <p>opdracht 4: layout opdracht.<a href="item1.php"><i>bekijk hier</i></a>
                </section></a>
    
                <a href="https://github.com/oga-sven/grid" target="_blank"><section class="opleiding">
                    <h3>grid</h3>
                    <img class="imgsection" alt="img" src="media/HTML5.png">
                    <p>opdracht 5: de grid opdracht.<a href="item1.php"><i>bekijk hier</i></a>
                </section></a>
    
                <a href="https://github.com/oga-sven/handy" target="_blank"><section class="opleiding">
                    <h3>handy</h3>
                    <img class="imgsection" alt="img" src="media/HTML5.png">
                    <p>opdracht 6: handy opdracht <a href="item1.php"><i>bekijk hier</i></a>
                </section></a>
                </content>
                
                <h3 class="top">javascript opdrachten</h3>
                
                <content id="schoolitems">
                <a href="https://github.com/oga-sven/robotarm" target="_blank"><section class="opleiding">
                    <h3>Robot arm</h3>
                    <img class="imgsection" alt="img" src="media/JS.png">
                    <p>eerste javascript opdracht <a href="item1.php"><i>bekijk hier</i></a>
                </section></a>
            </content>
        </main>
    </div>
</body>
</html>                         