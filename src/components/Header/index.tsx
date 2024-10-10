import { Wrapper } from '../../style';
import { motion } from 'framer-motion';

const Header = () => {
  const nav: string[] = ['Home', 'Menu', 'About Us', 'Contact Us'];

  return (
    <>
      <Wrapper>
        <h1>Caffeine</h1>
        <div className="navigation">
          {nav.map(el => (
            <motion.p whileHover={{ scale: 1.1, color: ' #f9c06a', cursor: 'pointer' }} whileTap={{ color: '#cd9d55', scale: 1 }} key={el}>
              {el}
            </motion.p>
          ))}
        </div>
        <div className="container">
          <motion.p whileHover={{ scale: 1.1, cursor: 'pointer', textDecoration: 'underline' }} whileTap={{ scale: 1 }} className="btn_signIn">
            Sign In
          </motion.p>
          <motion.button whileHover={{ scale: 1.1, cursor: 'pointer' }} whileTap={{ backgroundColor: '#cd9d55', scale: 1 }} className="btn_active">
            Sign Up
          </motion.button>
        </div>
      </Wrapper>
    </>
  );
};
export default Header;
