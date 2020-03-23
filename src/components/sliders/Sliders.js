import React, { useState, useEffect } from 'react';
import { useStyles, PrettoSlider } from './Slider.module';
import { Header } from '../header/Header';
import shortId from 'shortid';

import { defaultValues } from './defaultValues';

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

  async function getTotalResult(a, b, c, d, e, f) {
    await setResult(Math.round((a * e) / (d * c * b * f)));
    await changeDocumentTitle(result);
  }

  const getTotalPercent = (result, g) =>
    setPercent(Math.round((result / g) * 100));

  function changeDocumentTitle(result) {
    let title = `Моей туалетной бумаги хватит ${result} на ${getNumEnding(
      result,
      ['день', 'дня', 'дней']
    )} карантина`;
    document.title = title;
  }

  function getNumEnding(iNumber, aEndings) {
    var sEnding, i;
    iNumber = iNumber % 100;
    if (iNumber >= 11 && iNumber <= 19) {
      sEnding = aEndings[2];
    } else {
      i = iNumber % 10;
      switch (i) {
        case 1:
          sEnding = aEndings[0];
          break;
        case 2:
        case 3:
        case 4:
          sEnding = aEndings[1];
          break;
        default:
          sEnding = aEndings[2];
      }
    }
    return sEnding;
  }

  const firstValues = {
    quantityRolls: [
      'Сколько рулонов успел купить',
      1,
      100,
      defaultValues.quantityRolls,
      quantityRolls,
      setQuantityRolls
    ],
    quantityToilets: [
      'Посещений туалета в день',
      1,
      20,
      defaultValues.quantityToilets,
      quantityToilets,
      setQuantityToilets
    ]
  };

  const secondValues = {
    averageWipes: [
      'Сколько бумажек отрываешь за одно посещение',
      1,
      15,
      defaultValues.averageWipes,
      averageWipes,
      setAverageWipes
    ],
    sheetsWipe: [
      'Бумажка состоит из количества салфеток',
      1,
      10,
      defaultValues.sheetsWipe,
      sheetsWipe,
      setSheetsWipe
    ],
    sheetsRoll: [
      'Салфеток в одном рулоне',
      120,
      500,
      defaultValues.sheetsRoll,
      sheetsRoll,
      setSheetsRoll
    ],
    peopleHome: [
      'Людей в семье',
      1,
      10,
      defaultValues.peopleHome,
      peopleHome,
      setPeopleHome
    ],
    daysQuarantine: [
      'Дней карантина',
      1,
      90,
      defaultValues.daysQuarantine,
      daysQuarantine,
      setDaysQuarantine
    ]
  };

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

  const createFirstSliders = [
    newSliderTemplate(...firstValues.quantityRolls),
    newSliderTemplate(...firstValues.quantityToilets)
  ];

  const createSecondSliders = [
    newSliderTemplate(...secondValues.averageWipes),
    newSliderTemplate(...secondValues.sheetsWipe),
    newSliderTemplate(...secondValues.sheetsRoll),
    newSliderTemplate(...secondValues.peopleHome),
    newSliderTemplate(...secondValues.daysQuarantine)
  ];

  return (
    <Container maxWidth='lg'>
      <Header result={result} percent={percent} />
      <div className={classes.root}>{createFirstSliders}</div>
      <Button color='secondary'>
        Здесь можно настроить дополнительные параметры
      </Button>

      <Divider />
      <div className={classes.root}>{createSecondSliders}</div>
    </Container>
  );
};
