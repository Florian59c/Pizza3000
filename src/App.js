import Header from './components/Header';
// import { useState } from 'react';
import camion from "./img/truck-fast-solid.svg.png";
import feu from "./img/fire-flame-curved-solid.svg.png";
import euros from "./img/euro-sign-solid.svg.png";
import './App.css';
import './index.css';
import { Link } from 'react-router-dom';
import { Col, Row } from 'antd';


const App = () => {
  return (
    <div className="App">
      <div className='main-header'>
        <Header />
      </div>
      <div className='main'>
        <div>
          <Row justify='space-between' gutter={[20, 20]}>
            <Col md={8}>
              <Link to="/nouvelle-commande">
                <button className='button-bleu'>
                  <Row>
                    <Col span={24}>
                      <img src={camion} alt="icon de camion" />
                    </Col>
                    <Col span={24}>
                      <hr />
                    </Col>
                    <Col span={24}>
                      <h2>Nouvelle commande</h2>
                    </Col>
                    <Col span={24}>
                      <p>Créer et enregistrer une nouvelle commande</p>
                    </Col>
                  </Row>
                </button>
              </Link>
            </Col>
            <Col md={8}>
              <Link to="/commande-en-cour">
                <button className='button-rouge'>
                  <Row>
                    <Col span={24}>
                      <img src={feu} alt="icon de flamme" />
                    </Col>
                    <Col span={24}>
                      <hr />
                    </Col>
                    <Col span={24}>
                      <h2>Commande en cours</h2>
                    </Col>
                    <Col span={24}>
                      <p>Voir le détail des commandes en cours</p>
                    </Col>
                  </Row>
                </button>
              </Link>
            </Col>
            <Col md={8}>
              <Link to="/payement-commande">
                <button className='button-vert'>
                  <Row>
                    <Col span={24}>
                      <img src={euros} alt="icon du symbole Euros" />
                    </Col>
                    <Col span={24}>
                      <hr />
                    </Col>
                    <Col span={24}>
                      <h2>Paiement commande</h2>
                    </Col>
                    <Col span={24}>
                      <p>Encaisser une commande</p>
                    </Col>
                  </Row>
                </button>
              </Link>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default App;