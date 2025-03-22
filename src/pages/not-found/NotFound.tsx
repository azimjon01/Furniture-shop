import backlogo from "../../assets/icons/informationRight.svg";
import { BackHome, BackHomeLogo, NotFoundContainer } from "./NotFound.styles";

const NotFoundPage = () => {
  return (
    <NotFoundContainer>
      <BackHome to="/">
        <BackHomeLogo src={backlogo} />
      </BackHome>
      <h1>NOT FOUND PAGE</h1>
      <p style={{ color: "red" }}>This page not found</p>
    </NotFoundContainer>
  );
};

export default NotFoundPage;
