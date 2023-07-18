import styles from "../../PageInformation.module.css";

//This component contains the information of the 'Stylesheets'-page
export default function Stylesheets() {

    return (
        <>
            <div className={styles.containerInformation}>
                <h1 className={styles.headerFont}>Stylesheets openen en bewerken</h1>

                <div className={styles.contentDiv}>
                    Stylesheets zijn CSS-bestanden. Ze openen door op ze te dubbelklikken werkt niet altijd – tenminste
                    niet totdat je je computer vertelt welk programma hij moet gebruiken. Klik met je rechter muisknop
                    op het bestand en kies &#8216;Openen met…&#8217;. Kies vervolgens je tekstverwerker of code-editor
                    uit de lijst.
                </div>
            </div>
        </>
    )
}
