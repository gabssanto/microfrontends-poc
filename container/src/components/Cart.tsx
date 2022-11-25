import React from "react";
import styled from "@mui/material/styles/styled";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

export const Wrapper = styled("div")`
  font-family: Arial, Helvetica, sans-serif;
  width: 500px;
  padding: 20px;
`;

type Props = {
  cartItems: any[];
  addToCart: (clickedItem: any) => void;
  removeFromCart: (id: number) => void;
};

const Cart = ({ cartItems, addToCart, removeFromCart }: Props) => {
  const calculateTotal = (items: any[]) =>
    items.reduce((acc, item) => acc + item.amount * item.price, 0);

  return (
    <Wrapper>
      <h2>Your Cart</h2>
      <h2>Total: ${calculateTotal(cartItems).toFixed(2)}</h2>
      {cartItems.length > 0 && (
        <Button variant="contained" color="success">
          Proceed to checkout
        </Button>
      )}
      {cartItems.length === 0 ? <p>No items in cart.</p> : null}
      {cartItems.map((item) => (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: 1,
            m: 1,
            borderRadius: 1,
          }}
        >
          <Box
            sx={{
              p: 1,
              m: 1,
              borderRadius: 1,
              maxWidth: 200,
            }}
          >
            <h3>{item.title}</h3>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h4>{item.amount}</h4>
              <ButtonGroup
                orientation="horizontal"
                aria-label="vertical contained button group"
                variant="contained"
                sx={{
                  m: 1,
                }}
              >
                <Button key="add" color="info">
                  +
                </Button>
                <Button key="remove" color="error">
                  -
                </Button>
              </ButtonGroup>
            </Box>
          </Box>
          <Box
            sx={{
              img: {
                borderRadius: 1,
                margin: "auto",
                display: "block",
                maxWidth: "150px",
                maxHeight: "150px",
              },
            }}
          >
            <img src={item.images[0]} alt="Italian Trulli" />
          </Box>
        </Box>
      ))}
    </Wrapper>
  );
};

export default Cart;
