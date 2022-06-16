import React from "react";
import App from "./App";
import NotFound from "./components/NotFound";
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