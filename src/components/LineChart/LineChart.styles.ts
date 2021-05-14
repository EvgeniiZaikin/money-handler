import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(
  () =>
    createStyles({
      container: {
        paddingRight: '10px',
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
      title: {
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: '36px',
      },
    }),
  { name: 'LineChart' }
);

export { useStyles };
