import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { CheckoutContainer, CheckoutHeader, HeaderBlock } from "./checkout.styles.jsx";

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <div className="header-block">
          <span>Product</span>
        </div>
        <HeaderBlock>
          {" "}
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          {" "}
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          {" "}
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          {" "}
          <span>Remove</span>
        </HeaderBlock>
        <div className="header-block"></div>
        <div className="header-block"></div>
        <div className="header-block"></div>
        <div className="header-block"></div>
      </CheckoutHeader>
      
        {cartItems.map((cartItem) => (
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))}
        <div className="total">TOTAL: ${cartTotal}</div>
    </CheckoutContainer>
  );
};

export default Checkout;
