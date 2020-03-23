import React from 'react';
import { Typography } from '@material-ui/core';
import Container from '@material-ui/core/Container';

const styles = {
  headerBlock: {
    textAlign: 'center',
    backgroundColor: 'rgb(220, 0, 78)',
    padding: '60px 20px'
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
  'Простой калькулятор, чтобы расчитать, сколько туалетной бумаги вам нужно, чтобы пережить пандемию';

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
          Вы продержитесь {result}{' '}
          {getNumEnding(result, ['день', 'дня', 'дней'])}
        </Typography>

        <Typography style={styles.title} variant='h6' gutterBottom>
          или {percent}% вашего карантина
        </Typography>
      </Container>
    </div>
  );
};
