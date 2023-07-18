import styles from "../PageInformation.module.css";
import data from "../../downloadImages.json";

//This component contains the information of the 'Downloads'-page
export default function Downloads() {

    const imgPath = "images/images_downloads/";

    return (
        <>
            <div className={styles.containerInformation}>
                <div>Hier vind je wat handige gratis programma's die je kunt downloaden.</div>
                <h2 className={styles.headerFont}>Webbrowsers</h2>
                <ul className={styles.linkList}>
                    <li>
                        <a href="https://www.google.nl/chrome/browser/desktop/">Google Chrome</a>
                    </li>
                    <li>
                        <a href="https://www.mozilla.org/nl/firefox/new/">Mozilla Firefox</a>
                    </li>
                </ul>
                <h2 className={styles.headerFont}>Tekstverwerkers</h2>
                <ul className={styles.linkList}>
                    <li>
                        Kladblok - zit standaard bij Windows
                    </li>
                    <li>
                        Teksteditor - zit standaard bij Mac OS. Stel je bestanden in als platte tekst: druk op ⇧⌘T
                    </li>
                    <li>
                        <a href="https://wiki.gnome.org/Apps/Gedit">GEdit</a> voor Ubuntu (Engelstalig)
                    </li>
                    <li>
                        <a href="https://atom.io/">Atom voor Mac OS</a> (Engelstalig)</li>
                    <li>
                        <a href="https://chrome.google.com/webstore/detail/caret/fljalecfjciodhpcledpamjachpmelml?hl=en">Caret, voor Google Chrome</a> (Engelstalig)
                    </li>
                </ul>
                <h2 className={styles.headerFont}>Code-editors</h2>
                <ul className={styles.linkList}>
                    <li>
                        <a href="http://brackets.io/">Brackets, voor alle platformen</a> (Engelstalig)
                    </li>
                    <li>
                        <a href="https://notepad-plus-plus.org/">Notepad++, voor Windows</a> (Engelstalig, de Nederlandse versie vind je <a className={styles.bookLink} href="http://notepad.nl.softonic.com/">hier</a>)
                    </li>
                </ul>
                <h2 className={styles.headerFont}>Beeldbewerkingsprogramma&#8217;s</h2>
                <ul className={styles.linkList}>
                    <li>
                        <a href="https://www.gimp.org/">GIMP</a> (Engelstalig)
                    </li>
                </ul>
                <h2 className={styles.headerFont}>FTP-programma</h2>
                <ul className={styles.linkList}>
                    <li>
                        <a href="https://filezilla-project.org/">Filezilla</a> (Engelstalig, een Nederlandse versie vind je <a href="http://filezilla.nl.softonic.com/">hier</a>)
                    </li>
                </ul>
                <h2 className={styles.headerFont}>Afbeeldingen</h2>
                <div>
                    Je kunt alle afbeeldingen die je in het boek tegenkomt hier downloaden. Klik met de rechter muisknop
                    op een plaatje en kies voor &#8216;Afbeelding opslaan als…&#8217;. Of klik met je linker muisknop op
                    de afbeelding om hem in een nieuw venster te openen.
                </div>
                {/* To show all download-images */}
                <div className={styles.imgContainer}>
                    {data.map((item, index) => {
                        return (
                            <div key={index} className={styles.downloadDiv}>
                                <img className={styles.downloadImg} src={imgPath + item.icon} alt={item.name}></img>
                            </div>
                        )
                    })
                    }
                </div>
            </div>
        </>
    )
}
