import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(
  () =>
    createStyles({
      block: {
        height: 'calc(100vh - 112px)',
      },
      container: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      },
    }),
  { name: 'AuthFabs' }
);

export { useStyles };
