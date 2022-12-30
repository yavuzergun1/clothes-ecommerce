import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavigationContainer = styled.div`
  height: 200px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const LogoContainer = styled(Link)`
  height: 120px;
  width: 200px;
  padding: 25px;
  img {
    width: 100%;
  }
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;

//  .navigation {
//   height: 70px;
//   width: 100%;
//   display: flex;
//   justify-content: space-between;
//   margin-bottom: 25px;

//   .logo-container {
//      height: 100%;
//       width: 70px;
//      padding: 25px;
//   }

//   .nav-links-container {
//       width: 50%;
//      height: 100%;
//      display: flex;
//      align-items: center;
//      justify-content: flex-end;

//     .nav-link {
//       padding: 10px 15px;
//       cursor: pointer;
//     }
//   }
// }
