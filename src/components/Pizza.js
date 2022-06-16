import React from 'react'

const Pizza = ({name,price,image,action}) => {
    return (
        <div className="App-pizza" onClick={action}>
            <img src={image} alt="" />
            <span>{name}</span>
            <span>{price}</span>
        </div>
    )
}

export default Pizza