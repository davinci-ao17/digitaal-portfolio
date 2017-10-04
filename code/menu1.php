<!-- phone menu -->

<nav  id="sidenav" class="sidemenu">
                <a id="menubuttonclose" href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
                <a href="index.php">home</a>
                <a href="code.php">codepage</a>
                <a href="https://github.com/oga-sven/" target="blank">github page</a>
                <a href="http://steamcommunity.com/id/cakeisacena" target="blank">steam page</a>
                <a href="https://discord.gg/WUhvgUM" target="blank">join my discord!</a>
    </nav>
            <script>
                function openNav() {
                    document.getElementById("sidenav").style.width = "250px";
                }

                function closeNav() {
                    document.getElementById("sidenav").style.width = "0";
                }

                console.log('menu1 imported')
        </script>
        <header>
        <span id="menubuttonopen" style="font-size:37px;cursor:pointer;float:left;" onclick="openNav()">&#9776;</span>
            <h1 class="header"><?php echo $h1 ?></h1>
            <h2><?php echo $h2 ?></h2>
        </header>