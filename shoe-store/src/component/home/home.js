import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Card, Button } from 'react-bootstrap';
import Shoes from '../../shoes.json';
import { BsFillCartFill, BsFacebook, BsInstagram, BsGithub, BsTwitter , BsFillEmojiWinkFill} from "react-icons/bs";
import { CombineContext } from "../../context/context";
import { ActionType } from "../../action/actionType";
import sld1 from "../../sld1.jpg";
import "./home.css";

function Home() {
  const { handleChange, state } = useContext(CombineContext)
  // console.log("state =>", state)

  const AddToCart = (keyName) => {
    let flag = true;

    let modifyShoe = {
      key: keyName,
      img: Shoes[keyName].img,
      name: Shoes[keyName].name,
      prise: Shoes[keyName].prise,
      quantity: 1,
    }

    if (state.cart.length === 0) {
      flag = true
    } else {
      for (let i = 0; i < state.cart.length; i++) {
        if (state.cart[i].key === keyName) {
          flag = false
          alert("This product already in the cart")
        }
      }
    }

    if (flag) {
      handleChange({
        type: ActionType.addToCart,
        payload: modifyShoe,
      })
    }
  }

  return (
    <div className="home_container">
      <div className="header">
        <img src={sld1} style={{ width: "100%", height: "300px" }} alt="slider" />
      </div>
      <h2 className="section_title">Shope Products</h2>
      <hr />
      <div className="shope_products">
        {
          Object.keys(Shoes).map(keyName => {
            const shoes = Shoes[keyName]
            // console.log(shoes)
            return (
              <Card key={keyName} className="card" style={{ width: '12rem' }}>
                <Link to={`/${keyName}`}>
                  <Card.Img variant="top" src={shoes.img} style={{ height: '12rem' }} />
                </Link>
                <Card.Body className="card_body">
                  <Card.Title>{shoes.name}</Card.Title>
                  <Card.Text className="card_text">Rs:{shoes.prise}
                  </Card.Text>
                  <BsFillCartFill className="cart_icon" onClick={() => AddToCart(keyName)} />
                </Card.Body>
              </Card>
            );
          })
        }
      </div>
      <Button variant="outline-success" className="showMore_btn">Show More</Button>

      <div className="footer">
        <div className="social_icons">
          <a href="https://web.facebook.com/usama.rehman.9693/"><BsFacebook /></a>
          <a href="https://www.instagram.com/i_am_murehman/"><BsInstagram /></a>
          <a href="https://github.com/usamaRehman1"><BsGithub /></a>
          <a href="https://pk.linkedin.com/in/usama-rehman-77b130215"><BsTwitter /></a>
        </div>
        <h6 style={{ textAlign: "center", color: "rgb(211, 204, 204)" }}>npm contact us <BsFillEmojiWinkFill style={{color: "yellow"}}/></h6>
      </div>
    </div>
  );

}

export { Home }
