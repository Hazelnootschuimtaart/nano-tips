import styles from "../../PageInformation.module.css";
import { Link } from "react-router-dom";

//This component contains the information of the 'Tekstverwerker'-page
export default function Tekstverwerker() {

    return (
        <>
            <div className={styles.containerInformation}>
                <h1 className={styles.headerFont}>Wat zijn tekstverwerkers en code-editors?</h1>
                <div className={styles.contentDiv}>
                    Maak je een website in een tekstverwerker, dan is het belangrijk dat
                    je je code schrijft als &#8216;platte tekst&#8217;.
                </div>
                <div className={styles.contentDiv}>
                    Probeer je code te schrijven in een Word-processor, dan kan er een
                    heleboel misgaan. Veel van dat soort programma&#8217;s, zoals
                    Microsoft Word, proberen automatisch je tekst netter te maken en
                    veranderen citaattekens (&#8220;) in &#8216;slimme&#8217;
                    citaattekens (“”). Het gevolg: je code werkt niet!
                </div>
                <div className={styles.contentDiv}>
                    Met een tekstverwerker die gebruik maakt van platte tekst (zoals
                    Kladblok, dat standaard in Windows is geïnstalleerd) is code
                    schrijven veel makkelijker. Je kunt je tekst niet formatteren door
                    woorden schuin of dik te maken of te onderstrepen. (Als je deze
                    opties ziet in je tekstverwerker, dan maak je waarschijnlijk gebruik
                    van een Word-processor.)
                </div>
                <div className={styles.contentDiv}>
                    <img src="../images/tekst1.png" width="900" alt="tekst1" />
                </div>
                <div className={styles.contentDiv}>
                    Een code-editor lijkt op een tekstverwerker, maar bevat een aantal
                    extra functies die het makkelijker maken om code te schrijven. Een
                    code-editor laat tekst bijvoorbeeld automatisch inspringen en
                    gebruikt kleuren. Daarmee kun je gemakkelijker zien waar
                    bijvoorbeeld je HTML-tags staan.
                </div>
                <div className={styles.contentDiv}>
                    <img src="../images/tekst2.png" width="900" alt="tekst2" />
                </div>
                <div className={styles.contentDiv}>
                    Wil je meer tips over het gebruik van code-editors? Ga dan naar <Link to="../code-editors"
                        className={styles.separateLink}>de code-editors-pagina.</Link>
                </div>
            </div>
        </>
    )
}