import React, { useState, useEffect } from 'react';
import { useStyles, PrettoSlider } from './Slider.module';

import { Header } from '../header/Header';
import { About } from '../about/About';
import { Donation } from '../donation/Donation';
import { Moz } from '../moz/Moz';

import { getNumEnding } from '../../changeDaysName';
import { firstValues, secondValues } from './values';
import { checkUserBrowserLanguage } from '../../checkUserLanguage';
import lang from '../../lang/lang';
import shortId from 'shortid';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

export const Sliders = () => {
  const [result, setResult] = useState(0);
  const [percent, setPercent] = useState(0);
  const [quantityRolls, setQuantityRolls] = useState(0);
  const [quantityToilets, setQuantityToilets] = useState(0);
  const [averageWipes, setAverageWipes] = useState(0);
  const [sheetsWipe, setSheetsWipe] = useState(0);
  const [sheetsRoll, setSheetsRoll] = useState(0);
  const [peopleHome, setPeopleHome] = useState(0);
  const [daysQuarantine, setDaysQuarantine] = useState(0);

  const classes = useStyles();
  const location = checkUserBrowserLanguage();

  useEffect(() => {
    getTotalResult(
      quantityRolls,
      quantityToilets,
      averageWipes,
      sheetsWipe,
      sheetsRoll,
      peopleHome
    );
    getTotalPercent(result, daysQuarantine);
    getUserBrowserLanguage();
  }, [
    quantityRolls,
    quantityToilets,
    averageWipes,
    sheetsWipe,
    sheetsRoll,
    peopleHome,
    daysQuarantine,
    result,
    getTotalResult
  ]);

  function getUserBrowserLanguage() {
    const userLang = navigator.language || navigator.userLanguage;
    console.log(userLang);
  }

  async function getTotalResult(a, b, c, d, e, f) {
    await setResult(Math.round((a * e) / (d * c * b * f)));
    await changeDocumentTitle(result);
  }

  const getTotalPercent = (result, g) =>
    setPercent(Math.round((result / g) * 100));

  function changeDocumentTitle(result) {
    let title =
      lang[location].title1 +
      result +
      getNumEnding(result, [
        lang[location].day1,
        lang[location].day2,
        lang[location].day3
      ]) +
      lang[location].header5;

    document.title = title;
  }

  const newSliderTemplate = (
    title,
    min,
    max,
    defValue,
    stateValue,
    stateFn
  ) => {
    return (
      <>
        <Typography id='discrete-slider' gutterBottom>
          {title}
          <Button color='secondary'>{stateValue}</Button>
        </Typography>

        <PrettoSlider
          defaultValue={defValue}
          getAriaValueText={valuetext => stateFn(valuetext)}
          aria-labelledby='discrete-slider'
          aria-label='pretto slider'
          valueLabelDisplay='auto'
          step={1}
          min={min}
          max={max}
          color='secondary'
          key={shortId}
        />
      </>
    );
  };

  const firstBlock = firstValues(
    quantityRolls,
    setQuantityRolls,
    quantityToilets,
    setQuantityToilets
  );
  const secondBlock = secondValues(
    averageWipes,
    setAverageWipes,
    sheetsWipe,
    setSheetsWipe,
    sheetsRoll,
    setSheetsRoll,
    peopleHome,
    setPeopleHome,
    daysQuarantine,
    setDaysQuarantine
  );

  const createFirstSliders = [
    newSliderTemplate(...firstBlock.quantityRolls),
    newSliderTemplate(...firstBlock.quantityToilets)
  ];

  const createSecondSliders = [
    newSliderTemplate(...secondBlock.averageWipes),
    newSliderTemplate(...secondBlock.sheetsWipe),
    newSliderTemplate(...secondBlock.sheetsRoll),
    newSliderTemplate(...secondBlock.peopleHome),
    newSliderTemplate(...secondBlock.daysQuarantine)
  ];

  const headingButtonDivider = text => (
    <>
      <div className={classes.buttonBlock}>
        <Button color='secondary'>{text}</Button>
      </div>

      <Divider />
    </>
  );

  return (
    <Container maxWidth='lg'>
      <Header result={result} percent={percent} />
      <div className={classes.root}>{createFirstSliders}</div>
      {headingButtonDivider(lang[location].heading1)}
      <div className={classes.root}>{createSecondSliders}</div>
      {headingButtonDivider(lang[location].heading2)}
      <div className={classes.root}>
        <About />
      </div>
      {headingButtonDivider(lang[location].heading3)}
      <div className={classes.root}>
        <Donation />
      </div>
      {headingButtonDivider(lang[location].heading4)}
      <div className={classes.root}>
        <Moz />
      </div>
    </Container>
  );
};
