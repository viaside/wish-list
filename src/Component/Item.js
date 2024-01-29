import React from "react";

export default function Item({img, name, price}) {
    return(
        <div style={{minWidth: 300}}>
            <img src={img} width={200} height={200}/>
            <h4>Название: {name}</h4>
            <p>Цена: {price} руб.</p>
        </div>
    )
}