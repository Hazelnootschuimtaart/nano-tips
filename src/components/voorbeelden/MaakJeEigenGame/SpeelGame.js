import styles from "../../PageInformation.module.css";

//This component contains the information of the 'Speel de game'-page. You can play the game at this page.
export default function SpeelGame() {

    return (
        <>
            <div className={styles.containerInformation}>
                <h1 className={styles.headerFont}>Speel de game</h1>
                {/* The game is displayed in this iframe, it's opened with the programma.html document */}
                <iframe
                    src="../../Speel-game/programma.html"
                    width="90%"
                    height="700"
                    className={styles.iframeClass}
                    title="speelGame" />
            </div>
        </>
    )
}