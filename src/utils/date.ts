export const getCurrentDay = (date = new Date()): string => {
  const today = new Date(date.getTime());

  return formatDate(today);
};

export const getPreviousDay = (date = new Date()): string => {
  const previous = new Date(date.getTime());
  previous.setDate(date.getDate() - 1);

  return formatDate(previous);
};

const formatDate = (date: Date): string => date.toISOString().split('T')[0];
