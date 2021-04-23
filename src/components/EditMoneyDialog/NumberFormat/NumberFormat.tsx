import { InputBaseComponentProps } from '@material-ui/core';
import { FC } from 'react';
import NumberFormat from 'react-number-format';

const NumberFormatCustom: FC<InputBaseComponentProps> = ({ inputRef, onChange, name, ...other }) => {
  return (
    <NumberFormat
      {...other}
      defaultValue=""
      getInputRef={inputRef}
      onValueChange={(event) => console.log(event)}
      thousandSeparator
      isNumericString
      suffix=" ₽"
    />
  );
};

export { NumberFormatCustom };
