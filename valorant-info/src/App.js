import Header from "components/Header";
import Footer from "components/Footer";
import Agents from "components/Agents";
import Weapons from "components/Weapons";
import Maps from "components/Maps";

function App() {

    return (
        <>
            <Header
                link1="#agentes"
                link2="#armas"
                link3="#mapas"/>
            <Agents />
            <Weapons />
            <Maps />
            <Footer />
        </>
    );
}

export default App;
