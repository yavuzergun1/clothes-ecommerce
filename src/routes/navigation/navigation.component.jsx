import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from "./navigation.styles";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { userData } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  console.log(userData);
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <img src={require("../../assets/E-Commerce (2).gif")} alt="" />
        </LogoContainer>
        <NavLinks>
          {currentUser &&
          <div>Hello {userData?.displayName}!</div>
}
          <NavLink to="/shop">SHOP</NavLink>

          {currentUser ? (
            // Navlink'in style özelliklerini alsın ama Link olarak değil de span olarak render edilsin istiyorsak "as=span" yazıyoruz
            <NavLink as="span" onClick={signOutUser}>
              {" "}
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
