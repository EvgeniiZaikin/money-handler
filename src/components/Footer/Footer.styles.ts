import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(
  ({ palette }) =>
    createStyles({
      footer: {
        backgroundColor: palette.background.default,
      },
    }),
  { name: 'Footer' }
);

export { useStyles };
