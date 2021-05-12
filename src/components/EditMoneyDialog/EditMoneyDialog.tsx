import { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@material-ui/core';

import { getExpenseType, getIsShowingDialog } from 'store/reducers/control/selectors';
import { hideEditDialog } from 'store/reducers/control';
import { NumberFormatCustom } from './NumberFormat';

const EditMoneyDialog: FC = () => {
  const open: boolean = useSelector(getIsShowingDialog);
  const type: string = useSelector(getExpenseType);

  const dispatch = useDispatch();
  const handleClose = () => dispatch(hideEditDialog());

  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" fullWidth>
      <DialogTitle id="form-dialog-title">{type}</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          placeholder="Количество средств"
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
