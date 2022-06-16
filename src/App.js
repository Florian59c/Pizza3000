import { useState } from 'react';
import Pizza from './components/Pizza';
import Cart from './components/Cart';
import piz1 from "./img/4-fromages.jpg";
import piz2 from "./img/marguerita.jpg";
import piz3 from "./img/pepperoni.jpg";
import piz4 from "./img/reine.jpg";
import './App.css';
import './index.css';


const App =  () => {

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
    total: 0
  })

  const addToCart = (pizza) => {
    const item ={...pizza};
    item.id = `${item.id}-${Date.now()};`

    setCart({
      items: [...cart.items, item],
      total: cart.total + pizza.price
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
    <div className="App-pizza">
        {listPizzas}
      <div className="App-cart">
        <Cart
        items={cart.items}
        total={cart.total}
        />
      </div>
    </div>
  );
}

export default App;
