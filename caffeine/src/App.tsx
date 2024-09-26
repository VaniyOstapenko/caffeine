import styled, { createGlobalStyle } from "styled-components";
import Header from "./components/Header";
import img from "./assets/coffeeimage.svg";
import coffee from "./assets/stylized-cup-coffee-out-coffee-beans-flat-lay 1.svg";
import coffeeMenu1 from "./assets/coffeeMenu1.svg";
import coffeeMenu2 from "./assets/coffeeMenu2.svg";
import coffeeMenu3 from "./assets/coffeeMenu3.svg";
import coffeeMenu4 from "./assets/coffeeMenu4.svg";
import beans from "./assets/beans.svg";
import badge from "./assets/badge.svg";
import cup from "./assets/cup.svg";
import price from "./assets/price.svg";
import group from "./assets/group.svg";
import cup2 from "./assets/cup2.svg";
import Footer from "./components/Footer";

const coffies = [
  {
    id: 1,
    title: "Cappuccino",
    description: "Coffee 50% | Milk 50%",
    price: "$8.50",
    img: coffeeMenu1,
  },
  {
    id: 2,
    title: "Chai Latte",
    description: "Coffee 50% | Milk 50%",
    price: "$8.50",
    img: coffeeMenu2,
  },
  {
    id: 3,
    title: "Macchiato",
    description: "Coffee 50% | Milk 50%",
    price: "$8.50",
    img: coffeeMenu3,
  },
  {
    id: 4,
    title: "Expresso",
    description: "Coffee 50% | Milk 50%",
    price: "$8.50",
    img: coffeeMenu4,
  },
];

const ourDifferences = [
  {
    id: 1,
    img: beans,
    title: "Supreme Beans",
    paragraph: "Beans that provides great taste",
  },
  {
    id: 2,
    img: badge,
    title: "High Quality",
    paragraph: "We provide the highest quality",
  },
  {
    id: 3,
    img: cup,
    title: "Extraordinary ",
    paragraph: "Coffee like you have never tasted",
  },
  {
    id: 4,
    img: price,
    title: "Affordable Price",
    paragraph: "Our Coffee prices are easy to afford",
  },
];

const Global = createGlobalStyle`
 *{
   margin: 0;
   padding: 0; 
   box-sizing: border-box;
   font-style: normal;
   color: #707070;
   font: 400 20px 'Playfair Display';
 }

  a {
    text-decoration: none;
  }
`;

const BackgroundPreview = styled.div`
  background-image: url(${img});
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;

  .landing {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin: 0 auto;
    padding: 6% 0;
    max-width: 1220px;

    p {
      font: 500 22px "Playfair Display";
      color: #ffffff;
      max-width: 527px;
    }

    h1 {
      font: 400 220px "Clicker Script";
      line-height: 290.58px;
      color: #ffffff;
      max-width: 527px;
    }
  }
`;

const BlockInfo = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1220px;
  height: 650px;
  margin: auto;
  padding: 150px 0;
  gap: 90px;

  .content {
    display: flex;
    flex-direction: column;
    gap: 29px;
  }

  h2 {
    font: 700 54px "Playfair Display";
    color: #603809;
  }

  p {
    font: 400 20px "Playfair Display";
  }
`;

const Menu = styled.div`
  max-width: 1220px;
  margin: auto;
  padding: 5% 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;

  h2 {
    font: 700 54px "Playfair Display";
    color: #603809;
  }

  p {
    font: 400 20px "Playfair Display";
    color: #603809;
  }

  .content {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: row;
    gap: 30px;
    flex-wrap: wrap;

    .item {
      background-color: #fff9f1;
      border: 1px solid #f9c06a;
      max-width: 280px;

      .itemInfo {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
        padding: 14px 0 42px;

        h3 {
          font: 600 22px "Playfair Display";
          color: #603809;
        }

        p {
          font: 400 16px "Playfair Display";
          color: #1e1e1e;
        }

        .price {
          font: 700 18px "Playfair Display";
          color: #603809;
        }
      }
    }
  }
`;

const Button1 = styled.button`
  display: block;
  border: none;
  background: #f9c06a;
  padding: 14px 27px;
  border-radius: 24px;
  color: #1e1e1e;
  max-width: 155px;
  font: 700 16px "Playfair Display";
  cursor: pointer;
  position: absolute;
  margin-top: 460px;
`;

const Button2 = styled.button`
  display: block;
  border: none;
  background: #f9c06a;
  padding: 14px 27px;
  border-radius: 24px;
  color: #1e1e1e;
  max-width: 155px;
  font: 700 16px "Playfair Display";
  cursor: pointer;
  position: absolute;
  margin-top: 270px;
