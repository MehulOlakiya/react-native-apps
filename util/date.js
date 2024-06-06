export function getDateFormate(date) {
  const formateDate = new Date(date)
  return formateDate.toISOString().slice(0, 10);
}

export function getDateMinusDate(date, days) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
}
