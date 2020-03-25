import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { checkUserBrowserLanguage } from '../../checkUserLanguage';
import lang from '../../lang/lang';

export const About = () => {
  const location = checkUserBrowserLanguage();

  return (
    <>
      <Typography>{lang[location].about1}</Typography>
      <br />
      <Typography>{lang[location].about2}</Typography>
      <br />
      <Typography>
        <Link color='secondary' href='https://www.facebook.com/gnatyuk.roman'>
          Facebook
        </Link>
        &nbsp;|&nbsp;
        <Link color='secondary' href='https://twitter.com/roma_hnatiuk'>
          Twitter
        </Link>
      </Typography>
    </>
  );
};
