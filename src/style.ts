import styled, { createGlobalStyle } from 'styled-components';
import img from './assets/coffeeimage.svg';
import group from './assets/group.svg';
import imgFooter from './assets/imgFooter.svg';
import { motion } from 'framer-motion';

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

const Wrapper = styled(motion.div)`
  max-width: 1220px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1% 0;
  margin: auto;

  h1 {
    font: 400 35px 'Clicker Script';
    color: #ffffff;
  }

  .btn_signIn {
    color: #ffffff;
    font: 400 20px 'Playfair Display';
    margin-top: 15px;
  }

  .btn_active {
    background: #f9c06a;
    padding: 14px 27px;
    border-radius: 24px;
    color: #1e1e1e;
  }
  .container {
    display: flex;
    gap: 35px;
  }
  .navigation {
    display: flex;
    gap: 60px;
    p {
      color: #ffffff;
    }
  }
  ul {
    display: flex;
    gap: 60px;
  }
`;

const BackgroundPreview = styled(motion.div)`
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
      font: 500 22px 'Playfair Display';
      color: #ffffff;
      max-width: 527px;
    }

    h1 {
      font: 400 220px 'Clicker Script';
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
    font: 700 54px 'Playfair Display';
    color: #603809;
  }

  p {
    font: 400 20px 'Playfair Display';
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
    font: 700 54px 'Playfair Display';
    color: #603809;
  }

  p {
    font: 400 20px 'Playfair Display';
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
      transition: transform 0.3s ease;
      &:hover {
        background-color: #ffeed8;
        transform: scale(105%);
      }

      .itemInfo {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
        padding: 14px 0 42px;

        h3 {
          font: 600 22px 'Playfair Display';
          color: #603809;
        }

        p {
          font: 400 16px 'Playfair Display';
          color: #1e1e1e;
        }

        .price {
          font: 700 18px 'Playfair Display';
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
  font: 700 16px 'Playfair Display';
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
  font: 700 16px 'Playfair Display';
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
  font: 700 16px 'Playfair Display';
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
  font: 700 16px 'Playfair Display';
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
    font: 700 54px 'Playfair Display';
    color: #603809;
  }

  p {
    font: 400 15px 'Playfair Display';
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
      transition: transform 0.3s ease;
      &:hover {
        background-color: #ffeed8;
        transform: scale(105%);
      }

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
    font: 400 15px 'Playfair Display';
    color: #603809;
    width: 800px;
    text-align: center;
  }

  h3 {
    font: 700 30px 'Playfair Display';
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
          font: 700 54px 'Playfair Display';
          color: #ffffff;
          width: 580px;
        }
        p {
          font: 400 20px 'Playfair Display';
          color: #ffffff;
          width: 500px;
        }
      }

      .item2 {
        margin: 800px;
        position: absolute;
      }

      .item3 {
        margin: 260px;
      }
    }
  }
`;

const Feedback = styled.div`
  max-width: 1220px;
  margin: auto;
  padding: 5% 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  height: 850px;

  .startItem {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    margin-bottom: 34px;
    h2 {
      font: 700 54px 'Playfair Display';
      color: #603809;
      width: 770px;
    }

    p {
      font: 400 20px 'Playfair Display';
      color: #707070;
      width: 500px;
    }
  }
  .mainText {
    border: 1px solid #f9c06a6b;
    background-color: #fff9f1;
    width: 980px;
    height: 524px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 120px 90px;
    position: relative;

    .person {
      position: absolute;
      top: 30px;
      left: 30px;
    }

    .vectorOne {
      width: 82px;
      height: 82px;
      border-radius: 16px;
      background-color: #f9c06a;
      position: absolute;
      top: 220px;
      left: -40px;
      padding: 27px 33px;
    }

    p {
      font: 600 18px 'Playfair Display';
      line-height: 36px;
      text-align: center;
    }

    h3 {
      font: 700 32px 'Playfair Display';
      color: #603809;
      margin-top: 20px;
    }

    .profession {
      font: 400 20px 'Playfair Display';
      color: #707070;
      margin-top: 10px;
    }

    .man {
      position: absolute;
      top: 460px;
    }

    .vectorTwo {
      width: 82px;
      height: 82px;
      border-radius: 16px;
      background-color: #f9c06a;
      position: absolute;
      top: 220px;
      right: -40px;
      padding: 27px 33px;
    }
  }
`;

const EndContent = styled.div`
  img {
    width: 100%;
    position: relative;
    bottom: -5px;
    margin-top: 50px;
  }
`;

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
        font: 400 54px 'Clicker Script';
        color: #ffff;
      }
      p {
        width: 400px;
        line-height: 25px;
        color: #ffff;
      }
      .social {
        display: flex;
        gap: 20px;
      }
    }

    .about,
    .company,
    .contactUs {
      display: flex;
      flex-direction: column;
      gap: 30px;
      h3 {
        font: 700 26px 'Playfair Display';
        color: #ffff;
      }
      p {
        font: 400 16px 'Playfair Display';
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

export {
  Global,
  Wrapper,
  BackgroundPreview,
  Menu,
  BlockInfo,
  Button1,
  Button2,
  Button3,
  Button4,
  Differences,
  Morning,
  Feedback,
  EndContent,
  FooterContent,
};
