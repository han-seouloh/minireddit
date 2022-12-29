export const formatNum = (num) => {
  const prefixes = ['','k','m','b'];
  let formattedNum;

  if (num > 1000000000) {
    formattedNum = `${(num/1000000000).toFixed(1)}${prefixes[3]}`;
  } else if (num > 1000000) {
    formattedNum = `${(num/1000000).toFixed(1)}${prefixes[2]}`;
  } else if (num > 1000) {
    formattedNum = `${(num/1000).toFixed(1)}${prefixes[1]}`;
  } else {
    formattedNum = `${num}${prefixes[0]}`;
  };

  return formattedNum;
};