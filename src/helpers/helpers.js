export const debounce = (func, timeout) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
};

export const PrintDate = (date) => {
  return (
    date.getFullYear() +
    "-" +
    (date.getMonth() + 1).toString().padStart(2, "0") +
    "-" +
    date.getDate().toString().padStart(2, "0")
  );
};

export const range = (start, end) => {
  const list = [];
  for (let i = start; i <= end; i++) {
    list.push(i);
  }
  return list;
};
