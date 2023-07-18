import styles from "../PageInformation.module.css";

//This component contains the information of the 'Over'-page
export default function Over() {

    return (
        <>
            <div className={styles.containerInformation}>
                <div className={styles.contentDiv}>
                    Iedere week leren meer en meer kinderen en jonge mensen zoals jijzelf bij CoderDojo-clubs hoe ze
                    dingen maken met behulp van technologie. Ze leren omgaan met HTML en CSS, zoals jij ook deed bij de
                    website die je maakte in het CoderDojo Nano-boek. Maar ze maken ook web-apps, games en bouwen hun
                    eigen robots.
                </div>
                <div className={styles.contentDiv}>
                    Er zijn meer dan 1050 Dojo&#8217;s verspreid over 63 landen. CoderDojo is een door vrijwilligers
                    geleide, wereldwijde beweging van gratis programmeerclubs voor jongeren tussen 7 en 17 jaar oud.
                    Hoewel CoderDojo pas vijf jaar geleden werd opgericht in de Ierse stad Cork is de beweging
                    uitgegroeid tot een wereldwijd fenomeen waar ook jij lid van kan worden.
                </div>
                <div className={styles.contentDiv}>
                    Heeft CoderDojo Nano je interesse gewekt en wil je meer leren over creëren met technologie? Waarom
                    sluit je je dan niet aan bij een lokale Dojo [link: <a className={styles.separateLink} href="https://www.coderdojo.nl/dojos">https://www.coderdojo.nl/dojos</a>].
                    Kun je geen Dojo in de buurt vinden? Vraag dan je ouders of verzorgers om zelf een Dojo voor kinderen in de buurt te
                    beginnen [link: <a className={styles.separateLink} href="https://www.coderdojo.nl/meehelpen/opstarten">https://www.coderdojo.nl/meehelpen/opstarten</a>].
                    Wij helpen ze daar natuurlijk graag bij.
                </div>
                <div className={styles.contentDiv}>
                    <strong>CoderDojo Nano</strong>
                    <br />
                    Pak je CoderDojo Nano-boek erbij, verzamel wat vrienden bij elkaar en begin je eigen mini CoderDojo - een CoderDojo Nano!
                </div>
                <div className={styles.contentDiv}>
                    Het eerste boek in de CoderDojo Nano-reeks werd geschreven door Clyde Hatter. Clyde is al sinds 2012
                    mentor bij de Dojo in Bray en bedacht de inhoud van het boek en heeft daar suggesties en opmerkingen
                    van alle anderen in de dojo in verwerkt.
                </div>
                <div className={styles.contentDiv}>
                    <strong>Meer informatie</strong>
                    <br />
                    <a className={styles.separateLink} href="http://www.coderdojo.nl/">www.coderdojo.nl</a>
                    <br />
                    <a className={styles.separateLink} href="http://www.coderdojo.com/">www.coderdojo.com</a> (Engelstalig)
                    <br />
                    @CoderDojo [link: <a className={styles.separateLink} href="http://www.twitter.com/CoderDojo">http://www.twitter.com/CoderDojo</a>]
                    (Engelstalig)
                </div>
            </div>
        </>
    )
}
