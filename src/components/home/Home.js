import styles from "../PageInformation.module.css";
import bookOne from '../../images/CoderDojo_book_1.jpg';
import bookTwo from '../../images/CoderDojo_book_2.jpg';

//This component contains the information of the homepage
export default function Home() {

    return (
        <div className={styles.containerInformation}>
            <div>WELKOM bij CoderDojo Nano - je eigen coding club! In onze CoderDojo Nano-boeken leer je hoe je
                creatief kunt zijn met code. Er zijn twee boeken:
                <ul>
                    <li><i>CoderDojo Nano - Bouw je eigen website</i> leert je hoe je een eigen website maakt met behulp
                        van HTML, CSS en een klein beetje JavaScript.</li>
                    <li><i>CoderDojo Nano - Maak je eigen game</i> helpt je stap voor stap met het bouwen van je eigen
                        game. Dat doe je met behulp van JavaScript, een programmeertaal die in iedere browser werkt.
                    </li>
                </ul>
            </div>

            <div>Op deze website vind je handige tips en hulpmiddelen die je helpen om de website en game uit de
                boeken na te maken. Heb je de boeken nog niet? Dan kun je ze <a className={styles.bookLink}
                    href="https://www.bol.com/nl/s/nederlandse-boeken/zoekresultaten/N/8299/filter_N/8293/sc/media_all/index.html?searchtext=coderdojo"
                >hier</a> kopen.</div>

            <div className={styles.bookImgDiv}>
                <img src={bookOne} className={styles.bookImg}></img>
                <img src={bookTwo} className={styles.bookImg}></img>
            </div>
        </div>
    )
}
