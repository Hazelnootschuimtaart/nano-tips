import styles from "../../PageInformation.module.css";

//This component contains the information of the 'Video-embedden'-page
export default function VideoEmbedden() {

    return (
        <>
            <div className={styles.containerInformation}>
                <h1 className={styles.headerFont}>Meer over het embedden van video&#8217;s</h1>
                <div className={styles.contentDiv}>
                    Wanneer je een YouTube-video in je pagina embed, zijn er diverse opties die je kunt instellen. Je
                    vindt ze door op het knopje &#8216;SHOW MORE&#8217; (Engels voor toon meer) te klikken. Hieronder
                    lees je wat je ermee kunt doen:
                </div>
                <ul className={styles.contentDiv}>
                    <li>
                        Video size: kies de grootte (in pixels) van het kader waarin je je video wil tonen. Je kunt een
                        grootte kiezen uit het menu of er zelf een intikken.
                    </li>
                    <li>
                        Show suggested videos when the video finishes: vink deze optie aan als je wil dat de kijker
                        gerelateerde filmpjes te zien krijgt wanneer je video klaar is met spelen.
                    </li>
                    <li>
                        Show player controls: vink deze optie aan als je wil dat de kijker dingen als het volume, de
                        afspeelsnelheid en de beeldkwaliteit van de ingesloten video moet kunnen aanpassen.
                    </li>
                    <li>
                        Show video title and player actions: vink deze optie aan als je wil dat de titelbalk en de
                        deelknop van de video zichtbaar zijn.
                    </li>
                    <li>
                        Enable privacy-enhanced mode: vink deze optie aan als je wil dat YouTube alleen persoonlijke
                        informatie van je bezoeker verzamelt als ze de video bekijken. Laat je het vinkje uit, dan
                        verzamelt YouTube ook informatie van je bezoeker zonder dat ze het filmpje bekijken.
                    </li>
                </ul>
            </div>
        </>
    )
}
