import React from 'react';
import Typography from '@material-ui/core/Typography';
import { checkUserBrowserLanguage } from '../../utils';
import lang from '../../lang/lang';

export const About = () => {
  const location = checkUserBrowserLanguage();

  return (
    <>
      <Typography>{lang[location].about1}</Typography>
      <br />
      <Typography>{lang[location].about2}</Typography>
      <br />
      <Typography>{lang[location].about3}</Typography>
    </>
  );
};
