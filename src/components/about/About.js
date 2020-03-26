import React from 'react';
import Typography from '@material-ui/core/Typography';
import { checkUserBrowserLanguage } from '../../checkUserLanguage';
import lang from '../../lang/lang';

export const About = () => {
  const location = checkUserBrowserLanguage();

  return (
    <>
      <Typography>{lang[location].about1}</Typography>
      <br />
      <Typography>
        Сайт создан по технологии SPA (single page application) с использованием
        библиотек React, Redux и Material-UI. На текущий момент протестирован на
        большинстве используемых устройств и является кросс-платформенным.
      </Typography>
      <br />
      <Typography>
        Имейте ввиду, что проект является мультиязычным и поддерживет
        украинский, английский и русский языки. Отображаемый язык на сайте
        зависит от настроек вашего браузера.
      </Typography>
    </>
  );
};
