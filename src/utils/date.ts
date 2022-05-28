const formatDate = (date: Date): string =>
  `${date.getFullYear()}-${'0' + (+date.getMonth() + 1)}-${date.getDate()}`;

export const getCurrentDay = (): string => {
  const today = new Date();

  return formatDate(today);
};

export const getPreviousDay = (date = new Date()): string => {
  const previous = new Date(date.getTime());
  previous.setDate(date.getDate() - 1);

  return formatDate(previous);
};
