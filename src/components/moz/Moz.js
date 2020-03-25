import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { checkUserBrowserLanguage } from '../../checkUserLanguage';
import lang from '../../lang/lang';

export const Moz = () => {
  const location = checkUserBrowserLanguage();

  return (
    <>
      <Typography>{lang[location].moz1}</Typography>
      <br />
      <Typography>{lang[location].moz2}</Typography>
      <br />
      {lang[location] === 0 && (
        <>
          <Typography>
            <Link
              target='_blank'
              color='secondary'
              href='https://moz.gov.ua/article/news/rekomendacii-dlja-gromadjan-schodo-koronavirusu-2019-ncov'
            >
              Рекомендації для громадян щодо коронавірусу 2019-nCoV
            </Link>
            &nbsp;- Міністерство охорони здоров’я України
            <br />
            <Link
              target='_blank'
              color='secondary'
              href='https://phc.org.ua/news/scho-varto-znati-pro-samoizolyaciyu-pid-chas-covid-19'
            >
              Що варто знати про самоізоляцію під час COVID-19
            </Link>
            &nbsp;- Центр громадського здоров’я Міністерства охорони здоров’я
            України
            <br />
            <Link
              target='_blank'
              color='secondary'
              href='https://covid19.com.ua/'
            >
              Що треба знати про новий коронавірус
            </Link>
            &nbsp;- Кабінет Міністрів України
            <br />
            <Link
              target='_blank'
              color='secondary'
              href='https://who.maps.arcgis.com/apps/opsdashboard/index.html#/ead3c6475654481ca51c248d52ab9c61'
            >
              COVID-19 situation in the WHO European Region
            </Link>
            &nbsp;- Всесвітня організація охорони здоров'я (World Health
            Organization (WHO))
            <br />
          </Typography>
        </>
      )}
    </>
  );
};
