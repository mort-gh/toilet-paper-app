import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { checkUserBrowserLanguage } from '../../checkUserLanguage';
import lang from '../../lang/lang';

export const Ps = () => {
  const location = checkUserBrowserLanguage();

  return (
    <>
      <Typography>
        {lang[location].ps1}
        <Link
          color='secondary'
          href='https://howmuchtoiletpaper.com/'
          target='_blank'
          rel='noopener noreferrer'
        >
          How much toilet paper?
        </Link>
        {lang[location].ps2}
      </Typography>
      <br />
      <Typography>{lang[location].ps3}</Typography>
      <br />
      <Typography style={{ display: 'flex', flexWrap: 'wrap' }}>
        <Link color='secondary' href='https://www.facebook.com/gnatyuk.roman'>
          Facebook
        </Link>
        &nbsp;|&nbsp;
        <Link color='secondary' href='https://twitter.com/roma_hnatiuk'>
          Twitter
        </Link>
        &nbsp;|&nbsp;
        <Link color='secondary' href='mailto:gnatyuk.info@gmail.com'>
          gnatyuk.info@gmail.com
        </Link>
      </Typography>
      <br />
    </>
  );
};
