import { Button } from 'antd';
import React from 'react'
import { useState } from 'react';



const Cart = ({items,total,id,count}) => {
    //  const cartItems =items.map(item => {
    //     //Si la pizza existe ajouter count+1 mais pas changer le prix
    //     //Si elle n'existe pas mettre ne place une div avec pris et pizza
    //      return(
    //          <div key={item.id}> - {item.price}$</div>
    //      )       
    //  })
  return (
    <div>
         
        <div className="App-cart-total">
            {/* {cartItems}  */}
            <h4>Commande en n°{id}</h4>
            <h5>{count}</h5>
           <h6>Soit un total de {total}$</h6>
           <div className='center'>
           <Button onClick>Valider</Button>
           </div>
        </div>
    </div>
  )
}

export default Cart