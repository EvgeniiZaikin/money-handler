import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(
  () =>
    createStyles({
      container: {
        minHeight: 'calc(100vh - 120px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      },
    }),
  { name: 'AuthFabs' }
);

export { useStyles };
