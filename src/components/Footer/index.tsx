import { FooterContent } from '../../style';
import Facebook from '../../assets/Facebook.svg';
import Instagram from '../../assets/Intagram.svg';
import Youtube from '../../assets/Youtube.svg';
import Twitter from '../../assets/Twitter.svg';

const Footer = () => {
  return (
    <>
      <FooterContent>
        <div className="content">
          <div className="beanScene">
            <h3>Bean Scene</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
              since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <div className="social">
              <img className="Facebook" src={Facebook} alt="coffee"></img>
              <img className="Instagram" src={Instagram} alt="coffee"></img>
              <img className="Youtube" src={Youtube} alt="coffee"></img>
              <img className="Twitter" src={Twitter} alt="coffee"></img>
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
            <p>Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016</p>
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
