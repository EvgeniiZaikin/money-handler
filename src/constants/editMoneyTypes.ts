const income: string = 'Доходы';
const expenses: string = 'Расходы';

const editMoneyTypes: { [key: string]: { type: string; label: string } } = {
  home: {
    type: expenses,
    label: 'Домашние расходы: моммунальные платежи, интернет и т.д.',
  },
  food: {
    type: expenses,
    label: 'Расходы на питание',
  },
  wife: {
    type: expenses,
    label: 'Подарки любимой супруге',
  },
  medicine: {
    type: expenses,
    label: 'Расходы на лекарства, БАДы, обследования и т.д.',
  },
  salary: {
    type: income,
    label: 'Получение заработной платы',
  },
  child: {
    type: expenses,
    label: 'Обязательные покупки для любимой дочки',
  },
  car: {
    type: expenses,
    label: 'Расходы на содержание автомобиля',
  },
  pleasure: {
    type: expenses,
    label: 'Траты на различного рода развлечения: кино, кафе, фастфуд, баня и т.д.',
  },
  other: {
    type: expenses,
    label: 'Расходы на другие цели, не попадающие ни под одну из категорий',
  },
  credit: {
    type: expenses,
    label: 'Уплата кредита',
  },
  gift: {
    type: income,
    label: 'Получение подарков',
  },
  housekeeping: {
    type: expenses,
    label: 'Расходы на бытовые нужды',
  },
};

export { editMoneyTypes };
