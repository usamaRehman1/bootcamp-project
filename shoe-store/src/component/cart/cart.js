import React, { useContext } from "react";
import { CombineContext } from "../../context/context";
import { Card, Button, Figure } from 'react-bootstrap';
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import { ActionType } from "../../action/actionType";
import "./cart.css";

function Cart() {
    const { handleChange, state } = useContext(CombineContext)

    const changeQuantity = (ev, key) => {
        handleChange({
            type: ActionType.changeQuantityValue,
            payload: {
                key,
                quantity: Number(ev.target.value),
            }
        })
    }

    if (state.cart.length === 0) {
        return (
            <h4 style={{ marginTop: "4rem", textAlign: "center" }}>Cart is empty</h4>
        )
    }

    const getPrise = () => {
        let totalPrise = 0;
        for (let i = 0; i < state.cart.length; i++) {
            totalPrise = totalPrise + (parseFloat(state.cart[i].prise.replace(/,/g, '')) * state.cart[i].quantity)
        }
        return totalPrise
    }

    const deleteToCart = (keyName) => {
        handleChange({
            type: ActionType.removeToCart,
            payload: keyName,
        })
    }

    const buyShoes = () => {
        handleChange({
            type: ActionType.allRemoveToCart,
        })
        alert("successfuly Order")
    }

    return (
        <div className="cart_container">
            {
                state.cart.map((cartObj) => {
                    return (
                        <div className="cart_box" key={cartObj.key}>
                            <div className="cart_box_img">
                                <Figure>
                                    <Figure.Image
                                        width={171}
                                        height={180}
                                        alt={cartObj.key}
                                        src={cartObj.img}
                                    />
                                </Figure>
                            </div>
                            <div className="cart_box_detail">
                                <Card className="card" style={{ width: '20rem', border: "none" }}>
                                    <Card.Body className="card_body mt-5">
                                        <Card.Title>{cartObj.name}</Card.Title>
                                        <Card.Text className="card_text">Rs:{cartObj.prise}</Card.Text>
                                        <input type="number" style={{ width: "40px" }} min="1" value={cartObj.quantity} onChange={(ev) => changeQuantity(ev, cartObj.key)} />
                                    </Card.Body>
                                </Card>
                            </div>
                            <AiFillDelete className="cart_box_delete" onClick={() => deleteToCart(cartObj.key)} />
                        </div>
                    );
                })
            }
            <div className="cart_total">
                <h4>Total Prise</h4>
                <h4>RS : {getPrise()}</h4>
                <Link to={'/'}>
                    <Button variant="danger" onClick={() => buyShoes()}>Buy Now</Button>
                </Link>
            </div>
        </div>
    );
}
export { Cart }