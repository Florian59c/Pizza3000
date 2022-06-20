import React from 'react'
import Header from './Header';

const PayementCommande = () => {
  return (
    <div>
      <Header />
      <div className='payementContainer'>
        <label for="selectCommande"><h2>Sélectionnez la commande à encaisser </h2></label>
        <select name="Commande" id="selectCommande">
          <option value="1" selected>rtyui</option>
          <option value="2">dertyui</option>
        </select>
        <div>
          <h1>Détail de la commande n°CMD-</h1>
        </div>
      </div>
    </div>
  )
}

export default PayementCommande