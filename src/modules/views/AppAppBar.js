import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "../components/AppBar";
import { Tab, Tabs } from "@material-ui/core";
import Toolbar, { styles as toolbarStyles } from "../components/Toolbar";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import { ShoppingBasket } from "@material-ui/icons";
import Popover from '@material-ui/core/Popover';
import Button from '@material-ui/core/Button';
import StyledBadge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import App from "../../Home";

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


function getLoginButton(classes,email) {

  if (email==='' || email===undefined) {
    return(
      <Link style={{textDecoration: 'none'}} to={"/signin"}>
      <IconButton>
        <AccountCircle color="secondary" />
        <Typography
          color="inherit"
          variant="h8"
          underline="none"
          className={classes.rightLink}
        >
         {"Sign In"}
        
        </Typography>
      </IconButton>
    </Link>
    )} else {
      return(
      <IconButton>
        <AccountCircle color="secondary" />
        <Typography
          color="inherit"
          variant="h8"
          underline="none"
          className={classes.rightLink}
        >
        
         {email.split('@')[0]}
        
        </Typography>
      </IconButton>
    )}
  }



function AppAppBar(props) {
  const { classes, cartItemsCount, email } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <AppBar /*color="transparent"*/ position="fixed">
        <Toolbar className={classes.toolbar}>
          <Link style={{textDecoration: 'none'}} to={"/"}>
            <IconButton>
              <img style={{ width: 50, flex: 1 }} src="./Kucci.png" action />
            </IconButton>
          </Link>
          <div className={classes.left} />
          <Link style={{textDecoration: 'none'}} to={"/"}>
            <Typography
              variant="h1"
              underline="none"
              color="inherit"
              className={classes.title}
            >
              {"Kucci"}
            </Typography>
          </Link>
          <div className={classes.right}>
          {getLoginButton(classes,email)}
            <Link style={{textDecoration: 'none'}} to={"/basket"}>
              <IconButton aria-label="cart">
              <StyledBadge badgeContent={cartItemsCount} /*Jugar con props*/ color="secondary">
                <ShoppingCartIcon color="secondary" />
                </StyledBadge>
                <Typography
                  color="inherit"
                  variant="h8"
                  underline="none"
                  className={classes.rightLink}
                >
                  {"Carrito"}
                </Typography>
                
              </IconButton>
            </Link>
          </div>
        </Toolbar>
          <Tabs indicatorColor="primary" position="fixed"
                  centered >
              <Link style={{textDecoration: 'none'}} to={"/"} className={classes.rightLink}>
                <Tab label="Nosotros" ></Tab>
              </Link>
              <Link style={{textDecoration: 'none'}} to={"/categories"} className={classes.rightLink}>
                <Tab label="Nuestros productos" ></Tab>
              </Link>
              <Link style={{textDecoration: 'none'}} to={"/contact"} className={classes.rightLink}>
                <Tab label="Contacto" ></Tab>
              </Link>
            </Tabs>
      </AppBar>
      <div className={classes.placeholder} />
      <div className={classes.placeholder} />
    </div>
  );
}

AppAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AppAppBar);
