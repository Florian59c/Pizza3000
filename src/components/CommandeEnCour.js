import { Col, Row } from 'antd';
import React from 'react'
import Modifier from '../img/modifier.png';
import Supprimer from '../img/supprimer.png';
import Cart from './Cart';
import Header from './Header';
import NouvelleCommande from './NouvelleCommande';

const CommandeEnCour = () => {
  return (
    <div>
      <Header />
      <div className='enCours'>
        <h1>Liste des commandes</h1>
        <table>
          <tr>
            <th className='celulle1'><h2>N°</h2></th>
            <th className='celulle2'><h2>Total commande</h2></th>
            <th className='celulle3'><h2>statut commande</h2></th>
            <th className='celulle4'><h2>Actions</h2></th>
          </tr>

          {/* appeler une fonction qui ajoute la suite à chaque commande / le contenu des {} du <p> change en fonction des commandes */}

          {/* <tr>
            <td className='celulle1'><p>commande n°CMD-{id}</p></td>
            <td className='celulle2'>{prix}€</td>
            <td className='celulle3'>{}</td>
            <td className='celulle4'>
              <Row>
                <Col span={12}>
                  <img src={Modifier} alt="Boutton pour modifier la commande" />
                </Col>
                <Col span={12}>
                  <img src={Supprimer} alt="Boutton pour supprimer la commande" />
                </Col>
              </Row>
            </td>
          </tr> */}

        </table>
      </div>
    </div>
  )
}

export default CommandeEnCour