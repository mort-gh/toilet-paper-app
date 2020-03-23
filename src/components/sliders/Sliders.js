import React from 'react';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Slider from '@material-ui/core/Slider';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles({
  root: {
    padding: 30,
    width: '100%'
  }
});

const PrettoSlider = withStyles({
  root: {
    color: 'rgb(220, 0, 78)',
    height: 8
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit'
    }
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)'
  },
  track: {
    height: 8,
    borderRadius: 4
  },
  rail: {
    height: 8,
    borderRadius: 4
  }
})(Slider);

export const Sliders = props => {
  const classes = useStyles();

  const firstValues = {
    quantityRolls: [
      'Количество рулонов у тебя',
      1,
      100,
      1,
      props.quantityRolls,
      props.setQuantityRolls
    ],
    quantityToilets: [
      'Посещений туалета в день',
      1,
      20,
      2,
      props.quantityToilets,
      props.setQuantityToilets
    ]
  };

  const secondValues = {
    averageWipes: [
      'Среднее количество бумажек за одно посещение',
      1,
      15,
      2,
      props.averageWipes,
      props.setAverageWipes
    ],
    sheetsWipe: [
      'Бумажка состоит из количества салфеток',
      1,
      10,
      2,
      props.sheetsWipe,
      props.setSheetsWipe
    ],
    sheetsRoll: [
      'Салфеток в одном рулоне',
      120,
      500,
      140,
      props.sheetsRoll,
      props.setSheetsRoll
    ],
    peopleHome: [
      'Людей в семье',
      1,
      10,
      1,
      props.peopleHome,
      props.setPeopleHome
    ],
    daysQuarantine: [
      'Дней карантина',
      1,
      90,
      20,
      props.daysQuarantine,
      props.setDaysQuarantine
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
    <>
      <div className={classes.root}>{createFirstSliders}</div>
      <Button color='secondary'>
        Здесь можно настроить дополнительные параметры
      </Button>

      <Divider />
      <div className={classes.root}>{createSecondSliders}</div>
    </>
  );
};
