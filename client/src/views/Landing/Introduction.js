import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: '960px',
    minHeight: '100vh',
    margin: 'auto',
    padding: `0 ${theme.spacing.unit}px`,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  subheading: {
    opacity: '0.7'
  }
});

const Introduction = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Typography variant="display1" gutterBottom>
        Introduction
      </Typography>
      <Typography
        className={classes.subheading}
        variant="subheading"
        gutterBottom
      >
        Postea scripserit pro ea, dictas petentium te sea, nam primis graeco
        partiendo ad. His labores voluptatum sadipscing ex, pro eu harum populo.
        At iusto omnium definitiones mei. Ad mei iisque fierent, alii rebum
        melius ad vel. Erat solet eligendi qui ea, ad facilis conclusionemque
        est, sit at erat inani meliore.{' '}
      </Typography>
      <Typography
        className={classes.subheading}
        variant="subheading"
        gutterBottom
      >
        Cum liber doctus disputationi eu, ei purto possim senserit per, et sea
        fuisset prodesset. Albucius pertinacia cu sed, commodo nostrum lucilius
        ex per. Est ad amet omnis, falli complectitur ad mel. Alia vidit
        adipiscing usu ad, timeam adipisci eu vis, eu vix case tritani. Phaedrum
        eleifend est ex, et usu ipsum sensibus instructior. Eum ut mazim munere
        omittantur, zril erroribus expetendis est ut, vel consulatu
        concludaturque ne.
      </Typography>
    </div>
  );
};

export default withStyles(styles)(Introduction);
