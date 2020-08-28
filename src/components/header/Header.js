import React from 'react';
import { Typography } from '@material-ui/core';
import { getNumEnding } from '../../utils';
import Container from '@material-ui/core/Container';
import { Social } from '../social/Social';
import { styles } from './Header.module';
import { checkUserBrowserLanguage } from '../../utils';
import lang from '../../lang/lang';

export const Header = ({ result, percent }) => {
  const location = checkUserBrowserLanguage();

  return (
    <div style={styles.headerBlock}>
      <Container maxWidth='lg'>
        <Typography style={styles.title} variant='h5' gutterBottom>
          {lang[location].header1}
        </Typography>
        <img
          width='120'
          src={require('../../images/toilet_paper.png')}
          alt='Toilet paper'
        />
        <Typography style={styles.description} color='primary'>
          {lang[location].header2}
        </Typography>
        <hr style={styles.hr} />
        <Typography style={styles.titleResult} variant='h5' gutterBottom>
          {lang[location].header3}
          {window.innerWidth < 500 && <br />}
          <span style={styles.result}>{result}</span>
          {getNumEnding(result, [
            lang[location].day1,
            lang[location].day2,
            lang[location].day3,
          ])}
        </Typography>
        <Typography style={styles.title} variant='h6' gutterBottom>
          {lang[location].header4} {percent}% {lang[location].header5}
        </Typography>
        <Typography>
          <Social />
        </Typography>
      </Container>
    </div>
  );
};
