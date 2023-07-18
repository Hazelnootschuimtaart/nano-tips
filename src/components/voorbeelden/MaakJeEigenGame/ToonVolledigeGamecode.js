import styles from "../../PageInformation.module.css";

//This component contains the information of the 'Bekijk de volledige game-code'-page
export default function ToonVolledigeGamecode() {

    //This code-part is in a variable to make it easier to show it as code at the page.
    const text = `<!DOCTYPE html>
    <html>
    <head>
        <title>Nanonauten in actie</title>
    </head>
    <body>
    <script>
    
        // CONSTANTEN
    
        var CANVAS_BREEDTE = 800;
        var CANVAS_HOOGTE = 600;
        var NANONAUT_BREEDTE = 181;
        var NANONAUT_HOOGTE = 229;
        var GROND_Y = 540;
        var NANONAUT_Y_VERSNELLING = 1;
        var SPATIEBALK_CODE = 32;
        var NANONAUT_SPRONG_SNELHEID = 20;
        var NANONAUT_X_SNELHEID = 5;
        var ACHTERGROND_BREEDTE = 1000;
        var NANONAUT_NR_ANIMATIEFRAMES = 7;
        var NANONAUT_ANIMATIESNELHEID = 3;
        var ROBOT_BREEDTE = 141;
        var ROBOT_HOOGTE = 139;
        var ROBOT_NR_ANIMATIEFRAMES = 9;
        var ROBOT_ANIMATIESNELHEID = 5;
        var ROBOT_X_SNELHEID = 4;
        var MIN_AFSTAND_TUSSEN_ROBOTS = 400;
        var MAX_AFSTAND_TUSSEN_ROBOTS = 1200;
        var MAX_ACTIEVE_ROBOTS = 3;
        var SCHERMSCHUD_RADIUS = 16;
        var NANONAUT_MAX_GEZONDHEID = 100;
        var SPEEL_SPELMODUS = 0;
        var GAME_OVER_SPELMODUS = 1;
    
        // INSTELLINGEN
    
        var canvas = document.createElement('canvas');
        var c = canvas.getContext('2d');
        canvas.width = CANVAS_BREEDTE;
        canvas.height = CANVAS_HOOGTE;
        document.body.appendChild(canvas);
    
        var nanonautAfbeelding = new Image();
        nanonautAfbeelding.src = 'geanimeerdenanonaut.png';
    
        var nanonautX = CANVAS_BREEDTE / 2;
        var nanonautY = GROND_Y - NANONAUT_HOOGTE;
    
        var achtergrondAfbeelding = new Image();
        achtergrondAfbeelding.src = 'achtergrond.png';
    
        var bosje1Afbeelding = new Image();
        bosje1Afbeelding.src = 'bosje1.png';
    
        var bosje2Afbeelding = new Image();
        bosje2Afbeelding.src = 'bosje2.png';
    
        var robotAfbeelding = new Image();
        robotAfbeelding.src = 'geanimeerdeRobot.png';
    
        var robotSpriteSheet = {
            nrFramesPerRij: 3,
            spriteWidth: ROBOT_BREEDTE,
            spriteHeight: ROBOT_HOOGTE,
            image: robotAfbeelding
        };
    
        var robotData = [{
            x: 400,
            y: GROND_Y - ROBOT_HOOGTE,
            frameNr: 0
        }];
    
        var nanonautSpriteSheet = {
            nrFramesPerRij: 5, spriteWidth: NANONAUT_BREEDTE, spriteHeight: NANONAUT_HOOGTE, image: nanonautAfbeelding
        };
    
        var nanonautBotsingsRechthoek = {
            xOffset: 60,
            yOffset: 20,
            breedte: 50,
            hoogte: 200
        };
        var robotBotsingsRechthoek = {
            xOffset: 50,
            yOffset: 20,
            breedte: 50,
            hoogte: 100
        };
    
        var nanonautYSnelheid = 0;
        var nanonautIsInDeLucht = false;
        var spatiebalkIsIngedrukt = false;
        var nanonautFrameNr = 0;
        var spelFrameTeller = 0;
        var bosjesData = genereerBosjes();
        var bosjeYCoordinaten = [100, 80, 90, 85];
        var eenBosje = { x: 500, y: 100 };
        var schermschudden = false;
        var nanonautGezondheid = NANONAUT_MAX_GEZONDHEID;
        var spelModus = SPEEL_SPELMODUS;
    
        var cameraX = 0;
        var cameraY = 0;
    
        window.addEventListener('keydown', onKeyDown);
        window.addEventListener('keyup', onKeyUp);
        window.addEventListener('load', start);
    
        function start() {
            window.requestAnimationFrame(hoofdLus);
        }
    
        function genereerBosjes() {
            var gegenereerdeBosjesData = [];
            var bosjeX = 0;
            while (bosjeX < (2 * CANVAS_BREEDTE)) {
                var bosjeAfbeelding;
                if (Math.random() >= 0.5) {
                    bosjeAfbeelding = bosje1Afbeelding;
                } else {
                    bosjeAfbeelding = bosje2Afbeelding;
                }
                gegenereerdeBosjesData.push({
                    x: bosjeX,
                    y: 80 + Math.random() * 20,
                    image: bosjeAfbeelding
                });
                bosjeX += 150 + Math.random() * 200;
            }
            return gegenereerdeBosjesData;
        }
    
        // HOOFD-LUS 
    
        function hoofdLus() {
            update();
            draw();
            window.requestAnimationFrame(hoofdLus);
        }
    
        // SPELER-HANDELINGEN
    
        function onKeyDown(event) {
            if (event.keyCode === SPATIEBALK_CODE) {
                spatiebalkIsIngedrukt = true;
            }
        }
        function onKeyUp(event) {
            if (event.keyCode === SPATIEBALK_CODE) {
                spatiebalkIsIngedrukt = false;
            }
        }
    
        // UPDATEN
    
        // Update de Nanonaut.
        function update() {
            if (spelModus != SPEEL_SPELMODUS) return;
            spelFrameTeller = spelFrameTeller + 1;
            nanonautX = nanonautX + NANONAUT_X_SNELHEID;
            if (spatiebalkIsIngedrukt &amp;&amp; !nanonautIsInDeLucht) {
                nanonautYSnelheid = -NANONAUT_SPRONG_SNELHEID;
                nanonautIsInDeLucht = true;
            }
            nanonautY = nanonautY + nanonautYSnelheid;
            nanonautYSnelheid = nanonautYSnelheid + NANONAUT_Y_VERSNELLING;
            if (nanonautY > (GROND_Y - NANONAUT_HOOGTE)) {
                nanonautY = GROND_Y - NANONAUT_HOOGTE;
                nanonautYSnelheid = 0;
                nanonautIsInDeLucht = false;
            }
    
            // Update de animatie.
            if ((spelFrameTeller % NANONAUT_ANIMATIESNELHEID) === 0) {
                nanonautFrameNr = nanonautFrameNr + 1;
                if (nanonautFrameNr >= NANONAUT_NR_ANIMATIEFRAMES) {
                    nanonautFrameNr = 0;
                }
            }
    
            // Update de camera.
            cameraX = nanonautX - 150;
    
            // Update de bosjes.
            for (var i=0; i<bosjesData.length; i++) {
                if ((bosjesData[i].x - cameraX) < - CANVAS_BREEDTE) {
                    bosjesData[i].x += (2 * CANVAS_BREEDTE) + 150;
                }
            }
    
            // Update de robots.
            updateRobots();
            schermschudden = false;
            var nanonautBotsteOpEenRobot = updateRobots();
            if (nanonautBotsteOpEenRobot) {
                schermschudden = true;
                if (nanonautGezondheid > 0) nanonautGezondheid -= 1;
            }
    
            // Controleer of spel game over is.
            if (nanonautGezondheid <= 0) {
                spelModus = GAME_OVER_SPELMODUS;
                schermschudden = false;
            }
        }
    
        function updateRobots() {
            // Verplaats en animeer robots en controleer op botsingen met Nanonaut.
            var nanonautBotsteOpEenRobot = false;
            for (var i=0; i<robotData.length; i++) {
                if (overlappenNanonautRobot(
                        nanonautX + nanonautBotsingsRechthoek.xOffset,
                        nanonautY + nanonautBotsingsRechthoek.yOffset,
                        nanonautBotsingsRechthoek.breedte,
                        nanonautBotsingsRechthoek.hoogte,
                        robotData[i].x + robotBotsingsRechthoek.xOffset,
                        robotData[i].y + robotBotsingsRechthoek.yOffset,
                        robotBotsingsRechthoek.breedte,
                        robotBotsingsRechthoek.hoogte,
                    )){
                    nanonautBotsteOpEenRobot = true;
                }
                robotData[i].x -= ROBOT_X_SNELHEID;
                if ((spelFrameTeller % ROBOT_ANIMATIESNELHEID) === 0) {
                    robotData[i].frameNr = robotData[i].frameNr + 1;
                    if (robotData[i].frameNr >= ROBOT_NR_ANIMATIEFRAMES) {
                        robotData[i].frameNr = 0;
                    }
                    return nanonautBotsteOpEenRobot;
                }
    
                // Verwijder robots die uit beeld zijn.
                var robotIndex = 0;
                while (robotIndex < robotData.length) {
                    if (robotData[robotIndex].x < cameraX - ROBOT_BREEDTE) {
                        robotData.splice(robotIndex, 1);
                    } else {
                        robotIndex += 1;
                    }
                }
                if (robotData.length < MAX_ACTIEVE_ROBOTS) {
                    var laatsteRobotX = 0;
                    if (robotData.length > 0) {
                        var laatsteRobotX = robotData[robotData.length - 1].x;
                    }
                    var nieuweRobotX = laatsteRobotX + MIN_AFSTAND_TUSSEN_ROBOTS + Math.random() * (MAX_AFSTAND_TUSSEN_ROBOTS - MIN_AFSTAND_TUSSEN_ROBOTS);
                    robotData.push({
                        x: nieuweRobotX,
                        y: GROND_Y - ROBOT_HOOGTE,
                        frameNr: 0
                    });
                }
            }
        }
    
        function overlappenNanonautEnRobotOpEenAs(nanonautDichtbijX, nanonautVerX, robotDichtbijX, robotVerX) {
            var nanonautOverlaptRandRobotDichtbij = (nanonautVerX >= robotDichtbijX) &amp;&amp; (nanonautVerX <= robotVerX);
            var nanonautOverlaptRandRobotVer = (nanonautDichtbijX >= robotDichtbijX) &amp;&amp; (nanonautDichtbijX <= robotVerX);
            var nanonautOverlaptRobotHelemaal = (nanonautDichtbijX <= robotDichtbijX) &amp;&amp; (nanonautVerX >= robotVerX);
            return nanonautOverlaptRandRobotDichtbij || nanonautOverlaptRandRobotVer ||  nanonautOverlaptRobotHelemaal;
        }
    
        function overlappenNanonautRobot(nanonautX, nanonautY, nanonautBreedte, nanonautHoogte, robotX, robotY, robotBreedte, robotHoogte) {
            var nanonautOverlaptRobotOpXAs = overlappenNanonautEnRobotOpEenAs(
                nanonautX,
                nanonautX + nanonautBreedte,
                robotX,
                robotX + robotBreedte
            );
    
            var nanonautOverlaptRobotOpYAs =  overlappenNanonautEnRobotOpEenAs(
                nanonautY,
                nanonautY + nanonautHoogte,
                robotY,
                robotY + robotHoogte
            );
            return nanonautOverlaptRobotOpXAs &amp;&amp; nanonautOverlaptRobotOpYAs;
        }
    
        // TEKENEN
    
        function draw() {
    
            // Laat het scherm schudden, indien nodig.
            var schuddendeCameraX = cameraX;
            var schuddendeCameraY = cameraY;
            if (schermschudden) {
                schuddendeCameraX += (Math.random() - .5) * SCHERMSCHUD_RADIUS;
                schuddendeCameraY += (Math.random() - .5) * SCHERMSCHUD_RADIUS;
            }
    
            // Teken de lucht.
            c.fillStyle = 'LightSkyBlue';
            c.fillRect(0, 0, CANVAS_BREEDTE, GROND_Y - 40);
    
            // Teken de achtergrond 
            var achtergrondX = - (schuddendeCameraX % ACHTERGROND_BREEDTE);
            c.drawImage(achtergrondAfbeelding, achtergrondX, -210);
            c.drawImage(achtergrondAfbeelding, achtergrondX + ACHTERGROND_BREEDTE, -210);
    
            // Teken de grond.
            c.fillStyle = 'ForestGreen';
            c.fillRect(0, GROND_Y - 40, CANVAS_BREEDTE, CANVAS_HOOGTE - GROND_Y + 40);
    
            // Teken de bosjes.
            for (var i=0; i<bosjesData.length; i++) {
                c.drawImage(bosjesData[i].image, bosjesData[i].x - schuddendeCameraX, GROND_Y - bosjesData[i].y - schuddendeCameraY);
            }
    
            // Teken de robots.
            for (var i=0; i<robotData.length; i++) {
                tekenGeanimeerdeSprite(robotData[i].x - schuddendeCameraX,
                    robotData[i].y - schuddendeCameraY, robotData[i].frameNr, robotSpriteSheet);
            }
    
            // Teken de Nanonaut.
            tekenGeanimeerdeSprite(nanonautX - schuddendeCameraX, nanonautY - schuddendeCameraY,
                nanonautFrameNr, nanonautSpriteSheet);
    
            // Laat de afstand zien die de Nanonaut heeft afgelegd.
            var nanonautAfstand = nanonautX / 100;
            c.fillStyle = 'black'
            c.font = '48px sans-serif';
            c.fillText(nanonautAfstand.toFixed(0) + 'm', 20, 40);
    
            // Teken de levensbalk.
            c.fillStyle = 'red';
            c.fillRect(400, 10, nanonautGezondheid / NANONAUT_MAX_GEZONDHEID * 380, 20);
            c.strokeStyle = 'red';
            c.strokeRect(400, 10, 380, 20);
    
            // Laat 'GAME OVER' zien als de game voorbij is.
            if (spelModus == GAME_OVER_SPELMODUS) {
                c.fillStyle = 'black';
                c.font = '96px sans-serif';
                c.fillText('GAME OVER', 120, 300);
            }
        }
    
        // Teken een geanimeerde sprite.
        function tekenGeanimeerdeSprite(schermX, schermY, frameNr, spriteSheet) {
            var spriteSheetRij = Math.floor(frameNr / spriteSheet.nrFramesPerRij);
            var spriteSheetKolom = frameNr % spriteSheet.nrFramesPerRij;
            var spriteSheetX = spriteSheetKolom * spriteSheet.spriteWidth;
            var spriteSheetY = spriteSheetRij * spriteSheet.spriteHeight;
            c.drawImage(
                spriteSheet.image,
                spriteSheetX, spriteSheetY,
                spriteSheet.spriteWidth, spriteSheet.spriteHeight, schermX, schermY,
                spriteSheet.spriteWidth, spriteSheet.spriteHeight
            );
        }
    
    </script>
    </body>
    </html>`

    return (
        <>
            <div className={styles.containerInformation}>
                <h1 className={styles.headerFont}>Bekijk de volledige game-code</h1>
                <div className={styles.contentDiv}>
                    Hieronder zie je de complete code van de Nanonauten-game. Kom je klem te zitten tijdens het coden?
                    Gebruik deze pagina dan om te debuggen.
                </div>

                <div className={styles.gameCodeLarge}>
                    <pre><code>{text}</code></pre>
                </div>
            </div>
        </>
    )
}