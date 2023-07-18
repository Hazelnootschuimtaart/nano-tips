import styles from "../../PageInformation.module.css";

//This component contains the information of the 'Stylesheetvoorbeeld'-page
export default function StylesheetVoorbeeld() {

    //This code-part is in a variable to make it easier to show it as code at the page.
    const codeText = `/* technisch gedeelte – past de grootte van het kader aan */
html {
    box-sizing: border-box;
}

*, *:before, *:after {
    box-sizing: inherit;
}

/* geeft structuurelementen hun uiterlijk */
html {
    background-color: black;
}

body {
    background-color: ghostwhite;
}

header {
    background-color: crimson;
}

nav {
    background-color: darkorange;
}

article {
    background-color: gold;
}

section {
    background-color: lawngreen;
}

aside {
    background-color: royalblue;
}

footer {
    background-color: darkorchid;
}`

    return (
        <>
            <div className={styles.containerInformation}>
                <h1 className={styles.headerFont}>Een stylesheet voor een responsive site</h1>

                <div className={styles.contentDiv}>
                    Hieronder zie je het &#8216;skelet&#8217; van het stylesheet dat we in het boek gebruiken om onze
                    site responsive te maken. Kopieer het, zodat je mee kunt tikken met het voorbeeld. Je kunt ook
                    andere kleuren voor de verschillende onderdelen van je pagina kiezen als je dat wil. Zorg er wel
                    voor dat ze allemaal verschillend zijn, zodat je de verschillende onderdelen van de pagina goed van
                    elkaar kunt onderscheiden.
                </div>
                <pre className={styles.gameCodeSmall}><code>
                    {codeText}
                </code></pre>
            </div>
        </>
    )
}
