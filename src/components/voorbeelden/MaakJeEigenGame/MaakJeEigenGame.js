import styles from "../../PageInformation.module.css";
import { Link } from "react-router-dom";

//This component contains the information of the 'Maak je eigen game'-page. The three links help you to get started with creating your own game.
export default function MaakJeEigenGame() {

    return (
        <>
            <div className={styles.containerInformation}>
                <h1 className={styles.headerFont}>Voorbeelden: Maak je eigen game</h1>
                <ul className={styles.linkList}>
                    <li><Link className={styles.separateLink} to={"/voorbeelden/maak-je-eigen-game/download-gamebeelden"}>Download de gamebeelden</Link></li>
                    <li><Link className={styles.separateLink} to={"/voorbeelden/maak-je-eigen-game/volledige-gamecode"}>Bekijk de volledige game-code</Link></li>
                    <li><Link className={styles.separateLink} to={"/voorbeelden/maak-je-eigen-game/speel-game"}>Speel de game</Link></li>
                </ul>
            </div>
        </>
    )
}
