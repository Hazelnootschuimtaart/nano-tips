import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Layout from './components/Layout';
import Home from './components/home/Home.js';
import Links from './components/links/Links';
import Downloads from './components/downloads/Downloads';
import Over from './components/over/Over';
import Voorbeelden from './components/voorbeelden/Voorbeelden';
import BouwJeEigenWebsite from './components/voorbeelden/BouwJeEigenWebsite/BouwJeEigenWebsite';
import MaakJeEigenGame from './components/voorbeelden/MaakJeEigenGame/MaakJeEigenGame';
import DownloadGamebeelden from './components/voorbeelden/MaakJeEigenGame/DownloadGamebeelden';
import ToonVolledigeGamecode from './components/voorbeelden/MaakJeEigenGame/ToonVolledigeGamecode';
import SpeelGame from './components/voorbeelden/MaakJeEigenGame/SpeelGame';
import Tips from './components/Tips/Tips';
import Tekstverwerker from './components/Tips/tekstverwerker/Tekstverwerker';
import BestandenOpenen from './components/Tips/bestandenopenen/BestandenOpenen';
import VindBestanden from './components/Tips/vindbestanden/VindBestanden';
import CodeEditors from './components/Tips/code-editors/CodeEditors';
import LinksToevoegen from './components/Tips/linkstoevoegen/LinksToevoegen';
import Stylesheets from './components/Tips/stylesheets/Stylesheets';
import AfbeeldingenToevoegen from './components/Tips/afbeeldingentoevoegen/AfbeeldingenToevoegen';
import AfbeeldingGrootte from './components/Tips/afbeeldinggrootte/AfbeeldingGrootte';
import JavascriptTips from './components/Tips/javascripttips/JavascriptTips';
import VideoEmbedden from './components/Tips/videoembedden/VideoEmbedden';
import StylesheetVoorbeeld from './components/Tips/stylesheetvoorbeeld/StylesheetVoorbeeld';
import Verklaringen from './components/Tips/verklaringen/Verklaringen';
import ClassAttribuut from './components/Tips/classattribuut/ClassAttribuut';

//The routing system of this application
export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="links" element={<Links />} />
                    <Route path="downloads" element={<Downloads />} />
                    <Route path="voorbeelden" >
                        <Route index element={<Voorbeelden />} />
                        <Route path="bouw-je-eigen-website" element={<BouwJeEigenWebsite />} />
                        <Route path="maak-je-eigen-game" >
                            <Route index element={<MaakJeEigenGame />} />
                            <Route path="download-gamebeelden" element={<DownloadGamebeelden />} />
                            <Route path="volledige-gamecode" element={<ToonVolledigeGamecode />} />
                            <Route path="speel-game" element={<SpeelGame />} />
                        </Route>
                    </Route>
                    <Route path="tips" >
                        <Route index element={<Tips />} />
                        <Route path="tekstverwerker" element={<Tekstverwerker />} />
                        <Route path="bestandenopenen" element={<BestandenOpenen />} />
                        <Route path="vindbestanden" element={<VindBestanden />} />
                        <Route path="code-editors" element={<CodeEditors />} />
                        <Route path="linkstoevoegen" element={<LinksToevoegen />} />
                        <Route path="stylesheets" element={<Stylesheets />} />
                        <Route path="afbeeldingentoevoegen" element={<AfbeeldingenToevoegen />} />
                        <Route path="afbeeldinggrootte" element={<AfbeeldingGrootte />} />
                        <Route path="javascripttips" element={<JavascriptTips />} />
                        <Route path="videoembedden" element={<VideoEmbedden />} />
                        <Route path="stylesheetvoorbeeld" element={<StylesheetVoorbeeld />} />
                        <Route path="verklaringen" element={<Verklaringen />} />
                        <Route path="classattribuut" element={<ClassAttribuut />} />
                    </Route>
                    <Route path="over" element={<Over />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
