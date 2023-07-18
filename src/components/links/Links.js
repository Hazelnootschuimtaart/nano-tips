import styles from "../PageInformation.module.css";

//This component contains the information of the 'Links'-page
export default function Links() {

    return (
        <>
            <div className={styles.containerInformation}>
                <div className={styles.contentDiv}>Hier vind je links naar websites met meer informatie, handleidingen en tips over coderen met HTML en
                    CSS. <br />
                    Dit zijn de websites van CoderDojo:
                </div>
                <ul className={styles.linkList}>
                    <li>
                        <div>De internationale website van CoderDojo:</div>
                        <a href="http://coderdojo.com/">CoderDojo</a>
                    </li>
                    <li>
                        <div>De website van CoderDojo Nederland:</div>
                        <a href="https://www.coderdojo.nl/">CoderDojo Nederland</a>
                    </li>
                    <li>
                        <a href="https://www.coderdojo.nl/dojos">Vind een Dojo bij jou in de buurt</a>
                    </li>
                    <li>
                        <a href="http://kata.coderdojo.com/wiki/KataDutch">CoderDojo-handleidingen</a>
                    </li>
                    <li>
                        <div>Hapklare brokken informatie over coderen:</div>
                        <a href="http://kata.coderdojo.com/wiki/KataDutch:Sushi">CoderDojo-sushikaarten</a>
                    </li>
                </ul>
                <div className={styles.contentDiv}>Dit zijn andere sites met nuttige informatie en handleidingen:</div>
                <ul className={styles.linkList}>
                    <li>
                        <a href="http://www.handleidinghtml.nl/">Handleiding HTML</a>
                        <div>(Nederlandstalig)</div>
                    </li>
                    <li>
                        <a href="http://www.learnit.nl/gratiscursus/html-en-css" >Learnit</a>
                        <div>(Nederlandstalig)</div>
                    </li>
                    <li>
                        <a href="http://www.w3schools.com/">w3schools</a>
                        <div>(Engelstalig)</div>
                    </li>
                    <li>
                        <a href="https://www.codecademy.com/">Codecademy</a>
                        <div>(Engelstalig. Ook enkele Nederlandstalige cursussen)</div>
                    </li>
                    <li>
                        <a href="https://www.khanacademy.org/computing/computer-programming" >Khan Academy</a>
                        <div>(Engelstalig)</div>
                    </li>
                    <li>
                        <a href="https://developer.mozilla.org/nl/" target="_blank">Mozilla Developer Network</a>
                        <div>(Nederlandstalig)</div>
                    </li>
                </ul>
            </div>
        </>
    )
}
