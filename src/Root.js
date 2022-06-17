import React from "react";
import App from "./App";
import NotFound from "./components/NotFound";
import NouvelleCommande from "./components/NouvelleCommande";
import CommandeEnCour from "./components/CommandeEnCour";
import PayementCommande from "./components/PayementCommande";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const Root = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<NotFound/>}/>
          <Route exact path="/" element={<App/>} />
          <Route path="/nouvelle-commande" element={<NouvelleCommande/>} />
          <Route path="/commande-en-cour" element={<CommandeEnCour/>} />
          <Route path="/payement-commande" element={<PayementCommande/>} />
          {/* /: pour dire la suite de l'url dans le paramètre */}
          {/* <Route path="" component={}/> */}
          <Route />
          {/* <Route path="/company/:name" component={MovieCompanies} /> */}
          {/* Si aucune url trouvé */}
  
        </Routes>
      </BrowserRouter>
    )
  }
  
  export default Root