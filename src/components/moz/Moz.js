import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { checkUserBrowserLanguage } from '../../checkUserLanguage';
import lang from '../../lang/lang';

export const Moz = () => {
  const location = checkUserBrowserLanguage();

  const links = {
    ua: [
      {
        link:
          'https://moz.gov.ua/article/news/rekomendacii-dlja-gromadjan-schodo-koronavirusu-2019-ncov',
        title: 'Рекомендації для громадян щодо коронавірусу 2019-nCoV',
        source: 'Міністерство охорони здоров’я України'
      },
      {
        link:
          'https://phc.org.ua/news/scho-varto-znati-pro-samoizolyaciyu-pid-chas-covid-19',
        title: 'Що варто знати про самоізоляцію під час COVID-19',
        source: 'Центр громадського здоров’я Міністерства охорони здоров’я'
      },
      {
        link: 'https://covid19.com.ua/',
        title: 'Що треба знати про новий коронавірус',
        source: 'Кабінет Міністрів України'
      },
      {
        link:
          'https://who.maps.arcgis.com/apps/opsdashboard/index.html#/ead3c6475654481ca51c248d52ab9c61',
        title: 'COVID-19 situation in the WHO European Region',
        source:
          "Всесвітня організація охорони здоров'я (World Health Organization (WHO))"
      }
    ],
    ru: [
      {
        link:
          'https://www.who.int/ru/emergencies/diseases/novel-coronavirus-2019/advice-for-public',
        title: 'Рекомендации ВОЗ (COVID-19)',
        source:
          'Всемирная организация здравохранения (World Health Organization (WHO))'
      },
      {
        link:
          'https://who.maps.arcgis.com/apps/opsdashboard/index.html#/ead3c6475654481ca51c248d52ab9c61',
        title: 'COVID-19 situation in the WHO European Region',
        source:
          'Всемирная организация здравохранения (World Health Organization (WHO))'
      }
    ],
    en: [
      {
        link:
          'https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public',
        title: 'COVID-19 disease advice for the public',
        source: 'World Health Organization (WHO)'
      },
      {
        link:
          'https://who.maps.arcgis.com/apps/opsdashboard/index.html#/ead3c6475654481ca51c248d52ab9c61',
        title: 'COVID-19 situation in the WHO European Region',
        source: 'World Health Organization (WHO)'
      }
    ]
  };

  const healthLink = (link, title, source) => (
    <>
      <Link target='_blank' color='secondary' href={link}>
        {title}
      </Link>
      &nbsp;- {source}
      <br />
    </>
  );

  return (
    <>
      <Typography>{lang[location].moz1}</Typography>
      <br />
      <Typography>{lang[location].moz2}</Typography>
      <br />

      <Typography>
        {location === 0 &&
          links.ua.map(el => healthLink(el.link, el.title, el.source))}

        {location === 1 &&
          links.ru.map(el => healthLink(el.link, el.title, el.source))}

        {location === 2 &&
          links.en.map(el => healthLink(el.link, el.title, el.source))}
      </Typography>
    </>
  );
};
