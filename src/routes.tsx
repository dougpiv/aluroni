import Footer from "components/Footer";
import Menu from "components/Menu";
import PaginaPadrão from "components/PaginaPadrao";
import Cardapio from "pages/Cardapio";
import Inicio from "pages/Inicio";
import NotFound from "pages/NotFound";
import Prato from "pages/Prato";
import Sobre from "pages/Sobre";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
export default function AppRouter() {
    return (
        <main className="container">
            <Router>
                <Menu></Menu>
                <Routes>
                    <Route path="/" element={<PaginaPadrão></PaginaPadrão>}>
                        <Route index element={<Inicio></Inicio>}></Route>
                        <Route path="cardapio" element={<Cardapio></Cardapio>} />
                        <Route path="sobre" element={<Sobre></Sobre>} />
                    </Route>
                    <Route path="prato/:id" element={<Prato></Prato>} />
                    <Route path="*" element={<NotFound></NotFound>} />
                </Routes>
            </Router>
            <Footer></Footer>
        </main>
    );
}
