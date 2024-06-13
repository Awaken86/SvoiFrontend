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
                    <Route path="/" element={<Title />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/menu/snacks" element={<Menu Itemtype="snacks" />} />
                    <Route path="/menu/burgers" element={<Menu Itemtype="burgers" />} />
                    <Route path="/menu/snackSets" element={<Menu Itemtype="snackSets" />} />
                    <Route path="/menu/sandwiches" element={<Menu Itemtype="sandwiches" />} />
                    <Route path="/menu/hotter" element={<Menu Itemtype="hotter" />} />
                    <Route path="/menu/sideDishes" element={<Menu Itemtype="sideDishes" />} />
                    <Route path="/contacts" element={<Contacts />} />
                </Routes>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}
export default App;