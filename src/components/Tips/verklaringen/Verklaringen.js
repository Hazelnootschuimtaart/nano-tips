import styles from "../../PageInformation.module.css";

//This component contains the information of the 'Verklaringen'-page
export default function Verklaringen() {

    //The code-parts are in variables to make it easier to show them as code at the page.
    const codeTextOne = `body {
}

html {
}`;

    const codeTextTwo = `body {
background-color: thistle;
}

html {
}`;

    const codeTextThree = `body {
background-color: thistle;
border: 2px solid gray;
}

html {
}`

    return (
        <>
            <div className={styles.containerInformation}>
                <h1 className={styles.headerFont}>Meer over het stap voor stap werken met stylesheets</h1>
                <div className={styles.contentDiv}>
                    Verklaringen één voor één toevoegen is een leuke manier om te leren hoe CSS werkt. Begin met de
                    volgende lege regels:
                </div>
                <pre className={styles.gameCodeSmall}><code>
                    {codeTextOne}
                </code></pre>
                <div className={styles.contentDiv}>
                    Voeg de verklaringen vervolgens één voor één toe om te zien welk effect ze hebben op je webpagina
                    (met Live Preview van Brackets zie je meteen resultaat):
                </div>
                <pre className={styles.gameCodeSmall}><code>
                    {codeTextTwo}
                </code></pre>
                <div className={styles.contentDiv}>
                    Met de verklaring hierboven maak je de achterkleur van de pagina paars.
                </div>
                <pre className={styles.gameCodeSmall}><code>
                    {codeTextThree}
                </code></pre>
                <div className={styles.contentDiv}>
                    Deze verklaring plaatst een grijs kader om de pagina.
                </div>
                <div className={styles.contentDiv}>
                    Probeer de verklaringen eens aan te passen terwijl je ze toevoegt. Er zijn bijvoorbeeld allerlei
                    verschillende randen. Probeer <code className={styles.codeWords}>solid</code> eens te veranderen in <code className={styles.codeWords}>dotted</code>, or
                    verander <code className={styles.codeWords}>2px solid</code> in <code className={styles.codeWords}>10px ridge</code>.
                </div>
            </div>
        </>
    )
}
