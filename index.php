    <!DOCTYPE html>
    <html lang="nl">
    <head>
    <?php $h1='mijn portfolio';$h2='main page';?>
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
            <main id="mainpage">
            <content id="left">
            <a href="overmij.php" >
            <section class="mainsection">
                    <h3>over mij</h3>
                    <img class="mainimg" alt="img" src="media/HTML5xoxo.png">
                    <p>op deze pagina vertel ik iets meer over mezelf.<a href="item1.php"><i>bekijk hier</i></a>
            </section></a>

            <a href="code.php" >
            <section class="mainsection">
                    <h3>codepage</h3>
                    <img class="mainimg" alt="img" src="media/HTML5XD.png">
                    <p>hier vertel ik mijn ervaring met progammeer talen <a href="item1.php">
                    <i>bekijk hier</i></a>
            </section>
            </a>

            <a href="#" >
            <section class="mainsection">
                    <h3>handy</h3>
                    <img class="mainimg" alt="img" src="media/HTML5xoxo.png">
                    <p>opdracht 6: handy opdracht <a href="item1.php"><i>bekijk hier</i></a>
            </section></a>

            <a href="#" >
            <section class="mainsection">
                    <h3>handy</h3>
                    <img class="mainimg" alt="img" src="media/HTML5XD.png">
                    <p>opdracht 6: handy opdracht <a href="item1.php">
                    <i>bekijk hier</i></a>
            </section>
            </a>
            </content>

            <content id="right">
                <div>
                    <span> hahaa ik gebruik div en span hahah</span>
                    <span> hahaa ik gebruik div en span hahah</span>
                    <span> hahaa ik gebruik div en span hahah</span>
                </div>
                <div>
                    <span> hahaa ik gebruik div en span hahah</span>
                    <span> hahaa ik gebruik div en span hahah</span>
                    <span> hahaa ik gebruik div en span hahah</span>
                </div>
                <div>
                    <span> hahaa ik gebruik div en span hahah</span>
                    <span> hahaa ik gebruik div en span hahah</span>
                    <span> hahaa ik gebruik div en span hahah</span>
                </div>
            </content>
            </main>
        </div>
    </body>
</html>                         