import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { PaletteMode } from "@mui/material/index";
import Drawer from "@mui/material/Drawer";

import Cart from "./components/Cart";
import NotFound from "./components/NotFound404";
import { Counter } from "counter/Counter";
import Header from "header";
import Footer from "footer";
import Store from "store";

import "./index.css";

const App = () => {
  const [mode, setMode] = useState<PaletteMode>("dark");
  const [page, setPage] = useState("Home");
  const [cartOpen, setCartOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState<any[]>([]);

  const handleAddToCart = (clickedItem: any) => {
    const item = cartItems.find((item: any) => item.id === clickedItem.id);
    if (!item) setCartItems([...cartItems, { ...clickedItem, amount: 1 }]);
    else
      setCartItems(
        cartItems.map((item: any) =>
          item.id === clickedItem.id
            ? { ...item, amount: item.amount + 1 }
            : item
        )
      );
  };

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  const renderPage = () => {
    switch (page) {
      case "Home":
        return <Store products={products} handleAddToCart={handleAddToCart} />;
      case "Counter":
        return <Counter />;
      default:
        return <NotFound />;
    }
  };

  const theme = createTheme({
    palette: {
      mode,
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header
          pages={["Products", "Counter", "Not Found"]}
          setSelectedPage={setPage}
          selectedPage={page}
          theme={mode}
          setTheme={setMode}
          setCartOpen={() => setCartOpen(true)}
          cartItems={cartItems}
        />
        {renderPage()}
        <Drawer
          anchor="right"
          open={cartOpen}
          onClose={() => setCartOpen(false)}
        >
          <Cart
            cartItems={cartItems}
            // addToCart={handleAddToCart}
            // removeFromCart={handleRemoveFromCart}
          />
        </Drawer>
        {/* <Counter header="joao" /> // Micro frontend app */}
        <Footer />
      </ThemeProvider>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
