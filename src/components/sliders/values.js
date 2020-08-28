import { checkUserBrowserLanguage } from '../../utils';
import lang from '../../lang/lang';
import { defaultValues } from './defaultValues';

const location = checkUserBrowserLanguage();

export const firstValues = (
  quantityRolls,
  setQuantityRolls,
  quantityToilets,
  setQuantityToilets
) => ({
  quantityRolls: [
    lang[location].sliders1,
    1,
    100,
    defaultValues.quantityRolls,
    quantityRolls,
    setQuantityRolls,
  ],
  quantityToilets: [
    lang[location].sliders2,
    1,
    20,
    defaultValues.quantityToilets,
    quantityToilets,
    setQuantityToilets,
  ],
});

export const secondValues = (
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
) => ({
  averageWipes: [
    lang[location].sliders3,
    1,
    15,
    defaultValues.averageWipes,
    averageWipes,
    setAverageWipes,
  ],
  sheetsWipe: [
    lang[location].sliders4,
    1,
    10,
    defaultValues.sheetsWipe,
    sheetsWipe,
    setSheetsWipe,
  ],
  sheetsRoll: [
    lang[location].sliders5,
    120,
    500,
    defaultValues.sheetsRoll,
    sheetsRoll,
    setSheetsRoll,
  ],
  peopleHome: [
    lang[location].sliders6,
    1,
    10,
    defaultValues.peopleHome,
    peopleHome,
    setPeopleHome,
  ],
  daysQuarantine: [
    lang[location].sliders7,
    1,
    90,
    defaultValues.daysQuarantine,
    daysQuarantine,
    setDaysQuarantine,
  ],
});
