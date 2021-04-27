import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(
  () =>
    createStyles({
      content: {
        minHeight: 'calc(100vh - 112px)',
      },
    }),
  { name: 'AppLayout' }
);

export { useStyles };
