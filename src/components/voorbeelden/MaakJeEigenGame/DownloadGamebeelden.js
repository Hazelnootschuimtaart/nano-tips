import styles from "../../PageInformation.module.css";
import zipFile from "./nanonauten.zip";

//This component contains the information of the 'Download de gamebeelden'-page
export default function DownloadGamebeelden() {

    return (
        <>
            <div className={styles.containerInformation}>
                <h1 className={styles.headerFont}>Download de gamebeelden</h1>
                <div className={styles.contentDiv}>Als je de game uit <i>CoderDojo Nano &#8211; Maak je eigen game</i> precies zo na wilt maken als hij
                    in het boek staat, dan gebruik je daarvoor deze afbeeldingen. Ze zijn gemaakt door Gary Lucken.
                </div>
                {/* Clicking this link will download a zipfile (which contains the images that are needed to create the game) */}
                <div className={styles.contentDiv}><a className={styles.bookLink} href={zipFile}>Download gamebeelden</a></div>
            </div>
        </>
    )
}