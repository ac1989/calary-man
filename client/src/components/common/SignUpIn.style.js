export default theme => ({
  root: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('xs')]: {
      width: '100%',
      height: '410px'
    },
    [theme.breakpoints.up('sm')]: {
      width: '320px'
    }
  },
  authServices: {
    position: 'relative',
    display: 'flex',
    flex: '1',
    flexDirection: 'column',
    padding: theme.spacing.unit * 2
  },
  tab: {
    [theme.breakpoints.up('xs')]: {
      width: '50%'
    }
  }
});
