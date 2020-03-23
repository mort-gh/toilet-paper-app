import React from 'react';
import { Typography } from '@material-ui/core';
import Container from '@material-ui/core/Container';

const styles = {
  headerBlock: {
    textAlign: 'center',
    backgroundColor: 'rgb(220, 0, 78)'
  },
  title: {
    color: 'white'
  },
  description: {
    color: 'white',
    marginTop: 30
  }
};

const HrLine = ({ color }) => (
  <hr
    style={{
      color: color,
      backgroundColor: color,
      width: '80%'
    }}
  />
);

const title = ' Сколько нужно туалетной бумаги?';
const description =
  'Простой калькулятор, чтобы посчитать, сколько туалетной бумаги вам нужно, чтобы пережить пандемию';

export const Header = ({ result }) => {
  return (
    <div style={styles.headerBlock}>
      <Container maxWidth='lg'>
        <Typography style={styles.title} variant='h5' gutterBottom>
          {title}
        </Typography>
        <img
          width='120'
          src={require('../../images/toilet_paper.png')}
          alt='Туалетная бумажка'
        />
        <Typography style={styles.description} color='primary'>
          {description}
        </Typography>

        <HrLine color='grey' />

        <Typography style={styles.title} variant='h4' gutterBottom>
          Вы продержитесь {result} дня
        </Typography>

        <Typography style={styles.title} variant='h6' gutterBottom>
          или 80% вашего карантина
        </Typography>
      </Container>
    </div>
  );
};
