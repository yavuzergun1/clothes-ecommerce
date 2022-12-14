import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { Link } from "react-router-dom";
import { CartDropdownContainer, CartItems, EmptyMessage } from "./cart-dropdown.styles.jsx";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </CartItems>
      <Link to="checkout">
        <Button>GO TO CHECKOUT</Button>
      </Link>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
