// Taken from here https://stackoverflow.com/questions/12900332/how-do-i-round-millions-and-thousands-in-javascript
export function MoneyFormat(labelValue) {
  let num = Math.abs(Number(labelValue)) >= 1.0e+9
    ? Math.abs(Number(labelValue)) / 1.0e+9 + "B"
    : Math.abs(Number(labelValue)) >= 1.0e+6
      ? Math.abs(Number(labelValue)) / 1.0e+6 + "M"
      : Math.abs(Number(labelValue)) >= 1.0e+3
        ? Math.abs(Number(labelValue)) / 1.0e+3 + "K"
        : Math.abs(Number(labelValue))

  return parseFloat(num).toFixed(1) + num.replace(/[^B|M|K]/g,"")
}
