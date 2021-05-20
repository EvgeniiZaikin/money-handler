import { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@material-ui/core';

import { getIsShowingDialog } from 'store/reducers/incomes/selectors';
import { addIncome, hideEditDialog } from 'store/reducers/incomes';
import { NumberFormatCustom } from './NumberFormat';

const AddIncomeDialog: FC = () => {
  const open: boolean = useSelector(getIsShowingDialog);

  const dispatch = useDispatch();
  const handleClose = () => dispatch(hideEditDialog());
  const handleAdd = () => dispatch(addIncome());

  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" fullWidth>
      <DialogTitle id="form-dialog-title">Доход</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          placeholder="Размер дохода"
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

export { AddIncomeDialog };
