import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(
  ({ palette }) =>
    createStyles({
      footer: {
        backgroundColor: palette.background.default,
      },
      item: {
        color: `${palette.grey[600]} !important`,
      },
    }),
  { name: 'Footer' }
);

export { useStyles };
