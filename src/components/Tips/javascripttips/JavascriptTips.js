import styles from "../../PageInformation.module.css";


//This component contains the information of the 'Javascripttips'-page
export default function JavascriptTips() {

    //This code-part is in a variable to make it easier to show it as code at the page.
    const codeText = `function swapImage() {

    var imageDisplayed = document.getElementById('toon-plaatje');

    if (imageDisplayed.src.match("afbeeldingen/01.png")) {
    imageDisplayed.src = "afbeeldingen/02.png";
    }
    else {
    imageDisplayed.src = "afbeeldingen/01.png";
    }

}`

    return (
        <>
            <div className={styles.containerInformation}>
                <h1 className={styles.headerFont}>Meer over JavaScript</h1>
                <div className={styles.contentDiv}>
                    JavaScript is een krachtige en veelgebruikte programmeertaal die werkt in je browser. Je kunt het gebruiken om allerlei verschillende dingen te programmeren, van simpele animaties tot volledige
                    games.
                </div>
                <div className={styles.contentDiv}>
                    In het boek voegden we een simpel JavaScript-programma toe aan onze browser door de code daarvan in de body van onze pagina te plakken. Maar we hadden het programmaatje
                    (we noemen dat een &#8216;script&#8217;) ook in een apart bestand kunnen zetten. Dat is handig als je hetzelfde script op meerdere pagina&#8217;s wil gebruiken.
                    Je hoeft het script zo niet aan iedere pagina toe te voegen. Het maakt je pagina&#8217;s ook kleiner, waardoor ze sneller zullen laden.
                </div>
                <div className={styles.contentDiv}>
                    Knip en plak de JavaScript-code die je in je website hebt gezet in een leeg tekstbestand. Knip alleen het gedeelte tussen de &lt;script&gt;- en &lt;/script&gt;-tags.
                    Laat de tags zelf staan:
                </div>
                <pre className={styles.gameCodeSmall}><code>
                    {codeText}
                </code></pre>
                <div className={styles.contentDiv}>
                    Sla het bestand op. Geef het een bijpassende naam en gebruik .js als extensie. Bijvoorbeeld:
                    wisselaar.js.
                </div>
                <div className={styles.contentDiv}>
                    Als je het goed hebt gedaan, staan de tags &lt;script&gt; en &lt;/script&gt; nog in de code van je html-pagina. Die gebruik je om je browser te vertellen dat je een
                    script wil toevoegen én waar dat script zich bevindt. Dit doe je met behulp van de attributen <em>type</em> en <em>src</em>:
                </div>
                <pre className={styles.gameCodeSmall}><code>
                    &lt;script type="text/javascript" src="wisselaar.js"&gt;&lt;/script&gt;
                </code></pre>
                <div className={styles.contentDiv}>
                    Het attribuut <code className={styles.codeWords}>type="text/javascript"</code> vertelt je browser dat je gebruik maakt van
                    JavaScript. Dit is altijd hetzelfde. Het attribuut <code className={styles.codeWords}>src="wisselaar.js"</code> vertelt je
                    browser dat hij op zoek moet gaan naar een script met de naam wisselaar.js en dat dat script in
                    dezelfde map staat als de wegpagina.
                </div>
                <div className={styles.contentDiv}>
                    Als je het .js-bestand ergens anders wil opslaan, moet je het pad naar de juiste map opnemen in je
                    attribuut. Heb je bijvoorbeeld een map gemaakt met de naam &#8216;javascript&#8217; waar je al je
                    scripts in bewaart, dan ziet je attribuut er zo uit: <code className={styles.codeWords}>src="javascript/wisselaar.js"</code>.
                </div>
                <div className={styles.contentDiv}>
                    Op de volgende websites leer je meer over coden met JavaScript:
                </div>
                <ul className={styles.linkList}>
                    <li>
                        <a href="http://kata.coderdojo.com/wiki/KataDutch:Javascript" target="_blank">CoderDojo&#8217;s
                            beginnerscursus JavaScript</a> (Nederlandstalig)
                    </li>
                    <li>
                        <a href="http://www.handleidinghtml.nl/" target="_blank">Handleiding HTML</a> (Nederlandstalig)
                    </li>
                    <li>
                        <a href="https://www.codecademy.com/courses/javascript-beginner-en-rV00O/0/1"
                            target="_blank">Codecademy</a> (Nederlandstalig)
                    </li>
                    <li>
                        <a href="http://www.voorbeginners.info/javascript/" target="_blank">JavaScript voor
                            beginners</a> (Nederlandstalig)
                    </li>
                    <li>
                        <a href="http://www.w3schools.com/js/js_intro.asp" target="_blank">W3schools</a> (Engelstalig)
                    </li>
                    <li>
                        <a href="https://www.khanacademy.org/computing/computer-programming" target="_blank">Khan
                            Academy</a> (Engelstalig)
                    </li>
                </ul>
            </div>
        </>
    )
}
