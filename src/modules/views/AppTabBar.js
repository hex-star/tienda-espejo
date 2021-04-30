import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "../components/AppBar";
import Toolbar, { styles as toolbarStyles } from "../components/Toolbar";
import { Link } from "react-router-dom";
import { Tab, Tabs } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { IconButton } from '@material-ui/core';
import {AccountCircle} from '@material-ui/icons';
import {ShoppingBasket} from '@material-ui/icons';
import FavoriteIcon from '@material-ui/icons/Favorite';

const styles = (theme) => ({
  title: {
    fontSize: 24,
    color: theme.palette.common.white,
  },
  placeholder: toolbarStyles(theme).root,
  toolbar: {
    justifyContent: "space-between",
  },
  left: {
    flex: 1,
  },
  leftLinkActive: {
    color: theme.palette.common.white,
  },
  right: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-end",
  },
  rightLink: {
    fontSize: 16,
    color: theme.palette.common.white,
    marginLeft: theme.spacing(1),
  },
  linkSecondary: {
    color: theme.palette.secondary.main,
  },
});

function AppTabBar(props) {
  const { classes } = props;

  return (
    <div>
      <AppBar position="static" >
        <div >
          <Tabs className={classes.toolbar} indicatorColor="primary"
                centered>
            <Link to={"/"} className={classes.rightLink}>
              <Tab label="Nosotros" ></Tab>
            </Link>
            <Link to={"/categories"} className={classes.rightLink}>
              <Tab label="Nuestros productos" ></Tab>
            </Link>
            <Link to={"/terms"} className={classes.rightLink}>
              <Tab label="Contacto" ></Tab>
            </Link>
          </Tabs>
        </div>
      </AppBar>
    </div>
  );
}

AppTabBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppTabBar);
