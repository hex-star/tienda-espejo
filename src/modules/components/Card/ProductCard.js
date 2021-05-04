import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import ShareIcon from '@material-ui/icons/Share';
import CardMedia from '@material-ui/core/CardMedia'
import FavoriteIcon from '@material-ui/icons/Favorite';
import Icon from '@material-ui/core/Icon'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';



const ProductCard = (props) =>{
    const { product, onAdd } = props;
    const { avatarUrl, title, subtitle,description, imgSrc } = product;
    return (
        <Card>
        <CardHeader
        avatar={
          <Avatar src={avatarUrl} />
        }
        action={
          <IconButton aria-label="settings">
            <ShareIcon />
          </IconButton>
        }
        title={title}
        subheader={subtitle}
      />
      <CardMedia style={{height:"250px"}} image={imgSrc} />
      <CardContent>
        <Typography variant="body2" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions spacing={10}>
        <Button 
         aria-label="share"
         variant="contained"
         color="primary"
         spacing="1"
         endIcon={<ShoppingCartIcon />}
         onClick={() => onAdd(product)}
        size="small" >Agregar al carrito</Button>
        <IconButton aria-label="show more" size="small">
            <FavoriteIcon  color="secondary" />
        </IconButton>
      </CardActions>
    </Card>
    )
};

export default ProductCard;
