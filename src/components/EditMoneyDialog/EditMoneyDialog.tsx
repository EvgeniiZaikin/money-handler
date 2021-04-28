import { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from '@material-ui/core';

import { getIsShowEditMoneyDialog, getTypeEditMoneyDialog } from 'store/reducers/money/selectors';
import { hideEditMoneyDialog } from 'store/reducers/money';
import { editMoneyTypes } from 'constants/editMoneyTypes';
import { NumberFormatCustom } from './NumberFormat';

const EditMoneyDialog: FC = () => {
  const open: boolean = useSelector(getIsShowEditMoneyDialog);
  const type: string = useSelector(getTypeEditMoneyDialog);

  const dispatch = useDispatch();
  const handleClose = () => dispatch(hideEditMoneyDialog());

  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">{editMoneyTypes[type]?.label}</DialogTitle>
      <DialogContent>
        <DialogContentText>{editMoneyTypes[type]?.type}</DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          label="Количество средств"
          fullWidth
          InputProps={{
            inputComponent: NumberFormatCustom,
          }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Отменить
        </Button>
        <Button onClick={handleClose} color="primary">
          Добавить
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export { EditMoneyDialog };
