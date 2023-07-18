import styles from "../../PageInformation.module.css";
import { Link } from "react-router-dom";
import voorbeeld1 from '../../../images/voorbeeld1.png';
import voorbeeld2 from '../../../images/voorbeeld2.png';

//This component contains the information of the 'Bouw je eigen website'-page
export default function BouwJeEigenWebsite() {

    //This object contains the page-number and the document that should be opened when clicking the 'Resultaat pagina X' button.
    const allPagesHTMLObject = [
        { number: "8", title: "over-ons.html" }, { number: "10", title: "over-ons.html" }, { number: "13", title: "over-ons.html" }, { number: "16", title: "onze-liedjes.html" },
        { number: "18", title: "welkom.html" }, { number: "22", title: "optreden.html" }, { number: "27", title: "optreden.html" }, { number: "28", title: "optreden.html" },
        { number: "34", title: "optreden.html" }, { number: "35", title: "optreden.html" }, { number: "43", title: "optreden.html" }, { number: "46", title: "onze-liedjes.html" },
        { number: "48", title: "kom-kijken.html" }, { number: "52", title: "kom-kijken.html" }, { number: "55", title: "kom-kijken.html" }, { number: "57", title: "kom-kijken.html" },
        { number: "62", title: "60.html" }, { number: "69", title: "over-ons.html" }, { number: "75", title: "over-ons.html" }, { number: "77", title: "over-ons.html" },
        { number: "78a", title: "over-ons.html" }, { number: "78b", title: "over-ons.html" }, { number: "79", title: "over-ons.html" }, { number: "80", title: "over-ons.html" },
        { number: "81a", title: "over-ons.html" }, { number: "81b", title: "over-ons.html" }, { number: "82", title: "over-ons.html" }, { number: "84", title: "over-ons.html" }
    ];

    return (
        <>
            <div className={styles.containerInformation}>
                <h1 className={styles.headerFont}>Voorbeelden: Bouw je eigen website</h1>
                <div className={styles.contentDiv}>
                    Terwijl we ons een weg door het boek werken, bouwen we een website voor de Nanonauten. Telkens wanneer we de code van de website
                    aanpassen, kun je zien hoe de site eruit ziet in je browser door op de links hieronder te klikken. Zoek gewoon even naar het juiste
                    paginanummer. Je kunt de code van de website ook rechtstreeks van de pagina&#8217;s zelf kopiëren. Dat scheelt je weer typen. Hieronder
                    leggen we uit hoe je dat doet in Google Chrome (zie de <Link className={styles.separateLink} to="/downloads">downloads-pagina</Link>):
                </div>
                <ul className={styles.contentDiv}>
                    <li>Open een pagina</li>
                    <li>Klik met je rechter muisknop op de pagina en selecteer &#8216;inspecteren&#8217;</li>
                    <li>Je beeldscherm wordt in tweeën gehakt. Links zie je de webpagina, rechts de code achter de pagina en extra informatie over die code.</li>
                </ul>
                <div>
                    <img src={voorbeeld1} width="900" alt="voorbeeld1" />
                </div>
                <ul className={styles.contentDiv}>
                    <li>Klik in de menubalk aan de rechterkant op de knop &#8216;Sources&#8217;.</li>
                    <li>Nu verschijnt het broncode-venster.</li>
                </ul>
                <div>
                    <img src={voorbeeld2} width="900" alt="voorbeeld2" />
                </div>
                <ul className={styles.contentDiv}>
                    <li>
                        Om de HTML te kopiëren klik je op het bestand met de extensie &#8216;.htm&#8217; of &#8216;.html&#8217;. De broncode verschijnt
                        in het meest rechterscherm.
                    </li>
                    <li>
                        Om de CSS te kopiëren klik je op het pijltje naast de map &#8216;css&#8217;. Vervolgens klik je op het .css-bestand in de
                        map.
                    </li>
                    <li>
                        Je kunt hier ook de HTML- of CSS-code veranderen of een stylesheet in- en uitschakelen. Speel wat met de code om te zien wat hij
                        doet!
                    </li>
                </ul>
                <h2 className={styles.headerFont}>Voorbeeld-HTML en -CSS</h2>

                {/* This part maps through the allPagesHTMLObject, and displays the links to access the code of the document for each page, or to display the result of that code. */}
                {/* In public folder -> ExamplesHTML, there is a folder for every page. One of the html documents is opened when clicking 'Resultaat pagina X' (see allPagesHTMLObject). 
                Every folder has a html document (like Page10.html), which shows the code used to display the page. That document is opened with a click on 'Code pagina X'. */}
                {allPagesHTMLObject.map((item, index) => {

                    return (

                        <div key={index}>
                            <div style={{ paddingRight: "15px" }}>Pagina {item.number}:</div>
                            <Link className={styles.separateLink} style={{ paddingRight: "15px", fontWeight: "bold" }} to={`/ExamplesHTML/Pagina${item.number}/${item.title}`} target="_blank">Resultaat pagina {item.number}</Link>
                            <Link className={styles.separateLink} style={{ fontWeight: "bold" }} to={`/ExamplesHTML/Pagina${item.number}/Page${item.number}.html`} target="_blank" >Code pagina {item.number}</Link>
                        </div>
                    )
                })
                }
            </div >
        </>
    )
}