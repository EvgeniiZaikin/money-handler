import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(
  () =>
    createStyles({
      title: {
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: '25px',
      },
      root: {
        display: 'flex',
        margin: 'auto',
        flexDirection: 'row',
      },
      item: {
        '& svg': {
          height: '12px',
          width: '11px',
        },
      },
      label: {
        textAlign: 'center',
        marginTop: '25px',
      },
    }),
  { name: 'PieChart' }
);

export { useStyles };
