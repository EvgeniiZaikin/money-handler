import { FC } from 'react';
import { useDispatch } from 'react-redux';
import NumberFormat, { NumberFormatValues } from 'react-number-format';

import { InputBaseComponentProps } from '@material-ui/core';

import { setExpenseSum } from 'store/reducers/control';

const NumberFormatCustom: FC<InputBaseComponentProps> = ({ inputRef, onChange, name, ...other }) => {
  const dispatch = useDispatch();
  const handleChange = (event: NumberFormatValues) => {
    const { floatValue } = event;
    floatValue && dispatch(setExpenseSum(floatValue));
  };

  return (
    <NumberFormat
      {...other}
      defaultValue=""
      getInputRef={inputRef}
      onValueChange={handleChange}
      thousandSeparator
      isNumericString
      suffix=" ₽"
    />
  );
};

export { NumberFormatCustom };
