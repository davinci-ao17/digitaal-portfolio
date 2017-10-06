<!DOCTYPE html>
    <html lang="nl">
    <head>
    <?php $h1='mijn portfolio';$h2='over mij';?>
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
            <h1>Info over mezelf.</h1>
                <img class="img" src="media/img.jpg" alt="something is wrong. please refresh or contact me!">
                
                <h2>Algemene informatie</h2>
                <ul class="c1">
                    <li class="l1">Naam:</li>
                    <li>Sven Elmendorp</li>
                    <li class="l1">Leeftijd:</li> 
                    <li><?php echo $age ?> Jaar</li>
                    <li class="l1">Woonplaats</li>
                    <li>Dordrecht</li>
                </ul>

                <h2>Hobbies (buiten het gehele ict gebied)</h2>
                <ul class="c1">
                    <li>Freerunnen</li>
                    <li>Fitness</li>
                    <li>Piano</li>
                    <li>Slapen</li>
                </ul>

                <h2>Werk, School, en Stageplekken</h2>
                <ul class="c1">
                    <li class="l1">School:</li>
                    <li>basisschool: Prinses juliana school</li>
                    <li>Voortgezet onderwijs: Mavostek</li>
                    <li><b>MBO: Da Vinci College Applicatie Ontwikkelaar Niveau 4 </b></li>
                    <li class="l1">Werk:</li> 
                    <li>HSS: html table maker</li>
                    <li>Elektroplast: (vakantie) werk in favriek </li>
                    <li><b>Dirk: medewerker/leidinggevende vers</b></li>
                    <li class="l1">Stageplekken</li>
                    <li>Avetica: progammeur</li>
                    <li>Arjan Technische Service: (hulp)monteur</li>
                </ul>   
            </main>
        </div>
    </body>
</html>                         