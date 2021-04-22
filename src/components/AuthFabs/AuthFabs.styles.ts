import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    block: {
      textAlign: 'center',
      marginBottom: '2rem',
    },
  })
);

export { useStyles };
