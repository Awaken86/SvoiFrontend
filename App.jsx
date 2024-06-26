import { useEffect } from "react";
import Navbar from "./components/navbar/NavBar";
import { Route, Routes } from "react-router-dom";
import Title from "./components/Title/Title";
import Menu from "./components/menu/Menu";
import Footer from "./components/footer/Footer";
import Contacts from "./components/contacts/Contacts";



const App = () => {
    useEffect(() => {
    })
    return (
        <div>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/SvoiFrontend" element={<Title />} />
                    <Route path="/SvoiFrontend/menu" element={<Menu />} />
                    <Route path="/SvoiFrontend/menu/snacks" element={<Menu Itemtype="snacks" />} />
                    <Route path="/SvoiFrontend/menu/burgers" element={<Menu Itemtype="burgers" />} />
                    <Route path="/SvoiFrontend/menu/snackSets" element={<Menu Itemtype="snackSets" />} />
                    <Route path="/SvoiFrontend/menu/sandwiches" element={<Menu Itemtype="sandwiches" />} />
                    <Route path="/SvoiFrontend/menu/hotter" element={<Menu Itemtype="hotter" />} />
                    <Route path="/SvoiFrontend/menu/sideDishes" element={<Menu Itemtype="sideDishes" />} />
                    <Route path="/SvoiFrontend/contacts" element={<Contacts />} />
                </Routes>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}
export default App;