import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(
  () =>
    createStyles({
      container: {
        position: 'relative',
        display: 'inline-flex',
      },
      progress: {
        height: '50px !important',
        width: '50px !important',
      },
      percent: {
        top: '0',
        left: '0',
        bottom: '0',
        right: '0',
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      explanation: {
        marginTop: '10px',
      },
    }),
  { name: 'CircularProgressWithLabel' }
);

export { useStyles };
