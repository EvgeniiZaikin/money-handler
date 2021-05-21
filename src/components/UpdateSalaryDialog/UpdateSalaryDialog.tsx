import { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@material-ui/core';

import { getIsShowingDialog } from 'store/reducers/settings/selectors';
import { updateSalary, hideEditDialog } from 'store/reducers/settings';
import { NumberFormatCustom } from './NumberFormat';

const UpdateSalaryDialog: FC = () => {
  const open: boolean = useSelector(getIsShowingDialog);

  const dispatch = useDispatch();
  const handleClose = () => dispatch(hideEditDialog());
  const handleAdd = () => dispatch(updateSalary());

  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" fullWidth>
      <DialogTitle id="form-dialog-title">Зарплата (на руки)</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          placeholder="Размер заработной платы"
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
        <Button onClick={handleAdd} color="primary">
          Добавить
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export { UpdateSalaryDialog };
