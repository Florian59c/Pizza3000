import React from "react";
import App from "./App"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const Root = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" />
          {/* /: pour dire la suite de l'url dans le paramètre */}
          {/* <Route path="" component={}/> */}
          <Route />
          {/* <Route path="/company/:name" component={MovieCompanies} /> */}
          {/* Si aucune url trouvé */}
          <Route component={NotFound}/>
  
        </Routes>
      </BrowserRouter>
    )
  }
  
  export default Root