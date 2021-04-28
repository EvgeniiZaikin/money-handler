import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(
  ({ palette }) =>
    createStyles({
      container: {
        height: '100%',
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
