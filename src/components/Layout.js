import { Outlet, NavLink } from "react-router-dom";
import styles from './layout.module.css';
import dojoLogo from '../images/coderdojo-nano-logo.png';
import { useState } from "react";

//This component is for the layout of everything, except the content of the page.
//The content is the white part between the menu and the footnote.
const Layout = () => {

    //Whether the first submenu (voorbeelden) should be shown or not:
    const [showSubmenuOne, setShowSubmenuOne] = useState(false);
    //Whether the second submenu (tips) should be shown or not:
    const [showSubmenuTwo, setShowSubmenuTwo] = useState(false);
    //If the mouse hovers over a menu-item, this tells which one to light up:
    const [hoveredItemNr, setHoveredItemNr] = useState("");
    //Controls which classname (for lighting up) should be used for the main menu items
    const getClassName = (isActive, itemNumber) => {
        return (isActive || hoveredItemNr == itemNumber ? styles.whiteTab : styles.blackTab)
    }
    //Controls which classname (for lighting up) should be used for the submenu items
    const getClassNameSubmenu = (isActive, itemNumber) => {
        return (isActive || hoveredItemNr == itemNumber ? styles.whiteTab : styles.grayTab)
    }

    return (
        <>
            <div className={styles.upperBanner}>
                <a href='http://www.meisenmaas.nl/'>www.meisenmaas.nl</a>
            </div>
            <div className={styles.tableDiv}>
                <div className={styles.logo}>
                    <img src={dojoLogo} alt='logoImg'></img>
                </div>
                {/* This is the menu */}
                <div className={styles.navStyle}>
                    <div>
                        <NavLink to="/" end onMouseOver={() => { setHoveredItemNr(1) }} onMouseLeave={() => { setHoveredItemNr("") }}
                            className={({ isActive }) => (getClassName(isActive, 1))}
                        >Home
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to="/links" onMouseOver={() => { setHoveredItemNr(2) }} onMouseLeave={() => { setHoveredItemNr("") }}
                            className={({ isActive }) => (getClassName(isActive, 2))}
                        >Links
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to="/downloads" onMouseOver={() => { setHoveredItemNr(3) }} onMouseLeave={() => { setHoveredItemNr("") }}
                            className={({ isActive }) => (getClassName(isActive, 3))}
                        >Downloads
                        </NavLink>
                    </div>
                    <div onMouseOver={() => { setShowSubmenuOne(true) }} onMouseOut={() => { setShowSubmenuOne(false) }}>
                        <NavLink to="/voorbeelden" onMouseOver={() => { setHoveredItemNr(4) }} onMouseLeave={() => { setHoveredItemNr("") }}
                            className={({ isActive }) => (getClassName(isActive, 4))}
                        >Voorbeelden
                        </NavLink>
                        <ul className={`${styles.subMenu} ${showSubmenuOne ? styles.selected : ""}`}>
                            <li className={styles.subMenuItems}>
                                <NavLink to="/voorbeelden/bouw-je-eigen-website" onMouseOver={() => { setHoveredItemNr(5) }} onMouseLeave={() => { setHoveredItemNr("") }}
                                    className={({ isActive }) => (getClassNameSubmenu(isActive, 5))}
                                >Bouw je eigen website
                                </NavLink>
                            </li>
                            <li className={styles.subMenuItems}>
                                <NavLink to="/voorbeelden/maak-je-eigen-game" onMouseOver={() => { setHoveredItemNr(6) }} onMouseLeave={() => { setHoveredItemNr("") }}
                                    className={({ isActive }) => (getClassNameSubmenu(isActive, 6))}
                                >Maak je eigen game
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div onMouseOver={() => { setShowSubmenuTwo(true) }} onMouseLeave={() => { setShowSubmenuTwo(false) }}>
                        <NavLink to="/tips" onMouseOver={() => { setHoveredItemNr(7) }} onMouseLeave={() => { setHoveredItemNr("") }}
                            className={({ isActive }) => (getClassName(isActive, 7))}
                        >Tips
                        </NavLink>
                        <ul className={`${styles.subMenu} ${showSubmenuTwo ? styles.selected : ""}`}>
                            <li className={styles.subMenuItems}>
                                <NavLink to="/tips/tekstverwerker" onMouseOver={() => { setHoveredItemNr(8) }} onMouseLeave={() => { setHoveredItemNr("") }}
                                    className={({ isActive }) => (getClassNameSubmenu(isActive, 8))}
                                >Tekstverwerker
                                </NavLink>
                            </li>
                            <li className={styles.subMenuItems}>
                                <NavLink to="/tips/bestandenopenen" onMouseOver={() => { setHoveredItemNr(9) }} onMouseLeave={() => { setHoveredItemNr("") }}
                                    className={({ isActive }) => (getClassNameSubmenu(isActive, 9))}
                                >Bestanden openen
                                </NavLink>
                            </li>
                            <li className={styles.subMenuItems}>
                                <NavLink to="/tips/vindbestanden" onMouseOver={() => { setHoveredItemNr(10) }} onMouseLeave={() => { setHoveredItemNr("") }}
                                    className={({ isActive }) => (getClassNameSubmenu(isActive, 10))}
                                >Vind bestanden
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/tips/code-editors" onMouseOver={() => { setHoveredItemNr(11) }} onMouseLeave={() => { setHoveredItemNr("") }}
                                    className={({ isActive }) => (getClassNameSubmenu(isActive, 11))}
                                >Code editors
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/tips/linkstoevoegen" onMouseOver={() => { setHoveredItemNr(12) }} onMouseLeave={() => { setHoveredItemNr("") }}
                                    className={({ isActive }) => (getClassNameSubmenu(isActive, 12))}
                                >Links toevoegen
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/tips/stylesheets" onMouseOver={() => { setHoveredItemNr(13) }} onMouseLeave={() => { setHoveredItemNr("") }}
                                    className={({ isActive }) => (getClassNameSubmenu(isActive, 13))}
                                >Stylesheets
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/tips/afbeeldingentoevoegen" onMouseOver={() => { setHoveredItemNr(14) }} onMouseLeave={() => { setHoveredItemNr("") }}
                                    className={({ isActive }) => (getClassNameSubmenu(isActive, 14))}
                                >Afbeeldingen toevoegen
                                </NavLink>

                            </li>
                            <li>
                                <NavLink to="/tips/afbeeldinggrootte" onMouseOver={() => { setHoveredItemNr(15) }} onMouseLeave={() => { setHoveredItemNr("") }}
                                    className={({ isActive }) => (getClassNameSubmenu(isActive, 15))}
                                >Afbeeldinggrootte
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/tips/javascripttips" onMouseOver={() => { setHoveredItemNr(16) }} onMouseLeave={() => { setHoveredItemNr("") }}
                                    className={({ isActive }) => (getClassNameSubmenu(isActive, 16))}
                                >Javascripttips
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/tips/videoembedden" onMouseOver={() => { setHoveredItemNr(17) }} onMouseLeave={() => { setHoveredItemNr("") }}
                                    className={({ isActive }) => (getClassNameSubmenu(isActive, 17))}
                                >Video-embedden
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/tips/stylesheetvoorbeeld" onMouseOver={() => { setHoveredItemNr(18) }} onMouseLeave={() => { setHoveredItemNr("") }}
                                    className={({ isActive }) => (getClassNameSubmenu(isActive, 18))}
                                >Stylesheetvoorbeeld
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/tips/verklaringen" onMouseOver={() => { setHoveredItemNr(19) }} onMouseLeave={() => { setHoveredItemNr("") }}
                                    className={({ isActive }) => (getClassNameSubmenu(isActive, 19))}
                                >Verklaringen
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/tips/classattribuut" onMouseOver={() => { setHoveredItemNr(20) }} onMouseLeave={() => { setHoveredItemNr("") }}
                                    className={({ isActive }) => (getClassNameSubmenu(isActive, 20))}
                                >Class
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <NavLink to="/over" onMouseOver={() => { setHoveredItemNr(21) }} onMouseLeave={() => { setHoveredItemNr("") }}
                            className={({ isActive }) => (getClassName(isActive, 21))}
                        >Over
                        </NavLink>
                    </div>
                </div>
                {/* This is the content of the page */}
                <div className={styles.outletDiv}>
                    <Outlet />
                </div>
                {/* This is the footnote */}
                <div className={styles.footnote}>
                    <div>Copyright © 2016-2017 MEIS & MAAS</div>
                </div>
            </div >
        </>
    )
}

export default Layout;