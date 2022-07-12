import Slide from "./slick_slide";
import ContentHome from "./cotentHome/home";
import "./home.scss";
export default function Home() {
  return (
    <div className="home_wraper">
      <Slide></Slide>
      <ContentHome></ContentHome>
    </div>
  );
}
