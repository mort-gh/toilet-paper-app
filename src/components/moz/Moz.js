import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

export const Moz = () => {
  return (
    <>
      <Typography>
        COVID-19 - це нова хвороба, яка може вразити ваші легені та дихальні
        шляхи. Його викликає вірус під назвою коронавірус. Залишайтеся вдома!
      </Typography>
      <br />
      <Typography>
        Скористайтеся посиланнями нижче, щоб отримати корисну інформацію щодо
        засобів захисту, дотримання умов безпеки під час карантину, та стану
        боротьби із COVID-19 наразі в Україні і світі.
      </Typography>
      <br />
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
        <Link target='_blank' color='secondary' href='https://covid19.com.ua/'>
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
  );
};
