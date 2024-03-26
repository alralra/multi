import {useContext} from "react";
import "./css/HomeComponent.scss";
import MainComponent from "./MainComponent";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import {ThemeContext} from "./ThemeContext";
const HomeComponent = () => {
  const data = useContext(ThemeContext);
  console.log(data);
  return (
    <div className="container">
      <HeaderComponent />
      <MainComponent />
      <FooterComponent />
    </div>
  );
};
export default HomeComponent;