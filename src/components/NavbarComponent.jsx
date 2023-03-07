import { Button, Container, Navbar, Modal } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { useState, useContext } from "react";
import { CartContext } from "../CartContext";
import CartProduct from "./CartProduct";
import axios from 'axios';

const NavbarComponent = () => {
  const cart = useContext(CartContext);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const checkOut = async () => {
    try {
      const response = await axios.post('http://localhost:4000/checkout', {
        items: cart.items
      });
      
      if (response.data.url) {
        window.location.assign(response.data.url);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const productsCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  return (
    <>
      <Navbar expand="sm">
        <Navbar.Brand href="/">Ecommerce Store</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end ml-auto">
          <Button onClick={handleShow}>Cart {productsCount} items</Button>
        </Navbar.Collapse>
      </Navbar>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {productsCount > 0 ? (
            <>
              <p>Items in your cart:</p>
              {cart.items.map((currentProduct, idx) => (
                <CartProduct
                  key={idx}
                  id={currentProduct.id}
                  quantity={currentProduct.quantity}
                />
              ))}
              <h1>
                Total:{" "}
                {cart.getTotalCost() ? cart.getTotalCost().toFixed(2) : 0}
              </h1>
              <Button variant="success" onClick={checkOut}>
                Purchase Items!
              </Button>
            </>
          ) : (
            <h1>There are no items in your cart!</h1>
          )}
        </Modal.Body>
      </Modal>
      <Outlet />
    </>
  );
};

export default NavbarComponent;
