import styles from "../../PageInformation.module.css";

//This component contains the information of the 'Afbeeldingen toevoegen'-page
export default function AfbeeldingenToevoegen() {

    return (
        <>
            <div className={styles.containerInformation}>
                <h1 className={styles.headerFont}>Meer informatie over het toevoegen van afbeeldingen</h1>

                <div className={styles.contentDiv}>
                    Er zijn heel veel verschillende soorten afbeeldingen, die allemaal in een andere situatie het best
                    tot hun recht komen. Dit zijn de drie belangrijkste typen afbeeldingen die je op internet tegenkomt:
                </div>
                <ul className={styles.contentDiv}>
                    <li>
                        JPEG, met de extensie .jpg of .jpeg. JPEG-bestanden zijn ontworpen om foto&#8217;s weer te
                        geven: ze kunnen een groot aantal kleuren bevatten en de grootte van het bestand blijft beperkt
                        dankzij compressie. Het nadeel van JPEG-bestanden is dat afbeeldingen wat wazig kunnen zijn
                        dankzij de compressie, zeker wanneer je inzoomt.
                    </li>
                    <li>
                        PNG, met de extensie .png. Deze bestanden nemen meer ruimte in dan JPEG-bestanden omdat ze geen
                        gebruik maken van compressie. Daardoor zien ze er ook scherp uit wanneer je inzoomt. Als gevolg
                        daarvan zijn ze de beste keus voor afbeeldingen als tekeningen, logo&#8217;s en grafieken.
                        PNG-bestanden bevatten minder kleuren dan JPEG-bestanden. Ze zijn dus minder geschikt voor
                        foto&#8217;s.
                    </li>
                    <li>
                        GIF, met de extensie .gif. Het grote voordeel van GIF-bestanden is dat ze gebruikt kunnen worden
                        om kleine animaties te maken. Deze voeg je op dezelfde manier toe aan je website als alle andere
                        afbeeldingen. Net zoals het geval is bij PNG-bestanden zijn GIF-bestanden vooral geschikt voor
                        simpelere afbeeldingen met minder kleuren dan foto&#8217;s.
                    </li>
                </ul>
            </div>
        </>
    )
}