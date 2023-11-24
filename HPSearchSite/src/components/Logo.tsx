import logo from "../images/app-logo.png";
import styled from "styled-components";

const StyledLogo = styled.img`
  height: 70px;
  margin-bottom: 25px;
`;

const Logo = () => {
  return <StyledLogo src={logo} alt="Harry Potter logo" />;
};

export default Logo;
