export default theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('xs')]: {
      width: '100%',
      height: '408px'
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
  transitionWrap: {
    position: 'relative',
    height: '2rem'
  },
  tab: {
    [theme.breakpoints.up('xs')]: {
      width: '50%'
    }
  }
});
