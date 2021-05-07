import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "../components/Typography";

const styles = theme => ({
  root: {
    display: "flex",
    overflow: "hidden",
    backgroundColor: theme.palette.secondary.light
  },
  container: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(30),
    display: "flex",
    position: "relative"
  },
  item: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(0, 5)
  },
  image: {
    height: 55
  },
  title: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5)
  },
  curvyLines: {
    pointerEvents: "none",
    position: "absolute",
    top: -180
  }
});

function ProductValues(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <img
          src="/productCurvyLines.png"
          className={classes.curvyLines}
          alt="curvy lines"
        />
        <Typography variant="h4" marked="center" className={classes.title} component="h2">
          NOSOTROS
        </Typography>
        <div>
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
            <div className={classes.number}></div>
              <img
                className={classes.image}
                src="/productValues4.svg"
                alt="suitcase"
              />
              <Typography variant="h6" className={classes.title}>
                Carteras de lujo
              </Typography>
              <Typography variant="h5">
                {
                  "Ofrecemos carteras de primera cálidad"
                }
                {
                  " para todos los gustos y usos"
                }
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
            <div className={classes.number}></div>
              <img
                className={classes.image}
                src="/productValues5.svg"
                alt="graph"
              />
              <Typography variant="h6" className={classes.title}>
                Nuevos accesorios
              </Typography>
              <Typography variant="h5">
                {
                  "Actualizamos nuestros productos constantemente "
                }
                {"para ofrecerte la mayor variedad"}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
            <div className={classes.number}></div>
            
              <img
                className={classes.image}
                src="/productValues3.svg"
                alt="clock"
              />
              <Typography variant="h6" className={classes.title}>
                Diseños exclusivos
              </Typography>
              <Typography variant="h5">
                {"Todos nuestros diseños"}
                {" son exclusivos"}
              </Typography>
            </div>
          </Grid>
         
        </Grid>
        </div>
      </Container>
    </section>
  );
}

ProductValues.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProductValues);
