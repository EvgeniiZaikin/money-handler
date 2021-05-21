import { FC } from 'react';
import { useDispatch } from 'react-redux';
import NumberFormat, { NumberFormatValues } from 'react-number-format';

import { InputBaseComponentProps } from '@material-ui/core';

import { setSalarySum } from 'store/reducers/settings';

const NumberFormatCustom: FC<InputBaseComponentProps> = ({ inputRef, onChange, name, ...other }) => {
  const dispatch = useDispatch();
  const handleChange = (event: NumberFormatValues) => {
    const { floatValue } = event;
    floatValue && dispatch(setSalarySum(floatValue));
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
