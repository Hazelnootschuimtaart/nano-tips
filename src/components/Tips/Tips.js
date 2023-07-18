import styles from "../PageInformation.module.css";
import { Link } from "react-router-dom";

//This component contains the information of the 'Tips'-page. The links lead to the submenu pages under 'Tips'.
export default function Tips() {

    return (
        <>
            <div className={styles.containerInformation}>
                Hier tref je een aantal handige tips en tricks die je helpen bij het coden.
                <ul className={styles.linkList}>
                    <li><Link to="./tekstverwerker">Wat zijn tekstverwerkers en code-editors?</Link></li>
                    <li><Link to="./bestandenopenen">Bestanden openen en extensies</Link></li>
                    <li><Link to="./vindbestanden">Zo geef je extenties weer op je computer</Link></li>
                    <li><Link to="./code-editors">Tips bij het gebruik van onze favoriete code-editor, Brackets</Link></li>
                    <li><Link to="./linkstoevoegen">Meer informatie over het toevoegen van links</Link></li>
                    <li><Link to="./stylesheet">Stylesheets openen en bewerken</Link></li>
                    <li><Link to="./afbeeldingentoevoegen">Meer informatie over het toevoegen van afbeeldingen</Link></li>
                    <li><Link to="./afbeeldinggrootte">Plaatjes schalen of bijsnijden</Link></li>
                    <li><Link to="./javascripttips">Meer over JavaScript</Link></li>
                    <li><Link to="./video-embedden">Meer over het embedden van video&#8217;s</Link></li>
                    <li><Link to="./stylesheetvoorbeeld">Een stylesheet voor een responsive site</Link></li>
                    <li><Link to="./verklaringen">Meer over het stap voor stap werken met stylesheets</Link></li>
                </ul>
            </div>
        </>
    )
}