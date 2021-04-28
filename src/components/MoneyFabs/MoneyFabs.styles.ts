import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(
  ({ palette }) =>
    createStyles({
      container: {
        minHeight: 'calc(100vh - 120px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      },
      income: {
        backgroundColor: palette.success.dark,
      },
    }),
  { name: 'AuthFabs' }
);

export { useStyles };
