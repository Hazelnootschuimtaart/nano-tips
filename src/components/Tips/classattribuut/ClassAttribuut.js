import styles from "../../PageInformation.module.css";

//This component contains the information of the 'Class'-page
export default function ClassAttribuut() {

    //The code-parts are in variables to make it easier to show them as code at the page.
    const codeTextOne = `p.top-tip {
    border:4px solid #0000FF;
    border-radius:10px;
    padding:1em;
    background-color:#C5EBFB;
}

p.top-tip::before {
    color:#111111;
    content:"TOPTIP: ";
    font-weight:bold;
}`;

    const codeTextTwo = `<p class="top-tip">Alles in dit element heeft nu dezelfde opmaak als omschreven in het class-attribuut 'top-tip'.</p>`;
    const codeTextThree = `<p class="makeBig allCaps">Deze tekst zal nu groter zijn en alleen maar uit hoofdletters bestaan.</p>`;

    return (
        <>
            <div className={styles.containerInformation}>
                <h1 className={styles.headerFont}>Class</h1>
                <div className={styles.contentDiv}>
                    In het boek hebben we geleerd dat je delen van de pagina uit kunt lichten met behulp van het class-attribuut. Zo wilden de Nanonauten de toptips op hun pagina
                    lekker laten opvallen, zonder ze steeds stuk voor stuk te moeten stijlen in hun HTML-pagina&#8217;s. Om dat te doen hebben ze een class-attribuut gemaakt met
                    de naam &#8216;top-tip&#8217;, die ze aan ieder paragraaf-element (&lt;p&gt;) kunnen koppelen.
                </div>
                <pre className={styles.gameCodeSmall}><code>
                    {codeTextOne}
                </code></pre>
                <div className={styles.contentDiv}>
                    Vervolgens voegden ze het stijl-element toe aan het paragraaf-element (&lt;p&gt;) in de HTML-code. Op
                    deze manier:
                </div>
                <pre className={styles.gameCodeSmall}><code>
                    {codeTextTwo}
                </code></pre>
                <div className={styles.contentDiv}>
                    Laten we eens kijken wat dit stukje code doet.
                </div>
                <div className={styles.contentDiv}>
                    In de eerste regel hierboven hebben we toegevoegd:
                </div>
                <ul className={styles.contentDiv}>
                    <li>Een dichte, blauwe rand om de paragraaf heen</li>
                    <li>Afgeronde hoeken aan de rand</li>
                    <li>Wat extra ruimte tussen de tekst en de rand</li>
                    <li>Een lichtblauwe achtergrondkleur binnenin de rand</li>
                </ul>
                <div className={styles.contentDiv}>
                    De tweede regel bevat een stukje code die we nog niet eerder hebben gezien, namelijk &#8216;::before&#8217;. Dit is een zogenoemd pseudo-element. Je herkent hem
                    aan de twee dubbele punten direct na elkaar.
                </div>
                <div className={styles.contentDiv}>
                    Dit pseudo-element vertelt de browser dat hij de inhoud van de regel vóór de inhoud van het &lt;p&gt;-element moet zetten. In dit geval is dat de zwarte,
                    dikgedrukte tekst “TOPTIP:”. Dat betekent dat we deze tekst niet meer toe hoeven te voegen aan de HTML-pagina. Dat gebeurt nu automatisch.
                </div>
                <div className={styles.contentDiv}>
                    Er zijn ook nog andere pseudo-elementen die je op deze manier kunt gebruiken:
                </div>
                <ul className={styles.contentDiv}>
                    <li>::first-line past de regel alleen toe aan de eerst zin tekst in het &lt;p&gt;-element</li>
                    <li>::first-letter past de regel alleen toe op de eerste letter in het &lt;p&gt;-element</li>
                    <li>::after voegt de inhoud van de regel toe achter de inhoud van het &lt;p&gt;-element</li>
                    <li>::selection past de inhoud van de regel toe aan de tekst die door een gebruiker wordt
                        geselecteerd</li>
                </ul>
                <div className={styles.contentDiv}>Maar wat nou als we meer dan één class willen toepassen op een element? Geen probleem! Je kunt namelijk zoveel classes gebruiken
                    als je zelf wil. Stel je voor dat je twee classes hebt gemaakt:
                </div>
                <ul className={styles.contentDiv}>
                    <li>“makeBig”: bevat een css-regel die het gebruikte lettertype groter maakt</li>
                    <li>“allCaps”: bevat een regel die tekst omzet naar hoofdletters</li>
                </ul>
                <div className={styles.contentDiv}>
                    Je kunt beide classes toepassen op een &lt;p&gt;-element door ze toe te voegen aan het class-attribuut, als je ze maar met een spatie van elkaar scheidt. Zoals
                    je hier ziet:
                </div>
                <pre className={styles.gameCodeSmall}><code>
                    {codeTextThree}
                </code></pre>
            </div>
        </>
    )
}