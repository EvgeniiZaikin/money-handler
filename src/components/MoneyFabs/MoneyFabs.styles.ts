import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(
  ({ breakpoints, palette, transitions, spacing }) =>
    createStyles({
      container: {
        minHeight: 'calc(100vh - 120px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      },
      root: {
        display: 'flex',
        flexWrap: 'wrap',
        minWidth: 300,
        width: '100%',
      },
      image: {
        position: 'relative',
        height: 200,
        width: '100%',
        [breakpoints.down('xs')]: {
          width: '100% !important', // Overrides inline-style
          height: 150,
        },
        '&:hover, &$focusVisible': {
          zIndex: 1,
          '& $imageBackdrop': {
            opacity: 0.15,
          },
          '& $imageMarked': {
            opacity: 0,
          },
          '& $imageTitle': {
            border: '4px solid currentColor',
          },
        },
      },
      focusVisible: {},
      imageButton: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: palette.common.white,
      },
      imageSrc: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
      },
      imageBackdrop: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: palette.common.black,
        opacity: 0.4,
        transition: transitions.create('opacity'),
      },
      imageTitle: {
        position: 'relative',
        padding: `${spacing(2)}px ${spacing(4)}px ${spacing(1) + 6}px`,
      },
      imageMarked: {
        height: 3,
        width: 18,
        backgroundColor: palette.common.white,
        position: 'absolute',
        bottom: -2,
        left: 'calc(50% - 9px)',
        transition: transitions.create('opacity'),
      },
    }),
  { name: 'AuthFabs' }
);

export { useStyles };
