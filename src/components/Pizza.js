import React from 'react'
import { Row, Col } from 'antd'

const Pizza = ({ name, price, image, action }) => {
    return (
        <Col span={12}>
            <div className="pizza-list" onClick={action} >
                <img src={image} alt="" />
                <div className='pname'>
                    <span>{name}</span>
                    <span>{price}</span>
                </div>
            </div>
        </Col>
    )
}

export default Pizza