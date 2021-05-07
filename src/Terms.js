import withRoot from './modules/withRoot';
// --- Post bootstrap -----
import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Markdown from './modules/components/Markdown';
import Typography from './modules/components/Typography';
import AppAppBar from './modules/views/AppAppBar';
import terms from './modules/views/terms.md';
import AppFooter from './modules/views/AppFooter';

function Terms(props) {
  const { cartItemsCount, email } = props;
  return (
    <React.Fragment>
      <AppAppBar cartItemsCount={cartItemsCount} email={email} />
      <Container>
        <Box mt={7} mb={12}>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            Términos Y Condiciones
          </Typography>
          <p>

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet fringilla elit, sit amet semper massa. Praesent at venenatis urna. Suspendisse hendrerit sollicitudin libero, ut ornare arcu lacinia eu. Ut eu mauris aliquam, tempus nibh in, feugiat dolor. In a ex at metus luctus tempus eget ut ex. Integer lacinia, lectus sed vestibulum semper, mauris felis ultricies quam, sed facilisis ante libero fringilla nisl. Morbi maximus mollis mi, non aliquam dui sagittis quis. Praesent eget posuere lorem. Phasellus a dui rutrum, ullamcorper nulla quis, porta nisl. Phasellus id quam eu purus semper maximus et vitae ante. Mauris molestie nulla a arcu finibus bibendum. Curabitur quis rutrum dolor. Nunc in metus pretium odio rhoncus luctus vel non libero.

Cras molestie feugiat nisi, molestie consectetur ligula lobortis sed. Aliquam ac est eu est ullamcorper molestie. Donec elementum congue blandit. Aliquam quis consequat eros. Pellentesque feugiat, purus quis ultricies lacinia, neque massa interdum nisl, vel lacinia orci lacus at orci. Morbi nisl est, commodo id sagittis vitae, lacinia placerat libero. Fusce nec mi quis enim tristique ultrices vitae nec mi. Nunc vel accumsan leo. Vivamus turpis est, facilisis sit amet mauris sed, accumsan rutrum quam. Nulla blandit vel elit id dapibus. Donec dolor mauris, tincidunt semper arcu ac, interdum dapibus sem. Nunc venenatis mauris non leo luctus dapibus. Integer pharetra sit amet nibh non laoreet. Integer in eros ut lacus ornare semper ut faucibus eros. Cras a feugiat quam. Nullam vehicula efficitur aliquet.

Morbi sed justo vel lacus dictum tristique. Pellentesque interdum augue quis posuere volutpat. Donec dapibus, turpis nec faucibus fringilla, dolor ante egestas ipsum, tempus pretium eros tortor quis nulla. Nam ut efficitur felis, ut accumsan libero. Vivamus erat orci, pellentesque sit amet diam pharetra, vestibulum consequat ex. Nunc quis ligula et arcu hendrerit hendrerit sed ac mauris. Fusce in leo tempor, porta nulla quis, aliquet lacus. Nullam malesuada congue augue, vel euismod tellus hendrerit pulvinar. Proin consectetur accumsan orci, ut finibus ante auctor et. Suspendisse faucibus elit eget vehicula varius. Fusce mattis tristique pellentesque. In semper ligula aliquet tellus rhoncus egestas. Vivamus quam nibh, sagittis a dictum eu, fermentum ut neque. Sed id ultrices dolor, a aliquam tortor.

Sed pellentesque purus a ipsum mollis, nec maximus nunc varius. Quisque fringilla metus et magna fringilla accumsan. Nulla interdum ultrices ex sed iaculis. Phasellus rhoncus commodo turpis, eget tempor velit condimentum at. Nunc dapibus massa vel metus rhoncus, id scelerisque nisl efficitur. Duis ac felis eget magna sollicitudin dictum et sed mauris. Etiam eget urna in sem dignissim luctus. Morbi tristique vehicula purus, sit amet porttitor dui posuere a.

Vivamus interdum vestibulum mi vel vehicula. Maecenas tincidunt congue placerat. Nulla facilisi. Pellentesque pharetra ac velit at bibendum. Sed feugiat, nisl quis condimentum tristique, nulla mi sodales neque, non tempus turpis ipsum fringilla diam. Sed eleifend convallis ante, euismod tempor diam hendrerit vel. Praesent dictum mi eu congue tempor. Vivamus cursus lorem at urna aliquam egestas. Aliquam ultrices lectus vel laoreet consequat. Mauris congue sem ac aliquet ornare. In varius rhoncus congue. Praesent vel mi neque. Phasellus non ante quis lorem tristique tristique non in diam. Etiam dapibus quam vel nulla iaculis accumsan. Kucci ❤ </p>
        </Box>
      </Container>
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Terms);
