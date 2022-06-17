import Header from './components/Header';
// import { useState } from 'react';
import { useState } from 'react';
import Pizza from './components/Pizza';
import Cart from './components/Cart';
import piz1 from "./img/4-fromages.jpg";
import piz2 from "./img/marguerita.jpg";
import piz3 from "./img/pepperoni.jpg";
import piz4 from "./img/reine.jpg";
import camion from "./img/truck-fast-solid.svg";
import feu from "./img/fire-flame-curved-solid.svg";
import euros from "./img/euro-sign-solid.svg";
import './App.css';
import './index.css';
import { Link } from 'react-router-dom';
import { Col, Row } from 'antd';


const App = () => {

  const [pizzas, setPizzas] = useState([
    {
      id: 1,
      name: "4 Fromages",
      price: 9.80,
      picture: piz1
    },
    {
      id: 2,
      name: "Marguerita",
      price: 7.90,
      picture: piz2
    },
    {
      id: 3,
      name: "Pepperoni",
      price: 8.80,
      picture: piz3
    },
    {
      id: 4,
      name: "Reine",
      price: 10.50,
      picture: piz4

    },
  ]);
  const [cart, setCart] = useState({
    items: [],
    id: Date.now(),
    total: 0,
    count:0
  })

  const addToCart = (pizza) => {
    const item = { ...pizza };
    // item.id = `${item.id}-${Date.now()};`

    setCart({
      items: [...cart.items, item],
      total: Math.round((cart.total + pizza.price) * 100 / 100),
      id: cart.id,
      count:cart.count+1
      
    });
  }


  const listPizzas = pizzas.map(pizza => {
    return (
      <Pizza
        key={pizza.id}
        name={pizza.name}
        price={pizza.price}
        image={pizza.picture}
        action={() => addToCart(pizza)}
      />
    )
  })

  return (
    <div className="App">
      <div className='main-header'>
        <Header />
      </div>
      <div className='main'>
        <div>
          <Row justify='space-between' gutter={[20, 20]}>
            <Col span={8}>
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
            <Col span={8}>
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
            <Col span={8}>
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
        <div>

        </div>
        <div>

        </div>
      </div>



    <div className="App-pizza">
      {listPizzas}
      <div className="App-cart">
        <Cart
          id={cart.id}
          items={cart.items}
          total={cart.total}
          count={cart.count}
        />
      </div>
    </div>


    </div>
  );
}

export default App;
