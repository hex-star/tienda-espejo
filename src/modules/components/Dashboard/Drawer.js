import React from "react";
import {
  Drawer as MUIDrawer,
  ListItem,
  List,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { withRouter } from "react-router-dom";
import CategoryIcon from '@material-ui/icons/Category';
import HomeIcon from '@material-ui/icons/Home';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import BookmarkIcon from '@material-ui/icons/Bookmark';

const useStyles = makeStyles({
  drawer: {
    width: "190px"
  }
});

const Drawer = props => {
  const { history } = props;
  const classes = useStyles();
  const itemsList = [
    {
      text: "Inicio",
      icon: <BookmarkIcon />,
      onClick:() => history.push("/adminPanel")
    },
    {
      text: "Productos",
      icon: <CategoryIcon />,
      onClick: () => history.push("/adminPanel/AbmProductos")
    },
    {
      text: "Ventas",
      icon: <MonetizationOnIcon />,
      onClick: () => history.push("/adminPanel/Ventas")
    },
    {
      text: "Home",
      icon: <HomeIcon />,
      onClick: () => history.push("/")
    }
 
  ];
  return (
    <MUIDrawer variant="permanent" className={classes.drawer}>
      <List>
        {itemsList.map((item, index) => {
          const { text, icon, onClick } = item;
          return (
            <ListItem button key={text} onClick={onClick}>
              {icon && <ListItemIcon>{icon}</ListItemIcon>}
              <ListItemText primary={text} />
            </ListItem>
          );
        })}
      </List>
    </MUIDrawer>
  );
};

export default withRouter(Drawer);
