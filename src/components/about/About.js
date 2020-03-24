import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

export const About = () => {
  return (
    <>
      <Typography>
        Цей ресурс розроблений, щоб ви мали змогу розрахувати свої стратегічні
        запаси туалетного паперу, на період карантину. Верхній блок сторінки
        відображає поточний результат. Скористайтеся слайдерами нижче, щоб
        налаштувати свої параметри. Результат є приблизними і залежить від
        особливостей кожного виробника паперу. Результат не враховує різні
        параметри для окремого члена сім'ї.
      </Typography>
      <br />
      <Typography>
        Автор цього шедвру - я, Рома Гнатюк. Якщо є запитання чи пропозиції -
        напишіть мені у соціальних мережах за посиланнями нижче.
      </Typography>
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
