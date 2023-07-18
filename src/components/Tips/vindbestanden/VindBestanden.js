import styles from "../../PageInformation.module.css";

//This component contains the information of the 'Vind bestanden'-page
export default function VindBestanden() {

    return (
        <>
            <div className={styles.containerInformation}>
                <h1 className={styles.headerFont}>Zo geef je extenties weer op je computer</h1>
                <div className={styles.contentDiv}>Sommige computers zijn zo ingesteld dat ze bestandsextensie verbergen.
                    Met deze handleidingen maak je die verborgen extensies weer zichtbaar:
                </div>
                <h3 className={styles.headerFont}>Windows 7 of Vista:</h3>
                <ul className={styles.contentDiv}>
                    <li>Klik op het startmenu.</li>
                    <li>Klik op &#8216;Configuratiescherm&#8217;.</li>
                    <li>Klik op &#8216;Vormgeving en persoonlijke instellingen&#8217;.</li>
                    <li>Klik op &#8216;Mapopties&#8217;.</li>
                    <li>Klik op het tabblad &#8216;Weergave&#8217;.</li>
                    <li>Vink het hokje &#8216;Extensies voor bekende bestandstypen verbergen&#8217; onder het kopje
                        &#8216;Uitgebreide instellingen&#8217; uit.</li>
                    <li>Klik op &#8216;OK&#8217;.</li>
                </ul>
                <h3 className={styles.headerFont}>Windows 8/8.1:</h3>
                <ul className={styles.contentDiv}>
                    <li>Houd de Windows-toets ingedrukt en druk op X. Er verschijnt een menu.</li>
                    <li>Selecteer &#8216;Configuratiescherm&#8217;.</li>
                    <li>Dubbelklik in het venster dat verschijnt op &#8216;Mapopties&#8217;.</li>
                    <li>Klik op het tabblad &#8216;Weergave&#8217;.</li>
                    <li>Vink het hokje &#8216;Extensies voor bekende bestandstypen verbergen&#8217; onder het kopje
                        &#8216;Uitgebreide instellingen&#8217; uit.</li>
                    <li>Klik op &#8216;OK&#8217;.</li>
                </ul>
                <h3 className={styles.headerFont}>Windows 10:</h3>
                <ul className={styles.contentDiv}>
                    <li>Klik op het startmenu.</li>
                    <li>Klik op &#8216;Verkenner&#8217;.</li>
                    <li>Klik op het tabblad &#8216;Weergave&#8217; en vervolgens op de knop &#8216;Options&#8217;.</li>
                    <li>Klik in het nieuwe menu dat verschijnt op het tabblad &#8216;Weergave&#8217;.</li>
                    <li>Vink het hokje &#8216;Extensies voor bekende bestandstypen verbergen&#8217; onder het kopje
                        &#8216;Uitgebreide instellingen&#8217; uit.</li>
                    <li>Klik op &#8216;OK&#8217;.</li>
                </ul>
                <h3 className={styles.headerFont}>Apple OS X:</h3>
                <ul className={styles.contentDiv}>
                    <li>Open &#8216;Finder&#8217;.</li>
                    <li>Klik bovenaan je scherm op &#8216;Finder&#8217; en klik in het menu dat verschijnt op
                        &#8216;Voorkeuren&#8217;.</li>
                    <li>Klik in het nieuwe venster dat verschijnt op &#8216;Geavanceerd&#8217;.</li>
                    <li>Vink hier het hokje voor &#8216;Toon alle bestandsextensies&#8217; aan.</li>
                    <li>Sluit het venster.</li>
                </ul>
            </div>
        </>
    )
}