import { FC, ReactElement } from 'react';
import { useSelector } from 'react-redux';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

import { getIsShowingBackdrop } from 'store/reducers/backdrop/selectors';
import { useStyles } from './Backdrop.styles';

const BackdropComponent: FC = (): ReactElement => {
  const show = useSelector(getIsShowingBackdrop);
  const { container } = useStyles();

  return (
    <div className={container}>
      <Backdrop open={show}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
};

export { BackdropComponent as Backdrop };
