const editMoneyTypes: { [key: string]: { type: string; label: string } } = {
  home: {
    type: 'Расходы',
    label: 'Домашние расходы: моммунальные платежи, интернет и т.д.',
  },
  food: {
    type: 'Расходы',
    label: 'Расходы на питание',
  },
  wife: {
    type: 'Расходы',
    label: 'Подарки любимой супруге',
  },
  medicine: {
    type: 'Расходы',
    label: 'Расходы на лекарства, БАДы, обследования и т.д.',
  },
  salary: {
    type: 'Доходы',
    label: 'Получение заработной платы',
  },
  child: {
    type: 'Расходы',
    label: 'Обязательные покупки для любимой дочки',
  },
  car: {
    type: 'Расходы',
    label: 'Расходы на содержание автомобиля',
  },
  pleasure: {
    type: 'Расходы',
    label: 'Траты на различного рода развлечения: кино, кафе, фастфуд, баня и т.д.',
  },
  other: {
    type: 'Расходы',
    label: 'Расходы на другие цели, не попадающие ни под одну из категорий',
  },
};

export { editMoneyTypes };