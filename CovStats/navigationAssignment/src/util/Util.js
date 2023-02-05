export const Kformatter = number => {
  return Math.abs(number) > 999
    ? Math.sign(number) * (Math.abs(number) / 1000).toFixed(1) + 'k'
    : Math.sign(number) * Math.abs(number);
};

export const standardizeData = number => {
  return number.toLocaleString('en-IN', {
    maximumFractionDigits: 2,
    style: 'decimal',
  });
};

export const randomizePercentage = () => {
  return Math.trunc(Math.random() * 100 + 1);
};

export const randomColorChooser = () => {
  const maxVal = 0xffffff;
  return (
    '#' +
    Math.floor(Math.random() * maxVal)
      .toString(16)
      .padStart(6, '0')
      .toUpperCase()
  );
};
