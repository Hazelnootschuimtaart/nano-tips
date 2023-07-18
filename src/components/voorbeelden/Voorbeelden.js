import styles from "../PageInformation.module.css";

//This component contains the information of the 'Voorbeelden'-page. The links lead to the submenu pages under 'Voorbeelden'.
export default function Voorbeelden() {

    return (
        <>
            <div className={styles.containerInformation}>
                <h1 className={styles.headerFont}>Voorbeelden</h1>
                <ul className={styles.linkList}>
                    <li>
                        <a href="../voorbeelden-coderdojo-bouw-je-eigen-website/">CoderDojo &#8211; Bouw je eigen website</a>
                    </li>
                    <li>
                        <a href="../voorbeelden-coderdojo-maak-je-eigen-game/">CoderDojo &#8211; Maak je eigen game</a>
                    </li>
                </ul>
            </div>
        </>
    )
}