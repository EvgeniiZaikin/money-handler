import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(
  () =>
    createStyles({
      container: {
        minHeight: 'calc(100vh - 120px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem 1rem',
      },
      wrapper: {
        width: '100%',
        marginBottom: '2rem',
      },
      lastWrapper: {
        marginBottom: '0',
      },
    }),
  { name: 'StatisticList' }
);

export { useStyles };
