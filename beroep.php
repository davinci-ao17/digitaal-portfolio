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
                <h1> welkom bij de meest nutteloze pagina van de hele website</h1>
                <h3> een pagina dat moet gaan over wat mijn toekomst beeld is, 
                    terwijl als ik dat nog moest bedenken ik deze website nooit gebouwd zou hebben, 
                    en ook nooit zou bouwen
                </h3>
                <h2> een beetje bullshit is het he? of niet?</h2>
                <br>
                <br>
            </main>
        </div>
    </body>
</html>                         