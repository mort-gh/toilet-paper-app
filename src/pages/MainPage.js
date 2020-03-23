import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Sliders } from '../components/sliders/Sliders';
import { Header } from '../components/header/Header';

import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import SettingsIcon from '@material-ui/icons/Settings';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

let drawerWidth = window.innerWidth > 600 ? '50%' : '80%';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth})`,
      marginLeft: drawerWidth
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  },
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}));

const defaultSlidersValue = {
  quantityRolls: 1,
  quantityToilets: 2,
  averageWipes: 2,
  sheetsWipe: 2,
  sheetsRoll: 140,
  peopleHome: 1,
  daysQuarantine: 20
};

export const MainPage = ({ container }) => {
  const [result, setResult] = useState(0);
  const [percent, setPercent] = useState(0);
  const [quantityRolls, setQuantityRolls] = useState(0);
  const [quantityToilets, setQuantityToilets] = useState(0);
  const [averageWipes, setAverageWipes] = useState(0);
  const [sheetsWipe, setSheetsWipe] = useState(0);
  const [sheetsRoll, setSheetsRoll] = useState(0);
  const [peopleHome, setPeopleHome] = useState(0);
  const [daysQuarantine, setDaysQuarantine] = useState(0);

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
    result
  ]);

  const initialState = {
    quantityRolls,
    setQuantityRolls,
    quantityToilets,
    setQuantityToilets,
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
  };

  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const getTotalResult = async (a, b, c, d, e, f) => {
    await setResult(Math.round((a * e) / (d * c * b * f)));
    await changeDocumentTitle(result);
  };

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

  const appBar = (
    <AppBar position='fixed' color='secondary' className={classes.appBar}>
      <Toolbar>
        <IconButton
          color='inherit'
          aria-label='open drawer'
          edge='start'
          onClick={handleDrawerToggle}
          className={classes.menuButton}
        >
          <SettingsIcon />
        </IconButton>
        <ArrowBackIcon />
        <Typography variant='h6' noWrap>
          &nbsp; Параметры
        </Typography>
      </Toolbar>
    </AppBar>
  );

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Sliders {...initialState} defaultValues={defaultSlidersValue} />
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      {window.innerWidth < 600 && appBar}
      <nav className={classes.drawer} aria-label='mailbox folders'>
        <Hidden smUp implementation='css'>
          <Drawer
            container={container}
            variant='temporary'
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation='css'>
          <Drawer
            classes={{
              paper: classes.drawerPaper
            }}
            variant='permanent'
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Header result={result} percent={percent} />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
          dolor purus non enim praesent elementum facilisis leo vel. Risus at
          ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
          quisque non tellus. Convallis convallis tellus id interdum velit
          laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed
          adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
          integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
          eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
          quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
          vivamus at augue. At augue eget arcu dictum varius duis at consectetur
          lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien
          faucibus et molestie ac.
        </Typography>
      </main>
    </div>
  );
};

MainPage.propTypes = {
  container: PropTypes.any
};
