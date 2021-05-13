import { createStyles, makeStyles } from '@material-ui/core/styles';
import { common, orange, yellow } from '@material-ui/core/colors';

const useStyles = makeStyles(
  () =>
    createStyles({
      header: {
        flex: '0 0 auto',
      },
      info: {
        flex: '1',
      },
      anxiety: {
        color: yellow[500],
      },
      attention: {
        color: orange[500],
      },
      bad: {
        color: common.black,
      },
      progressContainer: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
      progress: {
        color: orange[500],
      },
    }),
  { name: 'Header' }
);

export { useStyles };
