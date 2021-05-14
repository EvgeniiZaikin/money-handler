const getRandomIntInclusive = (min, max) => {
  const mn = Math.ceil(min);
  const mx = Math.floor(max);
  return Math.floor(Math.random() * (mx - mn + 1)) + mn; //Максимум и минимум включаются
};

const generatefakeData = () => {
  const income = 160;

  const result = [];
  for (let i = 1; i <= 12; i++) {
    result.push({
      month: i,
      income,
      expenses: getRandomIntInclusive(10, 120),
    });
  }

  return result;
};

export const confidence = generatefakeData();
