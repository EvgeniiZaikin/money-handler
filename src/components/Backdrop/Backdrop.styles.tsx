import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(
  ({ palette }) =>
    createStyles({
      container: {
        zIndex: 100,
        color: palette.background.paper,
        position: 'absolute',
      },
    }),
  { name: 'Backdrop' }
);

export { useStyles };
