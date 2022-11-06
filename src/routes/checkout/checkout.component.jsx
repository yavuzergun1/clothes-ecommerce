import { useContext, Fragment } from "react";
import { CartContext } from "../../contexts/cart.context";

function Checkout() {
  const { cartItems } = useContext(CartContext);
    const increaseCount = () => {
    
}
  return (
    <Fragment>
      {cartItems.map(({quantity, name, id}) => {
          return (
            <div key={id}>
              {quantity}
                  <button onClick={(quantity) =>(quantity = quantity + 1) }>increase </button>
                  <div>{name}
                  </div>
            </div>
          );
      })}
    </Fragment>
  );
}

export default Checkout;
