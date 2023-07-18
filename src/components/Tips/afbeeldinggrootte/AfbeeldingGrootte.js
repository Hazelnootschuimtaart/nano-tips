import styles from "../../PageInformation.module.css";
import { Link } from "react-router-dom";
import afbeelding1 from "../../../images/afbeelding1.png";
import afbeelding2 from "../../../images/afbeelding2.png";
import afbeelding3 from "../../../images/afbeelding3.png";
import afbeelding4 from "../../../images/afbeelding4.png";
import afbeelding5 from "../../../images/afbeelding5.png";
import afbeelding6 from "../../../images/afbeelding6.png";
import afbeelding8 from "../../../images/afbeelding8.png";
import afbeelding9 from "../../../images/afbeelding9.png";

//This component contains the information of the 'Afbeeldinggrootte'-page
export default function AfbeeldingGrootte() {

    return (
        <>
            <div className={styles.containerInformation}>
                <h1 className={styles.headerFont}>Plaatjes schalen of bijsnijden</h1>
                <div className={styles.contentDiv}>
                    Soms kom je een afbeelding tegen die je graag op je website wil plaatsen, maar die veel te groot is. Foto&#8217;s van camera&#8217;s
                    of mobiele telefoons zijn bijvoorbeeld vaak groot, en nemen dus veel ruimte in op je pagina. Er zijn verschillende manieren om dat
                    probleem op te lossen. Eén daarvan is het gebruik maken van GNU Image Manipulation Programma, of GIMP in het kort. GIMP is een
                    uitgebreid beeldbewerkingsprogramma, dat er op het eerste gezicht best een beetje ingewikkeld uitziet. Maar in deze handleiding kijken
                    we alleen naar twee simpele functies: het schalen en bijsnijden van afbeeldingen. Zodra je GIMP hebt geïnstalleerd (je kunt een link
                    vinden op de <Link className={styles.separateLink} to="/downloads">Downloads-pagina</Link>), open je een afbeelding met behulp van GIMPs Bestand-menu. De afbeelding
                    aanklikken met je rechter muisknop en &#8216;Openen met GIMP&#8217; kiezen kan natuurlijk ook. De resolutie van je afbeelding verschijnt
                    in de titelbalk van het venster waarin je afbeelding wordt geopend. Daar zie je hoeveel pixels hoog en hoeveel pixels breed je
                    afbeelding is. Stel dat je je afbeelding de helft zo groot wil maken als hij is. (Als je afbeeldingen gaat schalen, maak je ze altijd
                    kleiner: maak je ze groter, dan wordt de kwaliteit minder goed.) Klik in de menubalk op &#8216;Afbeelding&#8217; en selecteer
                    vervolgens &#8216;Afbeelding schalen…&#8217; Er verschijnt een nieuw venster waar je onder andere de breedte en hoogte van de afbeelding
                    ziet. (Met het menu kun je ook de grootte in millimeters of centimeters weergeven, als je dat fijner vindt.)
                </div>
                <div className={styles.contentDiv}>
                    <img
                        className={styles.alignImg}
                        src={afbeelding1}
                        width="746"
                        alt="afbeelding1"
                    />
                </div>
                <div className={styles.contentDiv}>
                    Klik allereerst op het ketting-icoontje dat je rechts naast de hoogte en breedte ziet staan. Zorg ervoor dat de ketting er niet
                    &#8216;gebroken&#8217; uitziet. Met de ketting zorg je ervoor dat de verhouding van je afbeelding klopt: pas je de breedte aan, dan past
                    GIMP automatisch de hoogte aan. Je afbeelding raakt dus niet vervormd, hij wordt alleen kleiner gemaakt. Pas de hoogte of breedte
                    van je afbeelding aan naar het gewenste formaat en klik op de knop &#8216;Schalen&#8217;.
                </div>
                <div className={styles.contentDiv}>
                    <img
                        className={styles.alignImg}
                        src={afbeelding2}
                        width="460"
                        alt="afbeelding2"
                    />
                </div>
                <div className={styles.contentDiv}>
                    Het kan natuurlijk ook voorkomen dat je alleen een klein stukje van je afbeelding wil gebruiken. De rest kun je gewoon afsnijden. Hier
                    lees je hoe je dat doet: Ga eerst naar GIMPs gereedschapkist. Die ziet er zo uit:
                </div>
                <div className={styles.contentDiv}>
                    <img
                        className={styles.alignImg}
                        src={afbeelding3}
                        width="344"
                        alt="afbeelding3"
                    />
                </div>
                <div className={styles.contentDiv}>
                    Zie je hem niet, klik dan in de menubalk op &#8216;Vensters&#8217; en selecteer &#8216;Gereedschapskist&#8217; om hem tevoorschijn te
                    laten komen.
                </div>
                <div className={styles.contentDiv}>
                    <img
                        className={styles.alignImg}
                        src={afbeelding4}
                        width="341"
                        alt="afbeelding4"
                    />
                </div>
                <div className={styles.contentDiv}>
                    Klik op het rechthoekige selectieknopje in de gereedschapskist. Die ziet er zo uit:
                </div>
                <div className={styles.contentDiv} >
                    <img
                        className={styles.alignImg}
                        src={afbeelding5}
                        width="62"
                        alt="afbeelding5"
                    />
                </div>
                <div className={styles.contentDiv}>
                    Klik en sleep een kader om het deel van de afbeelding dat je wilt bewaren. Klik vervolgens in de menubalk op &#8216;Afbeelding&#8217;
                    en selecteer &#8216;Bijsnijden tot selectie&#8217;.
                </div>
                <div className={styles.contentDiv}>
                    <img
                        className={styles.alignImg}
                        src={afbeelding6}
                        width="1024"
                        alt="afbeelding6"
                    />
                </div>
                <div className={styles.contentDiv}>
                    <img
                        className={styles.alignImg}
                        src={afbeelding8}
                        width="378"
                        alt="afbeelding8"
                    />
                </div>
                <div className={styles.contentDiv}>
                    <img
                        className={styles.alignImg}
                        src={afbeelding9}
                        width="375"
                        alt="afbeelding9"
                    />
                </div>
            </div>
        </>
    )
}