`;

const Button3 = styled.button`
  display: block;
  border: none;
  background: #f9c06a;
  padding: 14px 27px;
  border-radius: 24px;
  color: #1e1e1e;
  max-width: 155px;
  font: 700 16px "Playfair Display";
  cursor: pointer;
  position: absolute;
  margin-top: 110px;
`;

const Button4 = styled.button`
  display: block;
  border: none;
  background: #f9c06a;
  padding: 14px 27px;
  border-radius: 24px;
  color: #1e1e1e;
  max-width: 155px;
  font: 700 16px "Playfair Display";
  cursor: pointer;
  position: absolute;
  margin-top: 620px;
`;

const Differences = styled.div`
  max-width: 1220px;
  margin: auto;
  padding: 5% 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;

  h2 {
    font: 700 54px "Playfair Display";
    color: #603809;
  }

  p {
    font: 400 15px "Playfair Display";
    color: #1e1e1e;
    width: 176px;
  }

  .content {
    display: flex;
    justify-content: center;
    gap: 30px;

    .item {
      background-color: #fff9f1;
      border: 1px solid #f9c06a;
      width: 280px;
      height: 284px;
      padding: 25px;
      text-align: center;

      .itemInfo {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
        padding: 14px 0 42px;
      }
    }
  }
  .downP {
    font: 400 15px "Playfair Display";
    color: #603809;
    width: 800px;
    text-align: center;
  }

  h3 {
    font: 700 30px "Playfair Display";
    color: #603809;
  }
`;

const Morning = styled.div`
  .content {
    background-image: url(${group});
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;

    .mainItem {
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 1220px;
      height: 574px;
      margin: auto;
      padding: 150px 0;
      margin-top: 80px;

      .item1 {
        display: flex;
        flex-direction: column;
        gap: 25px;
        width: 574px;
        h2 {
          font: 700 54px "Playfair Display";
          color: #ffffff;
          width: 580px;
        }
        p {
          font: 400 20px "Playfair Display";
          color: #ffffff;
          width: 500px;
        }
      }

      .item2 {
        margin-top: 70px;
      }
    }
  }
`;

const Feedback = styled.div`
  max-width: 1220px;
  margin: auto;
  padding: 5% 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;

const App = () => {
  return (
    <>
      <Global />

      <BackgroundPreview>
        <Header />
        <div className="landing">
          <p>We’ve got your morning covered with</p>
          <h1>Coffee</h1>
          <p>
            It is best to start your day with a cup of coffee. Discover the best
            flavours coffee you will ever have. We provide the best for our
            customers.
          </p>
          <Button1>Order Now</Button1>
        </div>
      </BackgroundPreview>

      <BlockInfo>
        <div className="content">
          <h2>Discover the best coffee</h2>
          <p>
            Bean Scene is a coffee shop that provides you with quality coffee
            that helps boost your productivity and helps build your mood. Having
            a cup of coffee is good, but having a cup of real coffee is greater.
            There is no doubt that you will enjoy this coffee more than others
            you have ever tasted.
          </p>
          <Button2>Learn More</Button2>
        </div>
        <div>
          <img src={coffee} alt="coffee" />
        </div>
      </BlockInfo>

      <Menu>
        <h2>Enjoy a new blend of coffee style</h2>
        <p>
          Explore all flavours of coffee with us. There is always a new cup
          worth experiencing.
        </p>
        <div className="content">
          {coffies.map((el, index) => (
            <div className="itemFlex">
              <div key={index} className="item">
                <div>
                  <img src={el.img} alt="coffee" />
                </div>
                <div className="itemInfo">
                  <h3>{el.title}</h3>
                  <p>{el.description}</p>
                  <p className="price">{el.price}</p>
                  <Button3>Order Now</Button3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Menu>

      <Differences>
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
        <p className="downP">
          Great ideas start with great coffee, Lets help you achieve that
        </p>
        <h3>Get started today.</h3>
        <Button4>Join Us</Button4>
      </Differences>

      <Morning>
        <div className="content">
          <div className="mainItem">
            <div className="item1">
              <h2>Get a chance to have an Amazing morning</h2>
              <p>
                We are giving you are one time opportunity to experience a
                better life with coffee.
              </p>
              <Button2>Order Now</Button2>
            </div>
            <div className="item2">
              <img src={cup2} alt="coffee"></img>
            </div>
          </div>
        </div>
      </Morning>

      <Feedback>
        <div className="content"></div>
      </Feedback>

      <Footer />
    </>
  );
};

export default App;
