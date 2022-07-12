import { Link } from "react-router-dom";

import logo from "../../layoutForm/img/logoD01.jpg";

function Footer() {
  return (
    <div className="footer_wraper bg-black py-5">
      <div className="container">
        <div className="row">
          <div className="col-3">
            <div className="footer_item">
              <div className="">
                <Link to="/" className="footer_item--logo">
                  <img src={logo} alt="" className="w-16 h-16 rounded-3" />
                </Link>
              </div>
              <div
                className="footer_item--contact 
              text-gray-500 font-normal py-3"
              >
                <div className="footer_item--contact-phone py-1">
                  <span>Điện thoại: 0399388142</span>
                </div>
                <div className="footer_item--contact-email py-1">
                  <span>Email: phamtanduongtk29@gmail.com</span>
                </div>
                <div className="footer_item--contact-address py-1">
                  <span>
                    Địa chỉ: 123 Lê Tấn Trung, khối phố Xuân Nam, phường Trường
                    Xuân, thành phố Tam Kỳ, Quảng Nam
                  </span>
                </div>
                <div
                  className="footer_item--social-nextwork py-2 
                text-4xl flex items-center justify-center"
                >
                  <div className="footer_item--social-nextwork-logo px-1">
                    <a
                      href="https://www.facebook.com/ptduong01"
                      target="_blank"
                    >
                      <ion-icon name="logo-facebook"></ion-icon>
                    </a>
                  </div>
                  <div className="footer_item--social-nextwork-logo px-1">
                    <a
                      href="https://www.facebook.com/ptduong01"
                      target="_blank"
                      className="text-blue-600"
                    >
                      <ion-icon name="logo-twitter"></ion-icon>
                    </a>
                  </div>
                  <div className="footer_item--social-nextwork-logo px-1">
                    <a
                      href="https://www.facebook.com/ptduong01"
                      target="_blank"
                      className="text-blue-400"
                    >
                      <ion-icon name="logo-skype"></ion-icon>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="footer_item">
              <div className="about_us--title text-2xl text-white font-extrabold py-4">
                <span className="uppercase">Về D01</span>
              </div>
              <div className="about_us--item pb-2">
                <Link
                  to="/"
                  className="text-gray-500 font-normal hover:text-gray-400"
                >
                  Giới thiệu
                </Link>
              </div>
              <div className="about_us--item pb-2">
                <Link
                  to="/"
                  className="text-gray-500 font-normal hover:text-gray-400"
                >
                  Đối tác
                </Link>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="footer_item">
              <div className="support--title text-2xl text-white font-extrabold py-4">
                <span className="uppercase">hỗ trợ</span>
              </div>
              <div className="support_item font-normal">
                <div className="pb-2">
                  <Link to="/" className="text-gray-500 hover:text-gray-400 ">
                    Liên hệ
                  </Link>
                </div>
                <div className="pb-2">
                  <Link to="/" className="text-gray-500 hover:text-gray-400 ">
                    Bảo mật
                  </Link>
                </div>
                <div className="pb-2">
                  <Link to="/" className="text-gray-500 hover:text-gray-400 ">
                    Điều khoản
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="footer_item">
              <div className="developer--title uppercase py-4 text-white text-2xl font-extrabold">
                <span className="">nhà phát triển</span>
              </div>
              <div className="developer_profile text-gray-500 font-normal">
                <div className="developer_profile--name pb-2">
                  <span>Tên: Phạm Tấn Dương</span>
                </div>
                <div className="developer_profile--job pb-2">
                  <span>Công việc: Sinh viên</span>
                </div>
                <div className="developer_profile--school pb-2">
                  <span>Công tác tại: đại học Sư Phạm, Đà Nẵng</span>
                </div>
                <div className="developer_profile--school pb-2">
                  <span>
                    Liên hệ:
                    <a
                      href="https://www.facebook.com/ptduong01"
                      target="_blank"
                      className="italic text-blue-300 hover:text-blue-400"
                    >
                      Tấn Dương
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
