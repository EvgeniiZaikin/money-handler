import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(
  ({ palette }) =>
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
      income: {
        backgroundColor: palette.success.dark,
      },
    }),
  { name: 'AuthFabs' }
);

export { useStyles };
