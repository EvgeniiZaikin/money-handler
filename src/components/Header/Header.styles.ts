import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(
  () =>
    createStyles({
      header: {
        flex: '0 0 auto',
      },
      title: {
        flexGrow: 1,
      },
    }),
  { name: 'Header' }
);

export { useStyles };
