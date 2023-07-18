import styles from "../../PageInformation.module.css";
import { Link } from "react-router-dom";

//This component contains the information of the 'Code editors'-page
export default function CodeEditors() {

    return (
        <>
            <div className={styles.containerInformation}>
                <h1 className={styles.headerFont}>Tips bij het gebruik van onze favoriete code-editor, Brackets</h1>
                <div className={styles.contentDiv}>
                    Wil je een website maken in een code-editor, dan kun je daarvoor het best gebruik maken van Adobe
                    Brackets. Deze code-editor is gratis en kun je downloaden op onze <Link className={styles.separateLink} to="/downloads/">Downloads-pagina</Link>.
                    Er zijn versies voor alle besturingssystemen.
                </div>
                <div>
                    Hieronder volgen wat tips voor het gebruik van Brackets:
                </div>
                <ul className={styles.contentDiv}>
                    <li>
                        Brackets voorziet je code van kleurtjes. Dankzij die kleuren kun je snel zien om wat voor soort
                        code het gaat. Typ je een HTML-code, dan zijn je tags bijvoorbeeld blauw, je attributen groen en
                        bestandsnamen oranje.
                    </li>
                    <li>
                        Klik je op de knop &#8216;Live Preview&#8217; in de rechter bovenhoek, dan wordt de pagina waar
                        je aan werkt geopend in een webbrowser. Zo kun je direct (en in realtime) zien wat er met je
                        pagina gebeurt wanneer je je code aanpast. Live Preview werkt momenteel alleen met Google
                        Chrome. Wil je er gebruik van maken, dan moet je dus die browser installeren.
                    </li>
                    <li>
                        Selecteer je een stukje code in Brackets, dan wordt het stuk van je site dat je geselecteerd
                        hebt gemarkeerd in Live Preview. Dit is extra handig voor het coderen in CSS. Zo zie je in één
                        oogopslag op welke delen van de website een regel effect heeft.
                    </li>
                </ul>
            </div>
        </>
    )
}