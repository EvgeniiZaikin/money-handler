import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(
  () =>
    createStyles({
      container: {
        paddingTop: '2rem',
      },
      chart: {
        paddingRight: '20px',
      },
      root: {
        display: 'flex',
        margin: 'auto',
        flexDirection: 'row',
      },
      item: {
        '& svg': {
          height: '11px',
          width: '11px',
        },
      },
    }),
  { name: 'LineChart' }
);

export { useStyles };
