import { useContext, Fragment } from "react";
import { CartContext } from "../../contexts/cart.context";
import "./checkout.styles.scss";

function Checkout() {
  const { cartItems, addItemToCart, removeItemFromCart } = useContext(CartContext);
  return (
    <Fragment>
      {cartItems.map((cartItem) => {
        const { quantity, name, id } = cartItem;
        return (
          <div key={id}>
            {quantity}
            <button onClick={() => addItemToCart(cartItem)}>increment </button>
            <button onClick={() => removeItemFromCart(cartItem)}>decrement </button>
            <div>{name}</div>
          </div>
        );
      })}
    </Fragment>
  );
}

export default Checkout;
