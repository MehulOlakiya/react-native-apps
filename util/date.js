export function getDateFormate(date) {
  console.log("date", typeof date);
  return date.toISOString().slice(0, 10);
}

export function getDateMinusDate(date, days) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
}
