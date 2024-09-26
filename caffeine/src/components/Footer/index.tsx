import styled from "styled-components";
import imgFooter from "../../assets/imgFooter.svg";
import Facebook from "../../assets/Facebook.svg";
import Instagram from "../../assets/Intagram.svg";
import Youtubr from "../../assets/Youtube.svg";
import Twitter from "../../assets/Twitter.svg";

const FooterContent = styled.div`
  background-image: url(${imgFooter});
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  .content {
    height: 698px;
    max-width: 1220px;
    height: 500px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 2% 0;
    margin: auto;
    gap: 66px;

    .beanScene {
      display: flex;
      flex-direction: column;
      gap: 40px;
      h3 {
        font: 400 54px "Clicker Script";
        color: #ffff;
      }
      p {
        width: 400px;
        line-height: 25px;
        color: #ffff;
      }
    }

    .about,
    .company,
    .contactUs {
      display: flex;
      flex-direction: column;
      gap: 30px;
      h3 {
        font: 700 26px "Playfair Display";
        color: #ffff;
      }
      p {
        font: 400 16px "Playfair Display";
        color: #ffff;
      }
    }

    .company {
      display: flex;
      flex-direction: column;
      gap: 35px;
    }

    .contactUs {
      display: flex;
      flex-direction: column;
      gap: 35px;
    }
  }
`;

const Footer = () => {
  return (
    <>
      <FooterContent>
        <div className="content">
          <div className="beanScene">
            <h3>Bean Scene</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <div>
              <img src="Facebook" alt="coffee"></img>
              <img src="Instagram" alt="coffee"></img>
              <img src="Youtube" alt="coffee"></img>
              <img src="Twitter" alt="coffee"></img>
            </div>
          </div>
          <div className="about">
            <h3>About</h3>
            <p>Menu</p>
            <p>Features</p>
            <p>News & Blogs</p>
            <p>Help & Supports</p>
          </div>
          <div className="company">
            <h3>Company</h3>
            <p>How we work</p>
            <p>Terms of service</p>
            <p>Pricing</p>
            <p>FAQ</p>
          </div>
          <div className="contactUs">
            <h3>Contact Us</h3>
            <p>
              Akshya Nagar 1st Block 1st Cross, Rammurthy nagar,
              Bangalore-560016
            </p>
            <p>+1 202-918-2132</p>
            <p>beanscene@mail.com</p>
            <p>www.beanscene.com</p>
          </div>
        </div>
      </FooterContent>
    </>
  );
};

export default Footer;
