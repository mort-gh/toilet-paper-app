import React from 'react';
import Typography from '@material-ui/core/Typography';
import { checkUserBrowserLanguage } from '../../checkUserLanguage';
import lang from '../../lang/lang';

const buttonDonation = require('../../images/donation_button.png');

const styles = {
  text: {
    textAlign: 'center'
  },
  form: {
    display: 'flex',
    justifyContent: 'center'
  },
  button: {
    backgroundImage: `url(${buttonDonation})`,
    border: 'none',
    width: 100,
    height: 100,
    cursor: 'pointer'
  }
};

export const Donation = () => {
  const location = checkUserBrowserLanguage();

  return (
    <>
      <Typography style={styles.text}>{lang[location].donation1}</Typography>

      <br />
      <Typography>
        <form
          style={styles.form}
          id='payment'
          name='payment'
          method='post'
          action='https://sci.interkassa.com/'
          enctype='utf-8'
          target='_blank'
        >
          <input type='hidden' name='s' value='4p8MIgvPWv' />
          <input type='submit' value='' style={styles.button} />
        </form>
      </Typography>
      <br />
      <Typography style={styles.text}>{lang[location].donation2}</Typography>
    </>
  );
};
