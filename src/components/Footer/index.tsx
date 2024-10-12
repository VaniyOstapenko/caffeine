import { FooterContent } from '../../style';
import Facebook from '../../assets/Facebook.svg';
import Instagram from '../../assets/Intagram.svg';
import Youtube from '../../assets/Youtube.svg';
import Twitter from '../../assets/Twitter.svg';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <>
      <FooterContent initial={{ filter: 'grayscale(100%)' }} transition={{ duration: 3 }} animate={{ filter: 'grayscale(0%)' }}>
        <div className="content">
          <div className="beanScene">
            <h3>Bean Scene</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
              since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <div className="social">
              <motion.img
                whileHover={{ scale: 1.1, filter: 'drop-shadow(5px 5px 5px black)', cursor: 'pointer' }}
                whileTap={{ scale: 0.9, y: 2, x: 2 }}
                className="Facebook"
                src={Facebook}
                alt="coffee"
              ></motion.img>
              <motion.img
                whileHover={{ scale: 1.1, filter: 'drop-shadow(5px 5px 5px black)', cursor: 'pointer' }}
                whileTap={{ scale: 0.9, y: 2, x: 2 }}
                className="Instagram"
                src={Instagram}
                alt="coffee"
              ></motion.img>
              <motion.img
                whileHover={{ scale: 1.1, filter: 'drop-shadow(5px 5px 5px black)', cursor: 'pointer' }}
                whileTap={{ scale: 0.9, y: 2, x: 2 }}
                className="Youtube"
                src={Youtube}
                alt="coffee"
              ></motion.img>
              <motion.img
                whileHover={{ scale: 1.1, filter: 'drop-shadow(5px 5px 5px black)', cursor: 'pointer' }}
                whileTap={{ scale: 0.9, y: 2, x: 2 }}
                className="Twitter"
                src={Twitter}
                alt="coffee"
              ></motion.img>
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
