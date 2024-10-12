import { Global, BackgroundPreview, Menu, BlockInfo, Button1, Button2, Button3, Button4, Differences, Morning, Feedback, EndContent } from './style';
import Header from './components/Header';
import coffee from './assets/stylized-cup-coffee-out-coffee-beans-flat-lay 1.svg';
import coffeeMenu1 from './assets/coffeeMenu1.svg';
import coffeeMenu2 from './assets/coffeeMenu2.svg';
import coffeeMenu3 from './assets/coffeeMenu3.svg';
import coffeeMenu4 from './assets/coffeeMenu4.svg';
import beans from './assets/beans.svg';
import badge from './assets/badge.svg';
import cup from './assets/cup.svg';
import price from './assets/price.svg';
import cup2 from './assets/cup2.svg';
import grains from './assets/grains.svg';
import stick from './assets/stick.svg';
import rectangel from './assets/Rectangle.svg';
import vector1 from './assets/Vector1.svg';
import vector2 from './assets/Vector2.svg';
import endImage from './assets/endImage.svg';
import Footer from './components/Footer';
import { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';

const coffies = [
  {
    id: 1,
    title: 'Cappuccino',
    description: 'Coffee 50% | Milk 50%',
    price: '$8.50',
    img: coffeeMenu1,
  },
  {
    id: 2,
    title: 'Chai Latte',
    description: 'Coffee 50% | Milk 50%',
    price: '$8.50',
    img: coffeeMenu2,
  },
  {
    id: 3,
    title: 'Macchiato',
    description: 'Coffee 50% | Milk 50%',
    price: '$8.50',
    img: coffeeMenu3,
  },
  {
    id: 4,
    title: 'Expresso',
    description: 'Coffee 50% | Milk 50%',
    price: '$8.50',
    img: coffeeMenu4,
  },
];

const ourDifferences = [
  {
    id: 1,
    img: beans,
    title: 'Supreme Beans',
    paragraph: 'Beans that provides great taste',
  },
  {
    id: 2,
    img: badge,
    title: 'High Quality',
    paragraph: 'We provide the highest quality',
  },
  {
    id: 3,
    img: cup,
    title: 'Extraordinary ',
    paragraph: 'Coffee like you have never tasted',
  },
  {
    id: 4,
    img: price,
    title: 'Affordable Price',
    paragraph: 'Our Coffee prices are easy to afford',
  },
];

const sliderObj = [
  {
    id: 1,
    description: `Lorem Ipsum is simply dummy text of the printing and 
    typesetting industry. Lorem Ipsum has been the industry"s standard 
    dummy text ever since the 1500s, when an unknown printer took a galley 
    of type and scrambled it to make a type specimen book. It has survived 
    not only five centuries, but also the leap into electronic typesetting, 
    remaining essentially unchanged. It was popularised in the 1960s with 
    the release of Letraset.....`,
    name: 'Jonny Thomas',
    profession: 'Project Manager',
  },
  {
    id: 2,
    description: `Lorem Ipsum is simply dummy text of the printing and 
    typesetting industry. Lorem Ipsum has been the industry"s standard 
    dummy text ever since the 1500s, when an unknown printer took a galley 
    of type and scra`,
    name: 'John Smith',
    profession: 'Full Stack React',
  },
  {
    id: 3,
    description: `Lorem Ipsum is simply d`,
    name: 'Antony Button',
    profession: 'React Developer',
  },
];

const App = () => {
  const [count, setCount] = useState(0);

  const nextSlider = useCallback(() => {
    setCount(prevCount => (prevCount === sliderObj.length - 1 ? 0 : prevCount + 1));
  }, []);

  const lastSlider = () => setCount(count === 0 ? sliderObj.length - 1 : count - 1);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlider();
    }, 3000);
    return () => clearInterval(interval);
  }, [nextSlider]);

  return (
    <>
      <Global />

      <BackgroundPreview
        initial={{ filter: 'blur(10px) grayscale(100%)' }}
        transition={{ duration: 1, ease: 'linear' }}
        animate={{ filter: 'blur(0px) grayscale(0%)' }}
      >
        <Header />
        <div className="landing">
          <p>We’ve got your morning covered with</p>
          <h1>Coffee</h1>
          <p>
            It is best to start your day with a cup of coffee. Discover the best flavours coffee you will ever have. We provide the best for our
            customers.
          </p>
          <Button1
            initial={{ boxShadow: '5px 5px 10px rgba(3, 4, 5, 6)' }}
            whileHover={{ scale: 1.1, backgroundColor: ' #f9c06a', cursor: 'pointer', boxShadow: '7px 7px 12px rgba(4, 5, 6, 7)' }}
            whileTap={{ backgroundColor: '#cd9d55', scale: 1, boxShadow: '5px 5px 10px rgba(0, 0, 0, 0)' }}
          >
            Order Now
          </Button1>
        </div>
      </BackgroundPreview>

      <BlockInfo
        initial={{ filter: 'grayscale(100%)', opacity: 0 }}
        whileHover={{ opacity: 1, scale: 1.05 }}
        transition={{ duration: 3, ease: 'linear' }}
        animate={{ filter: 'grayscale(0%)' }}
      >
        <div className="content">
          <h2>Discover the best coffee</h2>
          <p>
            Bean Scene is a coffee shop that provides you with quality coffee that helps boost your productivity and helps build your mood. Having a
            cup of coffee is good, but having a cup of real coffee is greater. There is no doubt that you will enjoy this coffee more than others you
            have ever tasted.
          </p>
          <Button2
            initial={{ boxShadow: '5px 5px 10px rgba(3, 4, 5, 6)' }}
            whileHover={{ scale: 1.1, backgroundColor: ' #f9c06a', cursor: 'pointer', boxShadow: '7px 7px 12px rgba(4, 5, 6, 7)' }}
            whileTap={{ backgroundColor: '#cd9d55', scale: 1, boxShadow: '5px 5px 10px rgba(0, 0, 0, 0)' }}
          >
            Learn More
          </Button2>
        </div>
        <div>
          <img src={coffee} alt="coffee" />
        </div>
      </BlockInfo>

      <Menu
        initial={{ filter: 'grayscale(100%)', opacity: 0 }}
        whileHover={{ opacity: 1, scale: 1.05 }}
        transition={{ duration: 3, ease: 'linear' }}
        animate={{ filter: 'grayscale(0%)' }}
      >
        <h2>Enjoy a new blend of coffee style</h2>
        <p>Explore all flavours of coffee with us. There is always a new cup worth experiencing.</p>
        <div className="content">
          {coffies.map((el, index) => (
            <div key={index} className="itemFlex">
              <div className="item">
                <div>
                  <img src={el.img} alt="coffee" />
                </div>
                <div className="itemInfo">
                  <h3>{el.title}</h3>
                  <p>{el.description}</p>
                  <p className="price">{el.price}</p>
                  <Button3
                    initial={{ boxShadow: '5px 5px 10px rgba(3, 4, 5, 6)' }}
                    whileHover={{ scale: 1, backgroundColor: ' #f9c06a', cursor: 'pointer' }}
                    whileTap={{ backgroundColor: '#cd9d55', scale: 0.9, boxShadow: '5px 5px 10px rgba(0, 0, 0, 0)' }}
                  >
                    Order Now
                  </Button3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Menu>

      <Differences
        initial={{ filter: 'grayscale(100%)', opacity: 0 }}
        whileHover={{ opacity: 1, scale: 1.05 }}
        transition={{ duration: 3, ease: 'linear' }}
        animate={{ filter: 'grayscale(0%)' }}
      >
        <h2>Why are we different?</h2>
        <p>We don’t just make your coffee, we make your day!</p>
        <div className="content">
          {ourDifferences.map((el, index) => (
            <div key={index} className="item">
              <div className="itemInfo">
                <div>
                  <img src={el.img} alt="smallImage"></img>
                </div>
                <h3>{el.title}</h3>
                <p>{el.paragraph}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="downP">Great ideas start with great coffee, Lets help you achieve that</p>
        <h3>Get started today.</h3>
        <Button4
          initial={{ boxShadow: '5px 5px 10px rgba(3, 4, 5, 6)' }}
          whileHover={{ scale: 1.1, backgroundColor: ' #f9c06a', cursor: 'pointer', boxShadow: '7px 7px 12px rgba(4, 5, 6, 7)' }}
          whileTap={{ backgroundColor: '#cd9d55', scale: 1, boxShadow: '5px 5px 10px rgba(0, 0, 0, 0)' }}
        >
          Join Us
        </Button4>
      </Differences>

      <Morning initial={{ filter: 'grayscale(100%)' }} transition={{ duration: 3, ease: 'linear' }} animate={{ filter: 'grayscale(0%)' }}>
        <div className="content">
          <div className="mainItem">
            <div className="item1">
              <h2>Get a chance to have an Amazing morning</h2>
              <p>We are giving you are one time opportunity to experience a better life with coffee.</p>
              <Button2
                initial={{ boxShadow: '5px 5px 10px rgba(3, 4, 5, 6)' }}
                whileHover={{ scale: 1.1, backgroundColor: ' #f9c06a', cursor: 'pointer', boxShadow: '7px 7px 12px rgba(4, 5, 6, 7)' }}
                whileTap={{ backgroundColor: '#cd9d55', scale: 1, boxShadow: '5px 5px 10px rgba(0, 0, 0, 0)' }}
              >
                Order Now
              </Button2>
            </div>
            <div className="item2">
              <img src={cup2} alt="coffee"></img>
            </div>
            <div className="item3">
              <img src={grains} alt="coffee"></img>
            </div>
          </div>
        </div>
      </Morning>

      <Feedback
        initial={{ filter: 'grayscale(100%)', opacity: 0 }}
        whileHover={{ opacity: 1, scale: 1.05 }}
        transition={{ duration: 3, ease: 'linear' }}
        animate={{ filter: 'grayscale(0%)' }}
      >
        <div className="content">
          <div className="startItem">
            <h2>Our coffee perfection feedback</h2>
            <p>Our customers has amazing things to say about us</p>
          </div>
          <div className="mainText">
            <div className="person">
              <img src={stick} alt="coffe"></img>
            </div>
            <motion.div
              initial={{ boxShadow: '5px 5px 10px rgba(3, 4, 5, 6)' }}
              whileHover={{ scale: 1.1, backgroundColor: ' #f9c06a', cursor: 'pointer', boxShadow: '7px 7px 12px rgba(4, 5, 6, 7)' }}
              whileTap={{ backgroundColor: '#cd9d55', scale: 1, boxShadow: '5px 5px 10px rgba(0, 0, 0, 0)' }}
              className="vectorOne"
              onClick={() => nextSlider()}
            >
              <img src={vector1} alt="coffee"></img>
            </motion.div>
            <p>{sliderObj[count].description}</p>
            <h3>{sliderObj[count].name}</h3>
            <p className="profession">{sliderObj[count].profession}</p>
            <div className="man">
              <img src={rectangel} alt="coffee"></img>
            </div>
            <motion.div
              initial={{ boxShadow: '5px 5px 10px rgba(3, 4, 5, 6)' }}
              whileHover={{ scale: 1.1, backgroundColor: ' #f9c06a', cursor: 'pointer', boxShadow: '7px 7px 12px rgba(4, 5, 6, 7)' }}
              whileTap={{ backgroundColor: '#cd9d55', scale: 1, boxShadow: '5px 5px 10px rgba(0, 0, 0, 0)' }}
              className="vectorTwo"
              onClick={() => lastSlider()}
            >
              <img src={vector2} alt="coffee"></img>
            </motion.div>
          </div>
        </div>
      </Feedback>

      <EndContent initial={{ filter: 'grayscale(100%)' }} transition={{ duration: 2, ease: 'linear' }} animate={{ filter: 'grayscale(0%)' }}>
        <img src={endImage} alt="coffee"></img>
      </EndContent>

      <Footer />
    </>
  );
};

export default App;
