import styles from "../../PageInformation.module.css";
import { Link } from "react-router-dom";

//This component contains the information of the 'Bestanden openen'-page
export default function BestandenOpenen() {

    return (
        <>
            <div className={styles.containerInformation}>
                <h1 className={styles.headerFont}>Bestanden openen en extensies</h1>
                <div className={styles.contentDiv}>
                    Op de meeste computers kun je bestanden openen door op ze te dubbelklikken met je linker muisknop.
                </div>
                <div className={styles.contentDiv}>
                    Je computer weet met welk programma het bestand geopend moet worden dankzij de extensie (het gedeelte
                    van de bestandsnaam dat achter de punt staat).
                </div>
                <div className={styles.contentDiv}>
                    Het plaatje ninja.jpg is bijvoorbeeld een JPEG-bestand (.jpg). Dubbelklik je erop, dan gaat je
                    computer op zoek naar een programma waarmee dit type plaatje wordt geopend.
                </div>
                <div className={styles.contentDiv}>
                    Als een bestand geen extensie heeft weet je computer niet met welk programma hij het moet openen.
                    Kijk eerst of je computer zo is ingesteld dat hij extensies laat zien. Meer informatie daarover vind
                    je <Link to="./tips/vindbestanden" className={styles.separateLink}>hier</Link>.
                </div>
                <div className={styles.contentDiv}>
                    Om een extensie toe te voegen of te veranderen, klik je met je rechter muisknop op een bestand om een
                    menu tevoorschijn te laten komen. Klik in het menu op &#8216;Naam wijzigen&#8217;. Kies de juiste
                    extensie voor het bestand: probeer bijvoorbeeld niet een plaatje de extensie &#8216;.txt&#8217; mee
                    te geven.
                </div>
                <div className={styles.contentDiv}>
                    Als de bestandsnaam een extensie heeft, kan het alsnog zijn dat je computer het bestand niet kan
                    openen. Bijvoorbeeld wanneer je niet het juiste programma geïnstalleerd hebt of als de computer niet
                    weet welk programma hij moet gebruiken. Als dat laatste het geval is, dan vertelt je computer je dat
                    en kun je een programma kiezen uit een lijst. Je kunt ook met de rechter muisknop op het bestand
                    klikken en in het menu dat verschijnt &#8216;Openen met…&#8217; aanklikken om een programma te
                    kiezen.
                </div>
                <div className={styles.contentDiv}>
                    &#8216;Openen met…&#8217; is ook handig als je een bestand wil openen met een ander programma dan het
                    programma dat je computer standaard gebruikt. Een .html-bestand wordt bijvoorbeeld standaard geopend
                    in een webbrowser. Maar als je de code wil veranderen, dan moet je het bestand openen in een
                    tekstverwerker.
                </div>
            </div>
        </>
    )
}