import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(
  () =>
    createStyles({
      container: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      },
      content: {
        flex: '1 0 auto',
      },
    }),
  { name: 'AppLayout' }
);

export { useStyles };
