import React from 'react';
import { Typography } from '@material-ui/core';
import { getNumEnding } from '../../changeDaysName';
import Container from '@material-ui/core/Container';
import { Social } from '../social/Social';
import { styles } from './Header.module';

const title = 'Скільки потрібно туалетного паперу на час карантину?';
const description =
  'Онлайн калькулятор, щоб розрахувати стратегічні запаси туалетного паперу на період пандемії';

export const Header = ({ result, percent }) => {
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
        <Typography style={styles.titleResult} variant='h5' gutterBottom>
          Ви протримаєтесь
          {window.innerWidth < 500 && <br />}
          <span style={styles.result}>{result}</span>
          {getNumEnding(result, ['день', 'дні', 'днів'])}
        </Typography>
        <Typography style={styles.title} variant='h6' gutterBottom>
          або {percent}% карантину
        </Typography>
        <Typography>
          <Social />
        </Typography>
      </Container>
    </div>
  );
};
