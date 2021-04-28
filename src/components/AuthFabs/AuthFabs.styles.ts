import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(
  () =>
    createStyles({
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
