import React from 'react';
import { Typography } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import { styles } from './Header.module';
// import { Twitter, Facebook, Telegram, Whatsapp } from 'react-social-sharing';

const title = 'Скільки потрібно туалетного паперу на час карантину?';
const description =
  'Онлайн калькулятор, щоб розрахувати стратегічні запаси туалетного паперу на період пандемії';

export const Header = ({ result, percent }) => {
  function getNumEnding(iNumber, aEndings) {
    var sEnding, i;
    iNumber = iNumber % 100;
    if (iNumber >= 11 && iNumber <= 19) {
      sEnding = aEndings[2];
    } else {
      i = iNumber % 10;
      switch (i) {
        case 1:
          sEnding = aEndings[0];
          break;
        case 2:
        case 3:
        case 4:
          sEnding = aEndings[1];
          break;
        default:
          sEnding = aEndings[2];
      }
    }
    return sEnding;
  }

  // const BASE_URL = 'https://toiletpaper.tech/';

  return (
    <div style={styles.headerBlock}>
      <Container maxWidth='lg'>
        <Typography style={styles.title} variant='h5' gutterBottom>
          {title}
        </Typography>
        <img
          width='120'
          src={require('../../images/toilet_paper.png')}
          alt='Туалетній папір'
        />
        <Typography style={styles.description} color='primary'>
          {description}
        </Typography>

        <hr style={styles.hr} />

        <Typography style={styles.title} variant='h5' gutterBottom>
          Ви протримаєтесь
          {window.innerWidth < 500 && <br />}
          <span style={styles.result}>{result}</span>
          {getNumEnding(result, ['день', 'дні', 'днів'])}
        </Typography>

        <Typography style={styles.title} variant='h6' gutterBottom>
          або {percent}% карантину
        </Typography>
      </Container>

      {/* <Facebook link={BASE_URL} />
      <Twitter link={BASE_URL} />
      <Telegram link={BASE_URL} />
      <Whatsapp link={BASE_URL} /> */}
    </div>
  );
};
