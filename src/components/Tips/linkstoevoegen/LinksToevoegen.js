import styles from "../../PageInformation.module.css";

//This component contains the information of the 'Links toevoegen'-page
export default function LinksToevoegen() {

    return (
        <>
            <div className={styles.containerInformation}>

                <h1 className={styles.headerFont}>Meer informatie over het toevoegen van links</h1>
                <div className={styles.contentDiv}>
                    Zoals je in het boek gezien hebt, gebruik je de tag &lt;a&gt; om een link toe te voegen.
                </div>
                <div className={styles.gameCodeSmall}>
                    <pre><code>&lt;a href="kom-kijken.html"&gt;Klik hier om te zien waar het volgende optreden van de Nanonauten plaats vindt!&lt;/a&gt;</code></pre>
                </div>
                <div className={styles.contentDiv}>
                    In plaats van tekst kun je ook plaatjes als link gebruiken. Dat doe je door het &lt;img&gt;-tag te
                    plaatsen op de plek waar de tekst van de link staat:
                </div>
                <div className={styles.gameCodeSmall}>
                    <pre><code>&lt;a href="kom-kijken.html"&gt;&lt;img alt="Afbeeldingen van een concertkaartje" src="afbeeldingen/concertkaartje.png"/&gt;&lt;/a&gt;</code></pre>
                </div>
                <div className={styles.contentDiv}>
                    Je kunt met een link ook doorverwijzen naar een gedeelte van dezelfde pagina. Dat is handig als je
                    bezoekers op en neer wil laten springen tussen verschillende delen van de site. Heb je halverwege de
                    pagina bijvoorbeeld een stukje tekst over het onderhouden van je instrumenten, dan kan het voor
                    bezoekers handig zijn als ze vanuit het menu direct naar dat stukje tekst kunnen springen. Kies
                    eerst de tekst of het plaatje waar je naar wil linken en geef het als volgt een label:
                </div>
                <div className={styles.gameCodeSmall}>
                    <pre><code>&lt;a name="instrumenten" id="instrumenten"&gt;Je instrumenten onderhouden&lt;/a&gt;</code></pre>
                </div>
                <div className={styles.contentDiv}>
                    De naam en het id-attribuut mag alles zijn wat je wil. De twee moeten echter wel hetzelfde zijn.
                </div>
                <div className={styles.contentDiv}>
                    Vervolgens maak je de daadwerkelijke link. Dit doe je op de normale manier, maar je plakt de naam die
                    je zojuist bedacht hebt achter de link met behulp van het hekje (#), zoals hier:
                </div>
                <div className={styles.gameCodeSmall}>
                    <pre><code>&lt;a href="kom-kijken.html#instrumenten"&gt;Klik hier voor tips over het onderhouden van je instrumenten.&lt;/a&gt;</code></pre>
                </div>
                <div className={styles.contentDiv}>
                    Probeer het eens!
                </div>
            </div>
        </>
    )
}
