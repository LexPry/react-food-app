import CartIcon from "../Cart/CartIcon";
import styles from './HeaderCartButton.module.css';
import React, { Fragment, useContext, useEffect, useState } from "react";
import CartContext from "../../Store/cart-context";

const HeaderCartButton = (props) => {
    const [ btnIsHighlighted, setBtnIsHighlighted ] = useState(false);
    const cartCtx = useContext(CartContext); //! Cart Context

    const { items } = cartCtx;

    const numberOfCartItems = items.reduce((currentNumber, item) => {
        return currentNumber + item.amount;
    }, 0);

    const btnClasses = `${styles.button} ${btnIsHighlighted ? styles.bump : ''}`

    useEffect(() => {
        if ( items.length === 0 ) {
            return;
        }
        setBtnIsHighlighted(true);

        const timer = setTimeout(() => {
            setBtnIsHighlighted(false);
        }, 300);

        //! returning a function in use effect will cause it to be run as a cleanup function
        return () => {
            clearTimeout(timer);
        };
    }, [ items ])

    return (
        <Fragment>
            <button className={btnClasses} onClick={props.onClick}>
                <span className={styles.icon}>
                    <CartIcon/>
                </span>
                <span>Your Cart</span>
                <span className={styles.badge}>
                {numberOfCartItems}
            </span>
            </button>
        </Fragment>
    );
};

export default HeaderCartButton;