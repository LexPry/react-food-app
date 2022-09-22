import Header from "./Components/Layout/Header";
import { useState } from "react";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./Store/CartProvider";

const App = () => {
    const [ showCart, setShowCart ] = useState(false);

    const showCartHandler = () => {
        setShowCart(true);
    };

    const hideCartHandler = () => {
        setShowCart(false);
    }
    return (
        <CartProvider>
            {showCart && <Cart onClose={hideCartHandler}/>}
            <Header onShowCart={showCartHandler} onHideCart={hideCartHandler}/>
            <main>
                <Meals/>
            </main>
        </CartProvider>
    );
};

export default App;
