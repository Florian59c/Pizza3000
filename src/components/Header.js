import { Col, Row } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import fleche from '../img/fleche.png'
import logo from '../img/logo-pizza.png'

const Header = () => {
    return (
        <div className='header'>
            <Row justify='center' gutter={[10, 10]}>
                <Col>
                    <nav>
                        <Link to="/">
                            <div>
                                <img className='fleche-retour' src={fleche} alt="La flèche permettant de revenir en arrière" />
                            </div>
                        </Link>
                    </nav>
                </Col>
                <Col>
                    <div>
                        <img src={logo} alt="icon en noir et blanc d'une part de pizza" />
                    </div>
                </Col>
                <Col>
                    <div>
                        <h1>Pizza Reeflex</h1>
                    </div>
                </Col>
            </Row>


            {/* <Link to={`/`}>
                <img src={logo} alt="Logo de Disney+" />
            </Link> */}
        </div>
    )
}
export default Header