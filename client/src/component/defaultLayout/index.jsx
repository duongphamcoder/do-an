import Header from "./header/header";
import Navbar from "./navbar/navbar";
import Footer from "./footer/footer";
import "./index.scss";
import { useEffect, useRef } from "react";
export default function DefaultLayout({ children }) {
  const content = useRef();
  const navbar = useRef();
  const footer = useRef();

  useEffect(() => {
    const heightScreen = window.screen.height;
    const header_wraper = document.querySelector(".header_wraper").offsetHeight;
    content.current.style.height = `${heightScreen - header_wraper}px`;
    content.current.style.overflow = "scroll";
    /*
      khắc phục trường hợp khi scroll xuống cuối trang:
        - footer đè lên navbar 
    */
    window.onscroll = () => {
      if (window.scrollY >= footer.current.scrollHeight) {
        navbar.current.style.display = "none";
      } else {
        navbar.current.style.display = "flex";
      }
    };
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });

  return (
    <div className="default_wraper">
      <Header></Header>
      <div className="content_wraper flex  py-4" ref={content}>
        <div
          className="fixed h-screen w-32 px-3 flex flex-col items-center"
          ref={navbar}
        >
          <Navbar></Navbar>
        </div>
        <div className="ml-32 basis-full  px-2">{children}</div>
      </div>
      <div className="" ref={footer}>
        <Footer></Footer>
      </div>
    </div>
  );
}
