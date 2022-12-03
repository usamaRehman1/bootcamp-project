import React from "react";
import { useParams, Link } from "react-router-dom";
import Shoes from '../../shoes.json';
import { Card, Button } from 'react-bootstrap';
import "./product_item.css"

function ProductsItem() {
    const { id } = useParams()
    // console.log("Id active =>", id)

    const shoes = Shoes[id]
    // console.log("id =>", shoes)

    const buyShoes = () => {
        alert("successfuly Order")
    }

    return (
        <div className="productItem_container">
            <Card className="card" style={{ width: '35rem', border: "none" }}>
                <Card.Img variant="top" src={shoes.img} style={{ height: '35rem' }} />
            </Card>
            <Card className="card" style={{ width: '35rem', border: "none" }}>
                <Card.Body className="card_body mt-5">
                    <Card.Title>{shoes.name}</Card.Title>
                    <Card.Text className="card_text">Rs:{shoes.prise}</Card.Text>
                    <Link to={'/'}>
                        <Button variant="danger" onClick={() => buyShoes()}>Buy Now</Button>{' '}
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );

}

export { ProductsItem }